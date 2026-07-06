export const formatPrice = (
  price
) => {
  return `₹ ${price}`;
};

export const capitalize = (
  text
) => {
  if (!text) return "";

  return (
    text.charAt(0).toUpperCase() +
    text.slice(1).toLowerCase()
  );
};

export const isLoggedIn = () => {
  return !!localStorage.getItem(
    "token"
  );
};