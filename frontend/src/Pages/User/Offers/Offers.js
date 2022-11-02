import React, { useEffect, useRef, useState } from "react";
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
import {
  createMessage,
  createOffer,
  getMessagesByOffer,
  getOfferById,
  getOfferByUser,
  getOffers,
  setAllMessages,
} from "./offerSlice";
import { map, uniqueId } from "lodash";
import socket from "../../../Config/socket";

const Offers = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const messagesEndRef = useRef(null);
  const {
    userData: { user },
  } = useSelector((state) => state.login);

  const { offers, messages } = useSelector((state) => state.offers);

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

    const data = {
      message,
      product: currentProduct ? currentProduct._id : undefined,
      order: currentOrder ? currentOrder._id : undefined,
      offer: offer ? offer._id : undefined,
    };
    dispatch(offer ? createMessage(data) : createOffer(data)).then(
      ({ error, payload: { offer, message } }) => {
        if (!error) {
          setMessage("");
          setOffer(offer);
          newMessageHasBeenSend({
            recipient: message.recipient,
          });
        }
      }
    );
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const newMessageHasBeenSend = ({ recipient }) => {
    socket.emit("sendMessage", { recipient });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    socket.on("error", ({ id, message }) => {
      user._id === id && universalToast(message, "error");
    });
    socket.on("newMessage", ({ recipient }) => {
      const isUser = recipient === user._id;
      isUser && dispatch(getOffers());
      isUser &&
        offer &&
        dispatch(getMessagesByOffer({ id: offer._id })).then(({ error }) => {
          if (!error) {
            dispatch(getOfferById({ id: offer._id }));
          }
        });
    });
  }, [user, dispatch, offer]);

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
    } else {
      dispatch(setAllMessages({ messages: [] }));
      setCurrentOrder(null);
      setCurrentProduct(null);
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
    offer &&
      dispatch(getMessagesByOffer({ id: offer._id })).then(({ error }) => {
        if (!error) {
          dispatch(getOfferById({ id: offer._id }));
        }
      });
  }, [dispatch, offer]);

  return (
    <div className="flex flex-row h-full w-full ">
      <div className="max-w-[400px] min-w-[300px] w-1/4 h-full overflow-scroll px-3">
        {map(offers, (offer) => (
          <ChatUser
            changeOffer={() => changeOffer(offer)}
            user={user}
            key={uniqueId("chatUser")}
            offer={offer}
          />
        ))}
      </div>
      <div className="h-full w-1/2 relative bg-neutral-200 flex flex-col">
        <div className="h-full overflow-scroll">
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
          <div className="" ref={messagesEndRef} />
        </div>
        <ChatInput
          value={message}
          changeHandler={changeHandler}
          enterHandler={enterHandler}
          sendHandler={sendHandler}
        />
      </div>
      <div className="max-w-[400px] min-w-[300px] w-1/4 h-full overflow-scroll p-4">
        <ProductData data={currentProduct || currentOrder} />
      </div>
    </div>
  );
};

export default Offers;
