export default str => {
  let char;
  const uniqueChars = [];

  for (let i = 0, n = str.length; i < n; i++) {
    char = str[i];

    if (str.indexOf(char) === str.lastIndexOf(char)) {
      uniqueChars.push(char);
    }
  }

  return uniqueChars;
}