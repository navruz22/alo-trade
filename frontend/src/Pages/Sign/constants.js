import { universalToast } from "../../Components/ToastMessages/ToastMessages";

export const checkHandler = ({
  firstname,
  lastname,
  password,
  confirmPassword,
  phone,
  region,
  district,
}) => {
  if (firstname.length < 1) {
    universalToast("Ismingizni kiriting", "warning");
    return false;
  }
  if (lastname.length < 1) {
    universalToast("Familiyangizni kiritilmadi", "warning");
    return false;
  }
  if (phone.length < 13) {
    universalToast("Telefon raqamni to'liq kiriting", "warning");
    return false;
  }
  if (!region) {
    universalToast("Viloyat tanlanmagan", "warning");
    return false;
  }
  if (!district) {
    universalToast("Tuman tanlanmagan", "warning");
    return false;
  }
  if (password.length < 6) {
    universalToast(
      "Parol kamida 6 ta belgidan iborat bo'lishi kerak",
      "warning"
    );
    return false;
  }
  if (password !== confirmPassword) {
    universalToast("Parollar mos kelmadi", "warning");
    return false;
  }
  return true;
};
