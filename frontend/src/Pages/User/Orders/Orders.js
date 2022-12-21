import React, { useEffect, useState } from "react";
import UniversalModal from "../../../Components/Modal/UniversalModal";
import PageHeader from "../../../Components/PageHeaders/PageHeader";
import OrderCard from "../../../Components/OrderCard/OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, getOrdersCount, getOrders } from "./orderSlice";
import { map, uniqueId } from "lodash";
import { filterOrder } from "../../Filter/filterSlice";
import { filter } from "./constants";
import { useTranslation } from "react-i18next";
import { getTranslations } from "../../../translation";
import Filter from "../../Filter/Filter";
import Pagination from "../../../Components/Pagination/Pagination";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation(["common"]);
  const translations = getTranslations(t);
  const filterData = filter(t);
  const navigate = useNavigate();
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

  const [filterVisible, setFilterVisible] = useState(false);
  const [filterBody, setFilterBody] = useState(null);

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
    <div className="w-full bg-white pb-10">
      <div className="md:container">
        <div className="w-full block md:flex">
          <Filter
            filterBody={filterBody}
            filterVisible={filterVisible}
            setFilterVisible={setFilterVisible}
          />
          <div className="w-full md:px-4 flex flex-col gap-[20px]">
            <PageHeader
              translations={translations}
              isOrganization={!!organization}
              currentPage={currentPage}
              countPage={countPage}
              totalDatas={totalDatas}
              setCurrentPage={setCurrentPage}
              count={totalDatas}
              onClick={() => {
                if (logged) {
                  openModal("createOrder");
                } else {
                  navigate("/sign-up/business");
                }
              }}
              countTitle={translations.jami}
              buttonTitle={translations.buyurtma_yaratish}
              handleFilter={handleFilter}
              filterData={order}
              filter={filterData}
              setFilterBody={setFilterBody}
              setFilterVisible={setFilterVisible}
              mainTitle="Заявки"
            />
            <div className="px-4 flex flex-col gap-[20px]">
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
            {totalDatas > 0 && (
              <div className="flex justify-center py-2">
                <Pagination
                  totalDatas={totalDatas}
                  countPage={countPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
              </div>
            )}
          </div>
        </div>
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
