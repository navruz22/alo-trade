import { universalToast } from "../../Components/ToastMessages/ToastMessages";

export const checkHandler = ({
  firstname,
  lastname,
  password,
  phone,
  region,
  district,
  url,
  categories,
  subcategories,
  name,
  tradeTypes,
  t,
}) => {
  if (firstname.length < 1) {
    universalToast(t("Ismingizni kiriting"), "warning");
    return false;
  }
  if (lastname.length < 1) {
    universalToast(t("Familiyangizni kiriting"), "warning");
    return false;
  }
  if (phone.length < 9) {
    universalToast(t("Telefon raqamni to'liq kiriting"), "warning");
    return false;
  }
  if (!region) {
    universalToast(t("Viloyat tanlanmagan"), "warning");
    return false;
  }
  if (!district) {
    universalToast(t("Tuman tanlanmagan"), "warning");
    return false;
  }
  if (password.length < 6) {
    universalToast(
      t("Parol kamida 6 ta belgidan iborat bo'lishi kerak", "warning")
    );
    return false;
  }
  if (url === "business") {
    if (name === "") {
      universalToast(t("Tashkilotingiz nomini kiriting"), "warning");
      return false;
    }
    if (categories.length === 0) {
      universalToast(
        t("Xizmat ko'rsatish kategoriyalaringizni kiriting", "warning")
      );
      return false;
    }
    if (subcategories.length === 0) {
      universalToast(t("Kategoriya turlari tanlanmagan"), "warning");
      return false;
    }
    if (tradeTypes.length === 0) {
      universalToast(t("Savdo turlari tanlanmagan"), "warning");
      return false;
    }
  }

  return true;
};
