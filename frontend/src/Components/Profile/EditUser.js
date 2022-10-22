import React, { useState } from "react";
import Input from "../Inputs/Input";
import SelectInput from "../SelectInput/SelectInput";
import "react-image-crop/dist/ReactCrop.css";
import { editProfileImage } from "../../Pages/Sign/signSlice";
import { useDispatch } from "react-redux";
import ImageCrop from "../ImageCrop/ImageCrop";

const EditUser = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
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
        <Input placeholder="Ism" label="Ism" />
        <Input placeholder="Familiya" label="Familiya" />
        <Input placeholder="Telefon raqam" label="Telefon raqam" />
        <Input placeholder="Email" label="Email" />
        <div className="mr-3 w-full">
          <p className="text-neutral-500 text-sm mt-[7px]">Viloyat</p>
          <SelectInput placeholder="Viloyat" />
        </div>
        <div className="w-full">
          <p className="text-neutral-500 text-sm mt-[7px]">Tuman</p>
          <SelectInput placeholder="Viloyat" />
        </div>
      </div>
    </div>
  );
};

export default EditUser;
