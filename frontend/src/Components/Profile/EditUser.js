import React, { useEffect, useState } from "react";
import Input from "../Inputs/Input";
import SelectInput from "../SelectInput/SelectInput";
import "react-image-crop/dist/ReactCrop.css";
import {
  editProfileImage,
  getUser,
  updateUser,
} from "../../Pages/Sign/signSlice";
import { useDispatch, useSelector } from "react-redux";
import ImageCrop from "../ImageCrop/ImageCrop";
import { capitalize } from "lodash";
import { checkUser } from "./constants";
import SaveButton from "../Buttons/SaveButton";

const EditUser = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.login);
  const { regions } = useSelector((state) => state.regions);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const handleChangeImage = (croppedImage) => {
    const formData = new FormData();
    formData.append("file", croppedImage);
    dispatch(editProfileImage(formData)).then(({ error, payload }) => {
      if (!error) {
        setIsOpen(false);
        setImage(payload);
      }
    });
  };

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [email, setEmail] = useState("");
  const [districts, setDistricts] = useState([]);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    name === "firstname" && setFirstname(capitalize(value));
    name === "lastname" && setLastname(capitalize(value));
    name === "email" && setEmail(value);
    name === "phone" && setPhone(value);
  };

  const selectRegion = (e) => {
    setRegion(e);
    setDistrict("");
    setDistricts(e.districts);
  };

  const selectDistrict = (e) => {
    setDistrict(e);
  };

  const enterHandler = (e) => {
    e.preventDefault();
    e.key === "Enter" && submitHandler();
  };

  const submitHandler = () => {
    const data = {
      firstname,
      lastname,
      phone,
      region: region.value,
      district: district.value,
    };
    const check = checkUser({
      ...data,
    });
    if (email !== "") {
      data.email = email;
    }
    if (image !== null) {
      data.image = image;
    }
    check && createHandler(data);
  };

  const createHandler = (data) => {
    dispatch(updateUser(data)).then(({ error, payload }) => {
      if (!error) {
        const { user } = payload;
        setAllDatas(user);
      }
    });
  };

  const setAllDatas = (user) => {
    user.image && setImage(user.image);
    user.firstname && setFirstname(user.firstname);
    user.lastname && setLastname(user.lastname);
    user.phone && setPhone(user.phone);
    user.region && setRegion(user.region);
    user.region && setDistricts(user.region.districts);
    user.district && setDistrict(user.district);
    user.email && setEmail(user.email);
  };

  useEffect(() => {
    dispatch(getUser()).then(({ error, payload }) => {
      if (!error) {
        const { user } = payload;
        setAllDatas(user);
      }
    });
  }, [dispatch]);

  return (
    <div className="p-5 flex ">
      <div className="w-1/3">
        <ImageCrop
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          approve={handleChangeImage}
          output={image}
        />
      </div>
      <div className="grid grid-cols-2 w-full gap-4 ">
        <Input
          placeholder="Ism"
          label="Ism"
          isDisabled={loading}
          margin="mr-3"
          value={firstname}
          onChange={changeHandler}
          name="firstname"
          required={true}
          onKeyUp={enterHandler}
        />
        <Input
          placeholder="Familiya"
          label="Familiya"
          isDisabled={loading}
          value={lastname}
          onChange={changeHandler}
          name="lastname"
          required={true}
          onKeyUp={enterHandler}
        />
        <Input
          placeholder="Telefon raqam"
          label="Telefon raqam"
          isDisabled={loading}
          type="phone"
          value={phone}
          onChange={changeHandler}
          name="phone"
          required={true}
          onKeyUp={enterHandler}
        />
        <Input
          placeholder="Email"
          label="Email"
          isDisabled={loading}
          type="email"
          value={email}
          onChange={changeHandler}
          name="email"
          onKeyUp={enterHandler}
        />
        <div className="mr-3 w-full">
          <p className="text-neutral-500 text-sm mt-[7px]">Viloyat</p>
          <SelectInput
            placeholder="Viloyat"
            options={regions}
            onSelect={selectRegion}
            value={region}
            name="region"
            isDisabled={loading}
          />
        </div>
        <div className="w-full">
          <p className="text-neutral-500 text-sm mt-[7px]">Tuman</p>
          <SelectInput
            placeholder="Viloyat"
            value={district}
            options={districts}
            onSelect={selectDistrict}
            name={"district"}
            isDisabled={loading}
          />
        </div>
        <SaveButton
          className="col-span-2"
          onClick={submitHandler}
          title="saqlash"
        />
      </div>
    </div>
  );
};

export default EditUser;
