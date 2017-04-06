export default (...constants) => (
  constants.reduce((acc, val) => {
    acc[val] = val;
    return acc;
  }, {})
);