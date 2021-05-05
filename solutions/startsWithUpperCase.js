// 2. Write a function that determines if a string starts with an upper-case letter A-Z and returns true or false.
const startsWithUpperCase = (string) => {
  const regex = new RegExp('^[A-Z]');
  return regex.test(string);
};

module.exports = {
  startsWithUpperCase,
};
