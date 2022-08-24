function findShortest(vectors) {
  // Write the code that goes here
  const lengthVecs = []
  vectors.forEach((el) => {
    const rs = el.reduce((acc,cur)=> {
      return acc+=cur*cur
    },0)
    lengthVecs.push(rs)
  })
  const rsLengthVecs = lengthVecs.map(el => Math.sqrt(el))
  const minValue = Math.min(...rsLengthVecs)
  const index = rsLengthVecs.findIndex((val) => val === minValue)
  return vectors[index]
}

var vectors = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];
var shortest = findShortest(vectors);
console.log(shortest);