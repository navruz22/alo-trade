import React, { useEffect, useState } from "react";
import PageHeader from "../../../Components/PageHeaders/PageHeader";
import MainPageHeader from "../../../Components/MainPageHeader/MainPageHeader";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "./constants";
import { onScroll } from "../globalConstants";
import { filterProduct } from "../../Filter/filterSlice";
import { deleteProduct } from "./productSlice";
import UniversalModal from "../../../Components/Modal/UniversalModal";
import { map, uniqueId } from "lodash";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { getProducts, getProductsByFilter } from "../Products/productSlice";

const Products = () => {
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
  const [currentPage, setCurrentPage] = useState(0);
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
    setProductId(null);
  };

  const handleScroll = (e) => {
    onScroll({ e, currentPage, setCurrentPage, countPage, datas: products });
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
      count: 10,
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

    currentPage !== 0 && dispatch(getProductsByFilter(data));
    //    eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, product, currentPage, countPage]);
  console.log(name);
  return (
    <div
      className="h-screen w-full pb-20 bg-neutral-100 overflow-scroll"
      onScroll={handleScroll}
    >
      {logged ? (
        organization && (
          <PageHeader
            filter={filter}
            count={2000}
            onClick={() => openModal("createProduct")}
            buttonTitle="Mahsulot yaratish"
            handleFilter={handleFilter}
            filterData={product}
            countTitle="Jami:"
          />
        )
      ) : (
        <MainPageHeader />
      )}

      <div className="p-4 pt-0 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
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

      <UniversalModal
        isOpen={modalVisible}
        body={modalBody}
        closeModal={closeHandler}
        toggleModal={toggleModal}
        productId={productId}
        modalBody={modalBody}
        headerText="Buyurtmani o'chirish"
        title="Siz rostdan ham buyurtmani o'chirmoqchimisiz?"
        approveFunction={deleteProductById}
      />
    </div>
  );
};

export default Products;
