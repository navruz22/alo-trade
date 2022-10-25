import setErrors from "../../../Components/Modal/UniversalModal";

export const checkRegisterOrder = ({
  tradetypes,
  categories,
  subcategories,
  name,
  status,
  minPrice,
  maxPrice,
  currency,
  setErrors,
}) => {
  if (tradetypes.length === 0) {
    setErrors("Savdo turlari tanlanmagan");
    return false;
  }
  if (categories.length === 0) {
    setErrors("Kategoriyalar tanlanmagan");
    return false;
  }
  if (subcategories.length === 0) {
    setErrors("Kategoriyalar turlari tanlanmagan");
    return false;
  }
  if (name.length === 0) {
    setErrors("Mahsulot nomi kiritilmagan");
    return false;
  }
  if (status.length === 0) {
    setErrors("Mahsulot holati tanlanmagan");
    return false;
  }
  if ((minPrice || maxPrice) && minPrice > maxPrice) {
    setErrors("Narxlar to'g'ri kiritilmagan");
    return false;
  }

  if ((minPrice || maxPrice) && (minPrice < 0 || maxPrice < 0)) {
    setErrors("Narxlar to'g'ri kiritilmagan");
    return false;
  }

  if ((minPrice > 0 || maxPrice > 0) && !currency) {
    setErrors("Valyuta tanlanmagan");
    return false;
  }

  return true;
};
