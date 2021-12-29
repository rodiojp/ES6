import words from 'an-array-of-english-words';

console.log(`${'-'.repeat(30)} Anagrams`);
const findUniqueChars = (word) => {
  const arrWord = word.split('');
  const objectOfChars = arrWord.reduce((accamulator, element) => ({
    ...accamulator,
    [element]: accamulator[element] ? accamulator[element] + 1 : 1,
  }), {});

  return Object.keys(objectOfChars).sort().join('');
};
const findAnagrams = (word) => {
  // const anagrams = ['cinema', 'iceman', 'anemic'];
  const findWord = findUniqueChars(word);
  const result = words.filter((s) => {
    const compareWord = findUniqueChars(s);
    return (findWord === compareWord) && (word.length === s.length) && (word !== s);
  });
  return result;
};

console.log(`Anagrams = ${findAnagrams('cinema')}`);
