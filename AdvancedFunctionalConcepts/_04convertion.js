console.log(`${'-'.repeat(30)} Convert array`);

const electionVotes = ['John', 'Jane', 'Jack', 'Julie', 'John', 'James', 'Julie', 'John', 'Jane', 'Jack', 'James', 'Julie', 'John'];

const totallyVotesForEach = (votes) => {
  const result = {};
  votes.forEach((element) => {
    result[element] = result[element] ? result[element] + 1 : 1;
  });
  return result;
};

console.log(totallyVotesForEach(electionVotes));

const counter = (accumulator, element) => {
  accumulator[element] = accumulator[element] ? accumulator[element] + 1 : 1;
  return accumulator;
};

const totallyVotesMutation = (votes) => {
  const result = votes.reduce(counter, {});
  return result;
};

console.log(totallyVotesMutation(electionVotes));

const totallyVotes = (votes) => {
  const result = votes.reduce((accumulator, element) => ({
    ...accumulator,
    [element]: accumulator[element] ? accumulator[element] + 1 : 1,
  }), {});
  return result;
};

console.log(totallyVotes(electionVotes));

// Results:
// { John: 4, Jane: 2, Jack: 2, Julie: 3, James: 2 }
// { John: 4, Jane: 2, Jack: 2, Julie: 3, James: 2 }
// { John: 4, Jane: 2, Jack: 2, Julie: 3, James: 2 }

// npx eslint .\_04convertion.js --fix

// 01: 1  warning  Unexpected console statement  no - console
// 08: 5  error    No object mutation allowed    immutable / no - mutation
// 13: 1  warning  Unexpected console statement  no - console
// 16: 3  error    No object mutation allowed    immutable / no - mutation
// 25: 1  warning  Unexpected console statement  no - console
// 35: 1  warning  Unexpected console statement  no - console
