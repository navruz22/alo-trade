import React, { useState } from "react";
import Input from "../Inputs/Input";
import SaveButton from "../Buttons/SaveButton";
import { checkPassword } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../Pages/Sign/signSlice";

const EditPassword = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.login);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPassword, newPassword] = useState("");

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value.trim();
    name === "password" && setPassword(value);
    name === "confirmPassword" && setConfirmPassword(value);
    name === "oldPassword" && newPassword(value);
  };

  const clearInputs = () => {
    setPassword("");
    setConfirmPassword("");
    newPassword("");
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      submitHandler();
    }
  };

  const submitHandler = (e) => {
    const data = {
      password,
      confirmPassword,
      oldPassword,
    };

    const check = checkPassword({ ...data });
    check &&
      dispatch(
        updatePassword({ password: oldPassword, newPassword: password })
      ).then(({ error }) => {
        !error && clearInputs();
      });
  };

  return (
    <div className="p-5 ">
      <div className="grid grid-cols-3 gap-4">
        <Input
          onChange={changeHandler}
          value={oldPassword}
          type="password"
          name="oldPassword"
          placeholder="Hozirchi parol"
          label="Joriy parol"
          onKeyUp={enterHandler}
        />
        <Input
          onChange={changeHandler}
          value={password}
          type="password"
          placeholder="Yangi parol"
          label="Yangi parol"
          name="password"
          onKeyUp={enterHandler}
        />
        <Input
          onChange={changeHandler}
          value={confirmPassword}
          name="confirmPassword"
          type="password"
          placeholder="Yangi parolni tasdiqlang"
          label="Yangi parolni tasdiqlang"
          onKeyUp={enterHandler}
        />
      </div>
      <div className="">
        <SaveButton
          title="Tasdiqlash"
          className="w-full mt-3"
          isDisabled={loading}
          onClick={submitHandler}
        />
      </div>
    </div>
  );
};

export default EditPassword;
