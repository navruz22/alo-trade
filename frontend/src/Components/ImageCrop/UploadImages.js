import React, { useRef } from "react";
import { IoImages, IoTrashBinOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {
  deleteProfileImage,
  editProfileImage,
} from "../../Pages/Sign/signSlice";
import { filter, map, uniqueId } from "lodash";
import { MdAddAPhoto, MdDelete } from "react-icons/md";

const UploadImages = ({ images, setImages }) => {
  const dispatch = useDispatch();
  const ref = useRef();
  const handleChange = () => {
    ref.current.click();
  };
  const handleClick = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    dispatch(editProfileImage(formData)).then(({ error, payload }) => {
      if (!error) {
        setImages([...images, payload]);
      }
    });
  };

  const deleteImage = (e) => {
    const name = e.target.name;
    const fileName = name.split("/");
    const body = {
      filename: fileName[fileName.length - 1],
    };
    dispatch(deleteProfileImage(body)).then(({ error }) => {
      if (!error) {
        setImages(filter(images, (image) => image !== name));
      }
    });
  };

  return (
    <div className="flex justify-between items-center flex-col flex-reverse">
      <div className="flex overflow-x-auto w-full py-4">
        {map(images, (image, index) => (
          <div key={uniqueId("image")} className="flex flex-col mx-2 rounded ">
            <img src={image} alt="" className="max-w-[150px] max-h-[150px]" />
            <div className="flex w-full justify-evenly pt-2">
              <button onClick={deleteImage} name={image}>
                <MdDelete
                  size={20}
                  color="#f00"
                  className="pointer-events-none"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
      <input ref={ref} type="file" className="hidden" onChange={handleClick} />
      <div className="">
        <button
          className="p-4 rounded-full border-neutral-400 mr-2"
          onClick={handleChange}
        >
          <MdAddAPhoto size={80} className="text-alotrade" />
        </button>
      </div>
    </div>
  );
};

export default UploadImages;
