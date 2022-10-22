import { universalToast } from "../ToastMessages/ToastMessages";

export const checkUser = ({ firstname, lastname, phone, region, district }) => {
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
  return true;
};

export const checkPassword = ({ password, oldPassword, confirmPassword }) => {
  if (password.length < 6 || oldPassword.length < 6) {
    universalToast("Parol 6 ta belgidan kam bo'lmaydi", "warning");
    return false;
  }
  if (password !== confirmPassword) {
    universalToast("Parollar mos emas", "warning");
    return false;
  }
  return true;
};

export const checkOrganization = ({
  name,
  phone,
  email,
  categories,
  subcategories,
  tradetypes,
  region,
  district,
}) => {
  if (name.length < 1) {
    universalToast("Tashkilot nomini kiriting", "warning");
    return false;
  }
  if (phone.length !== 13) {
    universalToast("Telefon raqamni to'liq kiriting", "warning");
    return false;
  }
  if (email.length < 1) {
    universalToast("Emailni kiriting", "warning");
    return false;
  }
  if (!categories.length) {
    universalToast("Kategoriya tanlanmagan", "warning");
    return false;
  }
  if (!subcategories.length) {
    universalToast("Kategoriya turlari tanlanmagan", "warning");
    return false;
  }
  if (!tradetypes.length) {
    universalToast("Savdo turi", "warning");
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
  return true;
};
