import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrganizationById } from "./organizationSlice";
import noImage from "../../../assets/images/no-image.svg";
import { IoCallSharp, IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { map, uniqueId } from "lodash";
import { useTranslation } from "react-i18next";
import { getTranslations } from "../../../translation";
import background1 from "../../../assets/background/1.png";
import background2 from "../../../assets/background/2.png";
import background3 from "../../../assets/background/3.png";
import background4 from "../../../assets/background/4.png";
import UniversalModal from "../../../Components/Modal/UniversalModal";
import Pagination from "../../../Components/Pagination/Pagination";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { getProducts, getProductsCount } from "../Products/productSlice";

const Organization = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation(["common"]);
  const { savdo_turi } = getTranslations(t);

  const {
    logged,
    userData: { user },
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
  const [organization, setOrganization] = useState(null);

  const [content, setContent] = useState("descr");

  const backgrounds = [background1, background2, background3, background4];
  const background = backgrounds[Math.floor(Math.random() * 4)];

  const location = useLocation();
  const { _id } = location.state;
  console.log(location);

  useEffect(() => {
    dispatch(getOrganizationById({ id: _id })).then(
      ({ error, payload: { organization } }) => {
        if (!error) {
          setOrganization(organization);
        }
      }
    );
  }, [_id, dispatch]);

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
  }, [dispatch, product, currentPage, countPage]);

  return (
    <div className="bg-white w-full h-full">
      <div className="bg-alotrade">
        <div className="container">
          <div className="w-full flex items-center gap-4 md:gap-6 flex-col md:flex-row py-6">
            <div className="rounded-full bg-white-900 p-1">
              <img
                className="w-[200px] h-[200px] rounded-full"
                src={organization?.image || noImage}
                alt=""
              />
            </div>
            <div className="flex flex-col text-white font-bold">
              <div>
                <h3 className="font-amazonbold text-[2rem]">
                  {organization?.name}
                </h3>
                <p className="flex items-center">
                  <IoLocationOutline />{" "}
                  <span className="ml-2">
                    {organization?.region?.label},{" "}
                    {organization?.district?.label}
                  </span>
                </p>
                <h3 className="flex">
                  {savdo_turi}:
                  <p className="pl-2">
                    {map(organization?.tradetypes, (type) => (
                      <span key={uniqueId()} className="font-amazonbold">
                        {type?.name},
                      </span>
                    ))}
                  </p>
                </h3>
                <h4 className="flex items-center my-2">
                  <IoCallSharp size={19} />
                  <a href={`tel:${organization?.phone}`} className="ml-2">
                    +{organization?.phone}
                  </a>
                </h4>
                {organization?.email && (
                  <h4 className="flex items-center my-2">
                    <MdOutlineAlternateEmail size={19} />
                    <a
                      href={`mailto:${organization?.email}`}
                      className="text-black font-amazonbold ml-2"
                    >
                      {organization?.email}
                    </a>
                  </h4>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-4">
        <div class="flex justify-between  md:justify-center mb-[20px]">
          <button
            className={`block w-full md:w-[200px] uppercase shadow-xl border-2 border-alotrade md:ml-0 rounded-tr-none rounded-br-none rounded-l-xl border-r-0  ${
              (content === "descr" && "bg-alotrade text-white") ||
              " bg-white text-[#00c2cb]"
            } font-bold focus:shadow-outline focus:outline-none text-white md:text-xs text-[10px] py-3 md:px-10 px-2 rounded`}
            onClick={() => setContent("descr")}
          >
            О компании
          </button>
          <button
            className={`block w-full md:w-[200px] uppercase shadow-xl border-2 border-alotrade md:ml-0 rounded-tl-none rounded-bl-none rounded-r-xl border-l-0  ${
              (content === "products" && "bg-alotrade text-white") ||
              " bg-white text-alotrade"
            } font-bold focus:shadow-outline focus:outline-none text-white md:text-xs text-[10px] py-3 md:px-10 px-2 rounded`}
            onClick={() => setContent("products")}
          >
            Товары
          </button>
        </div>
        {content === "descr" ? (
          <div>
            <h2 className="font-bold text-[32px]">О комании</h2>
            <p className="text-[16px]">{organization?.description}</p>
          </div>
        ) : (
          <div className="w-full bg-white">
            <div className="md:container">
              <div className="w-full block md:flex">
                <div className="w-full md:px-4 flex flex-col gap-[20px]">
                  {/* <PageHeader
                    isOrganization={!!organization}
                    totalDatas={totalDatas}
                    countPage={countPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    // filter={filter}
                    count={totalDatas}
                    // onClick={() => openModal("createProduct")}
                    // handleFilter={handleFilter}
                    filterData={product}
                    setFilterBody={setFilterBody}
                    setFilterVisible={setFilterVisible}
                    mainTitle={"Товары"}
                    countTitle="Jami:"
                  /> */}
                  <div className="grid grid-cols-2 px-2 gap-2 md:grid-cols-3 md:gap-3">
                    {map(products, (product) => (
                      <ProductCard
                        logged={logged}
                        key={uniqueId()}
                        product={product}
                        // editHandler={editHandler}
                        // deleteHandler={deleteHandler}
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
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Organization;
