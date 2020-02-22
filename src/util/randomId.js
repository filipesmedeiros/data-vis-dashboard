// Not ALWAYS unique, but application should define uniqueness ratio
// Higher number is less likely to collide
export default (uniqueness = 5, prefix = 'i') => {
    const randInt = Math.random().toPrecision(uniqueness) * Math.pow(10, uniqueness);
    return `${prefix}${randInt}`;
};