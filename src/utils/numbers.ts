export const isValidInput = (value) => {
  const regex = /^(?!.*\..*\.)[0-9]*(\.[0-9]{0,2})?$/;
  return regex.test(value);
};
