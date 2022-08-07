const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];

const upDateTask = (id , newName) => {
  tasks.forEach((item)=> {
    if (item.id === id) {
      item.name = newName
    } 
  })
}

upDateTask(2 , 'Travelling')

console.log(tasks)