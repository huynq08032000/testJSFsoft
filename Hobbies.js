function findAllHobbyists(hobby, hobbies) {
    const keys = Object.keys(hobbies)
    let rs;
    keys.forEach((el,index)=>{
      if (hobbies[el].includes(hobby)) rs = el
    })
    return rs;
  }
  
  var hobbies = {
    "Steve": ['Fashion', 'Piano', 'Reading'],
    "Patty": ['Drama', 'Magic', 'Pets'],
    "Chad": ['Puzzles', 'Pets', 'Yoga']
  };
  
  console.log(findAllHobbyists('Yoga', hobbies));
  
  