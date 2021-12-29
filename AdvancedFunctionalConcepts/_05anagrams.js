import words from 'an-array-of-english-words';

// console.log(`${'-'.repeat(30)} Anagrams`);
// const arrWord = ['1', '2', '3', '4'];
// console.log(arrWord.join(''));

// console.log(`${'-'.repeat(30)} Anagrams`);
// const loopFactorial = () => {
//    for (var tt = 0; tt < arrWord.length; tt++) {
//        for (var pp = 0; pp < arrWord.length; pp++) {
//            if (pp == tt) continue;
//            for (var kk = 0; kk < arrWord.length; kk++) {
//                if (kk == tt || kk == pp) continue;
//                for (var ll = 0; ll < arrWord.length; ll++) {
//                    if (ll == tt || ll == kk || ll == pp) continue;
//                    console.log(`[${tt},${pp},${kk},${ll}] -> [${arrWord[tt]},${arrWord[pp]},${arrWord[kk]},${arrWord[ll]}]`);
//                }
//            }
//        }
//    }
// }
// loopFactorial();

console.log(`${'-'.repeat(30)} Anagrams`);

const findAnagrams = (word) => {
  const permutations = (p, n) => {
    const mutations = [];
    const perm = (i) => {
      console.log(`${'\t'.repeat(i)} -> i=${i} p=[${p}]`);
      let k;
      if (i == n - 1) {
        console.log(p);
        mutations.push(p.join(''));
      } else {
        for (var j = i + 1; j < n; j++) {
          perm(i + 1);
          k = p[i];
          p[i] = p[j];
          p[j] = k;
        }
        perm(i + 1);
        // cyclic shift of elements i..n to the left
        k = p[i];
        for (var j = i; j < n - 1; j++) {
          p[j] = p[j + 1];
        }
        p[n - 1] = k;
      }
      console.log(`${'\t'.repeat(i)} <- i=${i} p=[${p}]`);
    };
    perm(0);
    return mutations;
  };

  const foundMutations = permutations(word.split(''), word.length);
  const result = foundMutations.filter((word) => (words.some((s) => s === word)));
  return result;
};

console.log(`Anagrams = ${findAnagrams('cinema')}`);
