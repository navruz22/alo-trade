import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Pagination from "../../../Components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProducts,
  getProductsCount,
} from "../Products/productSlice";
import { map, uniqueId } from "lodash";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import UniversalModal from "../../../Components/Modal/UniversalModal";

const Oeganization = () => {
  const dispatch = useDispatch();
  const [totalDatas, setTotalDatas] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [productId, setProductId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalBody, setModalBody] = useState(null);

  const { products } = useSelector((state) => state.products);
  const { logged } = useSelector((state) => state.login);
  const countPage = 10;

  const location = useLocation();
  const { _id } = location.state;

  const closeHandler = () => {
    setModalVisible(false);
  };

  const editHandler = (id) => {
    setProductId(id);
    setModalBody("createProduct");
    setModalVisible(true);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const deleteHandler = (id) => {
    setProductId(id);
    setModalBody("approve");
    setModalVisible(true);
  };

  useEffect(() => {
    const data = {
      page: 0,
      count: countPage,
      organization: _id,
    };
    setCurrentPage(0);
    dispatch(getProducts(data));
    dispatch(getProductsCount(data)).then(
      ({ error, payload: { totalCount } }) => {
        if (!error) {
          setTotalDatas(totalCount);
        }
      }
    );
  }, [dispatch, countPage, _id]);

  const deleteProductById = () => {
    productId &&
      dispatch(deleteProduct({ id: productId })).then(({ error }) => {
        if (!error) {
          setModalVisible(false);
          setProductId(null);
        }
      });
  };

  useEffect(() => {
    const data = {
      page: currentPage,
      count: countPage,
      organization: _id,
    };

    dispatch(getProducts(data));
    dispatch(getProductsCount(data)).then(
      ({ payload: { totalCount }, error }) => {
        if (!error) {
          setTotalDatas(totalCount);
        }
      }
    );
    //    eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, currentPage, countPage]);

  return (
    <div className="flex flex-row h-full overflow-hidden w-full">
      <div className="w-1/3 min-w-[300px] max-w-[400px] overflow-scroll shadow">
        <div className="p-4">Organization</div>
      </div>
      <div className="h-full w-full bg-neutral-100 flex flex-col">
        <div className="flex  justify-between shadow w-full px-5 py-3 items-center bg-white-900">
          <div className="font-amazonbold">
            <span>Jami: </span>
            <span className="text-primary-900">{totalDatas} ta</span>
          </div>
          <div>
            {totalDatas > 0 && (
              <Pagination
                totalDatas={totalDatas}
                setCurrentPage={setCurrentPage}
                countPage={countPage}
                currentPage={currentPage}
              />
            )}
          </div>
        </div>
        <div className="p-4 pt-0 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 overflow-scroll">
          {map(products, (product) => (
            <ProductCard
              logged={logged}
              key={uniqueId()}
              product={product}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
            />
          ))}
        </div>
      </div>

      <UniversalModal
        isOpen={modalVisible}
        body={modalBody}
        closeModal={closeHandler}
        toggleModal={toggleModal}
        productId={productId}
        modalBody={modalBody}
        headerText="Mahsulotni o'chirish"
        title="Siz rostdan ham mahsulotni o'chirmoqchimisiz?"
        approveFunction={deleteProductById}
      />
    </div>
  );
};

export default Oeganization;
