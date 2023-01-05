import { universalToast } from "../ToastMessages/ToastMessages";

export const checkUser = ({
  firstname,
  lastname,
  phone,
  region,
  district,
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
  return true;
};

export const checkPassword = ({
  password,
  oldPassword,
  confirmPassword,
  t,
}) => {
  if (password.length < 6 || oldPassword.length < 6) {
    universalToast(
      t("Parol 6 ta belgidan kam bo'lishi mumkin emas"),
      "warning"
    );
    return false;
  }
  if (password !== confirmPassword) {
    universalToast(t("Parollar mos emas"), "warning");
    return false;
  }
  return true;
};

export const checkOrganization = ({
  name,
  phone,
  categories,
  subcategories,
  tradetypes,
  region,
  district,
  t,
}) => {
  if (name.length < 1) {
    universalToast(t("Tashkilot nomini kiriting"), "warning");
    return false;
  }
  if (phone.length < 9) {
    universalToast(t("Telefon raqamni to'liq kiriting"), "warning");
    return false;
  }
  if (!categories.length) {
    universalToast(t("Kategoriya tanlanmagan"), "warning");
    return false;
  }
  if (!subcategories.length) {
    universalToast(t("Kategoriya turlari tanlanmagan"), "warning");
    return false;
  }
  if (!tradetypes.length) {
    universalToast(t("Savdo turi tanlanmagan"), "warning");
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
  return true;
};
