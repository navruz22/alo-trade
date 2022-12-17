import React, { useEffect, useState } from "react";
import PageHeader from "../../../Components/PageHeaders/PageHeader";
import MainPageHeader from "../../../Components/MainPageHeader/MainPageHeader";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "./constants";
import { filterProduct } from "../../Filter/filterSlice";
import {
  deleteProduct,
  getProductsCount,
  getProducts,
  clearProductData,
} from "./productSlice";
import UniversalModal from "../../../Components/Modal/UniversalModal";
import { map, uniqueId } from "lodash";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { getTranslations } from "../../../translation";
import { useTranslation } from "react-i18next";
import Filter from "../../Filter/Filter";
import Pagination from "../../../Components/Pagination/Pagination";

const Products = () => {
  const { t } = useTranslation(["common"]);
  const translations = getTranslations(t);
  const dispatch = useDispatch();
  const {
    logged,
    userData: { user, organization },
  } = useSelector((state) => state.login);
  const { products } = useSelector((state) => state.products);
  const {
    product,
    categories,
    subcategories,
    tradetypes,
    regions,
    districts,
    name,
  } = useSelector((state) => state.filter);
  const [productId, setProductId] = useState(null);
  const [totalDatas, setTotalDatas] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
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
    setProductId(null);
  };

  const deleteHandler = (id) => {
    setProductId(id);
    setModalBody("approve");
    setModalVisible(true);
  };

  const editHandler = (id) => {
    setProductId(id);
    setModalBody("createProduct");
    setModalVisible(true);
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    dispatch(filterProduct(value));
  };

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
      page: 0,
      count: countPage,
      product,
      categories,
      subcategories,
      tradetypes,
      regions,
      districts,
      user: user?._id,
      name,
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
  }, [
    dispatch,
    product,
    categories,
    subcategories,
    tradetypes,
    regions,
    districts,
    user,
    name,
  ]);

  useEffect(() => {
    const data = {
      page: currentPage,
      count: countPage,
      product,
      categories,
      subcategories,
      tradetypes,
      regions,
      districts,
      user: user?._id,
      name,
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
  }, [dispatch, product, currentPage, countPage]);

  useEffect(() => {
    dispatch(clearProductData());
  }, [dispatch]);

  return (
    <div className="w-full bg-white">
      <div className="p-2 md:container">
        <div className="w-full block md:flex">
          <Filter
            filterBody={filterBody}
            filterVisible={filterVisible}
            setFilterVisible={setFilterVisible}
          />
          <div className="w-full px-2 md:px-4 flex flex-col gap-[20px]">
            <PageHeader
              isOrganization={!!organization}
              totalDatas={totalDatas}
              countPage={countPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              filter={filter}
              count={totalDatas}
              onClick={() => openModal("createProduct")}
              buttonTitle="Mahsulot yaratish"
              handleFilter={handleFilter}
              filterData={product}
              setFilterBody={setFilterBody}
              setFilterVisible={setFilterVisible}
              countTitle="Jami:"
            />
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
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
        productId={productId}
        modalBody={modalBody}
        headerText="Mahsulotni o'chirish"
        title="Siz rostdan ham mahsulotni o'chirmoqchimisiz?"
        approveFunction={deleteProductById}
      />
    </div>
    // <div className="h-full w-full bg-neutral-100 flex flex-col">
    //   {logged ? (
    //     <PageHeader
    //       isOrganization={!!organization}
    //       totalDatas={totalDatas}
    //       countPage={countPage}
    //       currentPage={currentPage}
    //       setCurrentPage={setCurrentPage}
    //       filter={filter}
    //       count={totalDatas}
    //       onClick={() => openModal("createProduct")}
    //       buttonTitle="Mahsulot yaratish"
    //       handleFilter={handleFilter}
    //       filterData={product}
    //       countTitle="Jami:"
    //     />
    //   ) : (
    //     <MainPageHeader
    //       totalDatas={totalDatas}
    //       countPage={countPage}
    //       currentPage={currentPage}
    //       setCurrentPage={setCurrentPage}
    //       translations={translations}
    //     />
    //   )}
    //   <div className="p-4 pt-0 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 overflow-scroll">
    //     {map(products, (product) => (
    //       <ProductCard
    //         logged={logged}
    //         key={uniqueId()}
    //         product={product}
    //         editHandler={editHandler}
    //         deleteHandler={deleteHandler}
    //       />
    //     ))}
    //   </div>
    //   <UniversalModal
    //     isOpen={modalVisible}
    //     body={modalBody}
    //     closeModal={closeHandler}
    //     toggleModal={toggleModal}
    //     productId={productId}
    //     modalBody={modalBody}
    //     headerText="Mahsulotni o'chirish"
    //     title="Siz rostdan ham mahsulotni o'chirmoqchimisiz?"
    //     approveFunction={deleteProductById}
    //   />
    // </div>
  );
};

export default Products;
