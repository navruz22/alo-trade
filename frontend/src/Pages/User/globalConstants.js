export const onScroll = ({
  e,
  setCurrentPage,
  currentPage,
  countPage,
  orders,
}) => {
  console.log(orders);
  const bottom =
    e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
  bottom &&
    (currentPage + 1) * countPage === orders.length &&
    setCurrentPage(currentPage + 1);
};
