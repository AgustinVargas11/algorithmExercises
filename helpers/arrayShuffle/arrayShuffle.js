import randomNo from '../randomNo/randomNo';

export default arr => {
  const shuffledArr = [...arr];
  let rand, temp;

  for (let i = shuffledArr.length - 1; i > 0; i--) {
    rand = randomNo(i + 1);

    temp = shuffledArr.splice(i, 1, shuffledArr[rand])[0];
    shuffledArr.splice(rand, 1, temp);
  }

  return shuffledArr;
};
