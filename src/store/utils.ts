export const showDay = (): number => {
  const today = new Date();
  const month = today.getMonth();
  if (month < 11) {
    return 24;
  }
  return today.getDate();
};
