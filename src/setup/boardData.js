const numArray = (letter) => {
  let array = [];
  for (let i = 1; i <= 8; i++) {
    array.push(`${letter}${i}`);
  }
  return array;
};

const BoardLocationData = [
  numArray('a'),
  numArray('b'),
  numArray('c'),
  numArray('d'),
  numArray('e'),
  numArray('f'),
  numArray('g'),
  numArray('h')
]

export default BoardLocationData;