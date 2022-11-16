import React, { useEffect, useState } from "react";
import UniversalModal from "../../../Components/Modal/UniversalModal";
import PageHeader from "../../../Components/PageHeaders/PageHeader";
import OrderCard from "../../../Components/OrderCard/OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, getOrdersCount, getOrders } from "./orderSlice";
import { map, uniqueId } from "lodash";
import { filterOrder } from "../../Filter/filterSlice";
import MainPageHeader from "../../../Components/MainPageHeader/MainPageHeader";
import { filter } from "./constants";
import { useTranslation } from "react-i18next";
import { getTranslations } from "../../../translation";

const Orders = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation(["common"]);
  const translations = getTranslations(t);
  const filterData = filter(t);
  const {
    logged,
    userData: { user, organization },
  } = useSelector((state) => state.login);
  const { orders } = useSelector((state) => state.orders);
  const {
    order,
    categories,
    subcategories,
    tradetypes,
    regions,
    districts,
    name,
  } = useSelector((state) => state.filter);
  const [orderId, setOrderId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalDatas, setTotalDatas] = useState(0);
  const countPage = 10;

  const [modalVisible, setModalVisible] = useState(false);
  const [modalBody, setModalBody] = useState(null);

  const closeHandler = () => {
    setModalVisible(false);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const openModal = (body) => {
    setModalBody(body);
    setModalVisible(true);
    setOrderId(null);
  };

  const deleteHandler = (id) => {
    setOrderId(id);
    setModalBody("approve");
    setModalVisible(true);
  };

  const editHandler = (id) => {
    setOrderId(id);
    setModalBody("createOrder");
    setModalVisible(true);
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    dispatch(filterOrder(value));
  };

  const deleteOrderById = () => {
    orderId &&
      dispatch(deleteOrder({ id: orderId })).then(({ error }) => {
        if (!error) {
          setModalVisible(false);
          setOrderId(null);
        }
      });
  };

  useEffect(() => {
    setCurrentPage(0);
    const data = {
      page: 0,
      count: countPage,
      order,
      categories,
      subcategories,
      tradetypes,
      regions,
      districts,
      user: user?._id,
      name,
    };
    dispatch(getOrders(data));
    dispatch(getOrdersCount(data)).then(
      ({ error, payload: { totalCount } }) => {
        if (!error) {
          setTotalDatas(totalCount);
        }
      }
    );
    //    eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order, categories, subcategories, tradetypes, regions, districts, name]);

  useEffect(() => {
    const data = {
      page: currentPage,
      count: countPage,
      order,
      categories,
      subcategories,
      tradetypes,
      regions,
      districts,
      user: user?._id,
      name,
    };
    dispatch(getOrders(data));
    dispatch(getOrdersCount(data)).then(
      ({ error, payload: { totalCount } }) => {
        if (!error) {
          setTotalDatas(totalCount);
        }
      }
    );
    //    eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, order, currentPage, countPage]);

  return (
    <div className="h-full w-full bg-neutral-100 flex flex-col justify-between">
      {logged ? (
        <PageHeader
          translations={translations}
          isOrganization={!!organization}
          currentPage={currentPage}
          countPage={countPage}
          totalDatas={totalDatas}
          setCurrentPage={setCurrentPage}
          count={totalDatas}
          onClick={() => openModal("createOrder")}
          countTitle={translations.jami}
          buttonTitle={translations.buyurtma_yaratish}
          handleFilter={handleFilter}
          filterData={order}
          filter={filterData}
        />
      ) : (
        <MainPageHeader
          translations={translations}
          currentPage={currentPage}
          countPage={countPage}
          totalDatas={totalDatas}
          setCurrentPage={setCurrentPage}
        />
      )}

      <div className="p-4 pt-0 h-full overflow-scroll">
        {map(orders, (order) => (
          <OrderCard
            translations={translations}
            logged={logged}
            key={uniqueId()}
            order={order}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>

      <UniversalModal
        isOpen={modalVisible}
        body={modalBody}
        closeModal={closeHandler}
        toggleModal={toggleModal}
        orderId={orderId}
        modalBody={modalBody}
        headerText={translations.buyurtmani_ochirish}
        title={translations.siz_buyurtmani_ochirishni_xohlaysizmi}
        approveFunction={deleteOrderById}
      />
    </div>
  );
};

export default Orders;
