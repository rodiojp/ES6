console.log(`${'-'.repeat(30)} Currying and partial application`);

const addSimple = (x, y, z) => x + y + z;
const resultSimple = addSimple(2, 3, 4);
console.log(`Result: ${resultSimple}`);

const addCurrying = (x) => (y) => (z) => x + y + z;
const resultCurrying = addCurrying(2)(3)(4);
console.log(`Result: ${resultCurrying}`);

const addPartial = (x) => (y, z) => addSimple(x, y, z);
const partial2 = addPartial(2);
const resultPartial2 = partial2(3, 4);
console.log(`Result: ${resultPartial2}`);
