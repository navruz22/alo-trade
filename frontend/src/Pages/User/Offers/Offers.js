import React, { useEffect, useState } from "react";
import ChatUser from "../../../Components/OfferChat/ChatUser";
import ProductData from "../../../Components/OfferChat/ProductData";
import ChatIncomingMessage from "../../../Components/OfferChat/ChatIncomingMessage";
import ChatSendingMessage from "../../../Components/OfferChat/ChatSendingMessage";
import ChatInput from "../../../Components/OfferChat/ChatInput";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProductByOffer } from "../Products/productSlice";
import { getOrderByOffer } from "../Orders/orderSlice";
import { universalToast } from "../../../Components/ToastMessages/ToastMessages";
import warning from "react-redux/es/utils/warning";
import {
  createOffer,
  getMessagesByOffer,
  getOfferByUser,
  getOffers,
  setAllMessages,
} from "./offerSlice";
import { map, uniqueId } from "lodash";

const Offers = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {
    userData: { user, organization },
  } = useSelector((state) => state.login);

  const { offers, loading, error, messages } = useSelector(
    (state) => state.offers
  );

  const [id, setId] = useState(null);
  const [type, setType] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [message, setMessage] = useState("");
  const [offer, setOffer] = useState(null);

  const changeHandler = (e) => {
    setMessage(e.target.value);
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      sendHandler();
    }
  };

  const sendHandler = () => {
    if (message.length === 0) {
      return universalToast("Diqqat! Xabar kiritilmagan", "warning");
    }

    if (!currentProduct && !currentOrder)
      return universalToast("Mahsulot yoki buyurtma tanlanmagan", "warning");

    const recipient = currentProduct
      ? currentProduct.organization
        ? currentProduct.organization._id
        : currentProduct.user._id
      : currentOrder.organization
      ? currentOrder.organization._id
      : currentOrder.user._id;

    const data = {
      message,
      product: currentProduct ? currentProduct._id : undefined,
      order: currentOrder ? currentOrder._id : undefined,
    };
    !offer &&
      dispatch(createOffer({ ...data })).then(({ error }) => {
        if (!error) {
          setMessage("");
        }
      });
  };

  const changeOffer = (offer) => {
    if (offer.order) {
      setType("order");
      setId(offer.order._id);
    }
    if (offer.product) {
      offer.product && setType("product");
      offer.product && setId(offer.product._id);
    }
    setOffer(offer);
  };

  const isUser = (offererUser) => {
    return offererUser?._id === user?._id;
  };
  useEffect(() => {
    if (location.state) {
      const type = location.state.type;
      const id = location.state.id;
      setId(id);
      setType(type);
      const data = { [type]: id };
      dispatch(getOfferByUser(data)).then(({ error, payload: { offer } }) => {
        if (!error) {
          setOffer(offer);
          !offer && dispatch(setAllMessages({ messages: [] }));
        }
      });
    }
  }, [location.state, dispatch]);

  useEffect(() => {
    if (id) {
      if (type === "product") {
        dispatch(getProductByOffer({ id })).then(
          ({ error, payload: { product } }) => {
            if (!error) {
              setCurrentOrder(null);
              setCurrentProduct(product);
            }
          }
        );
      }
      if (type === "order") {
        dispatch(getOrderByOffer({ id })).then(
          ({ error, payload: { order } }) => {
            if (!error) {
              setCurrentProduct(null);
              setCurrentOrder(order);
            }
          }
        );
      }
    }
  }, [id, type, dispatch]);

  useEffect(() => {
    dispatch(getOffers());
  }, [dispatch]);

  useEffect(() => {
    offer && dispatch(getMessagesByOffer({ id: offer._id }));
  }, [dispatch, offer]);

  return (
    <div className="flex flex-row">
      <div className="h-screen pb-20 overflow-scroll max-w-[400px] min-w-[300px] w-full w-1/4">
        {map(offers, (offer) => (
          <ChatUser
            changeOffer={() => changeOffer(offer)}
            user={user}
            key={uniqueId("chatUser")}
            offer={offer}
          />
        ))}
      </div>
      <div className="w-full h-screen pb-20 w-1/2 border-y shadow-lg bg-neutral-100 relative">
        <div className="w-full h-screen overflow-scroll pb-32 p-3">
          {map(messages, (message) =>
            isUser(message.user) ? (
              <ChatSendingMessage key={uniqueId("message")} message={message} />
            ) : (
              <ChatIncomingMessage
                key={uniqueId("message")}
                message={message}
              />
            )
          )}
        </div>
        <ChatInput
          value={message}
          changeHandler={changeHandler}
          enterHandler={enterHandler}
          sendHandler={sendHandler}
        />
      </div>
      <div className="w-full h-screen pb-20 overflow-scroll w-1/4 p-3">
        <ProductData data={currentProduct || currentOrder} />
      </div>
    </div>
  );
};

export default Offers;
