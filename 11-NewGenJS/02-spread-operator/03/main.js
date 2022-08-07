const getPerson = (firstName, lastName, ...hobbies) => {
  return {
    firstName,
    lastName,
    hobbies,
    numHobbies: hobbies.length,
  };
};

console.log(getPerson('Pakorn', 'Sukmankong', 'Guiter', 'PlayGame'));
