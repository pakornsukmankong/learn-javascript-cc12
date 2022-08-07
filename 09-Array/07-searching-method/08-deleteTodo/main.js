const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];

const deleteTask = (id) => {
  tasks.forEach((item,index,array)=> {
    
    if (item.id === id) {
      array.splice((id-1),1)
    }
  })
}

// 

deleteTask(1)
console.log(tasks)