export default str => {
  let char;

  for (let i = 0, n = str.length; i < n; i++) {
    char = str[i];

    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }

  return -1;
}