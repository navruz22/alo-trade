import { universalToast } from "../../Components/ToastMessages/ToastMessages";

export const checkHandler = ({
  firstname,
  lastname,
  password,
  confirmPassword,
  phone,
  region,
  district,
  url,
  categories,
  subcategories,
  name,
  tradeTypes,
}) => {
  if (firstname.length < 1) {
    universalToast("Ismingizni kiriting", "warning");
    return false;
  }
  if (lastname.length < 1) {
    universalToast("Familiyangizni kiritilmadi", "warning");
    return false;
  }
  if (phone.length !== 13) {
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

  if (url === "business") {
    if (name === "") {
      universalToast("Tashkilotingiz nomini kiriting", "warning");
      return false;
    }
    if (categories.length === 0) {
      universalToast(
        "Xizmat ko'rsatish kategoriyalaringizni kiriting",
        "warning"
      );
      return false;
    }
    if (subcategories.length === 0) {
      universalToast("Kategoriya turlarini kiriting", "warning");
      return false;
    }
    if (tradeTypes.length === 0) {
      universalToast("Savdo turlari tanlanmagan", "warning");
      return false;
    }
  }

  return true;
};
