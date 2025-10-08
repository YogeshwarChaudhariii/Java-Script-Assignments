function area(r) {
  return (Math.PI * r * r).toFixed(2);
}
function circumference(r) {
  return (2 * Math.PI * r).toFixed(2);
}

module.exports = {
  area,
  circumference,
};
