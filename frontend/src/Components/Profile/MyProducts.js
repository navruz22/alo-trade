import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProductsCount,
  getProducts,
  clearProductData,
} from "../../Pages/User/Products/productSlice";
import { map, uniqueId } from "lodash";
import PageHeader from "../PageHeaders/PageHeader";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "../Pagination/Pagination";
import UniversalModal from "../Modal/UniversalModal";
import AddButton from "../Buttons/AddButton";
import { universalToast } from "../ToastMessages/ToastMessages";

const MyProducts = () => {
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

  const deleteProductById = () => {
    if (productId) {
      dispatch(deleteProduct({ id: productId })).then(({ error }) => {
        if (!error) {
          setModalVisible(false);
          setProductId(null);
          universalToast("Товар успешно удален", "success");
        }
      });
    }
  };

  useEffect(() => {
    const data = {
      product: "my",
      page: 0,
      count: countPage,
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
      product: "my",
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
        <div className="w-full px-2 md:px-4">
          <div className="flex justify-end w-full">
            <AddButton
              onClick={() => openModal("createProduct")}
              title={"Создать товар"}
            />
          </div>
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

      <UniversalModal
        isOpen={modalVisible}
        body={modalBody}
        closeModal={closeHandler}
        toggleModal={toggleModal}
        productId={productId}
        modalBody={modalBody}
        headerText="Удалить товар"
        title="Вы действительно хотите удалить товар?"
        approveFunction={deleteProductById}
      />
    </div>
  );
};

export default MyProducts;
