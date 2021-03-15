
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix || matrix.length === 0) {
    return []
  }
  return matrix.map((it, index) => index %2 == 0 ? it : it = it.reverse()).flat(Infinity)
}
