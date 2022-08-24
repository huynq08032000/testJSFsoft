function findAllHobbyists(hobby, hobbies) {
  const keys = Object.keys(hobbies)
  return keys.filter((el) => {
    return hobbies[el].includes(hobby)
  })
}

var hobbies = {
  "Steve": ['Fashion', 'Piano', 'Reading'],
  "Patty": ['Drama', 'Magic', 'Pets'],
  "Chad": ['Puzzles', 'Pets', 'Yoga']
};

console.log(findAllHobbyists('Yoga', hobbies));

