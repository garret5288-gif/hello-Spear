// Entry point for hello-spear starter
function combine(a, b, c) {
    const nums = [a, b, c].map(Number);
    if (!nums.every(Number.isFinite)) {
        throw new TypeError("combine expects three finite numeric inputs");
    }
    const [na, nb, nc] = nums;
    if (nc === 0) {
        throw new RangeError("c must not be 0 (division by zero)");
    }
    return (na * nb) / nc;
}

// Demo run
const a = 6, b = 4, c = 2;
console.log(`hello-spear starter running...`);
console.log(`combine(${a}, ${b}, ${c}) =`, combine(a, b, c));

export { combine };