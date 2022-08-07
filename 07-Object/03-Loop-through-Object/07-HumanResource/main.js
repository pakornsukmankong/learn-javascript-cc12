const employees = {
  john: {
    salary: 1000,
    address: { district: 'Ratchathewi', province: 'Bangkok' },
  },
  peter: {
    salary: 1500,
    address: { district: 'Pathumwan', province: 'Bangkok' },
  },
  mike: {
    salary: 800,
    address: { district: 'Pakkret', province: 'Nonthaburi' },
  },
  sarah: {
    salary: 2200,
    address: { district: 'Sriraja', province: 'Chonburi' },
  },
};

const getEmpleyees = (obj) => {
  let name = prompt('Enter Employees Name');
  if (!obj[name] || name === null || name === '' || name.trim() === '') {
    return alert('Not Found');
  } else {
    let salary = obj[name].salary;
    let district = obj[name].address.district;
    let province = obj[name].address.province;

    let result = alert(
      `Name: ${name}, salary: ${salary}, address: ${district}, ${province}`
    );
    return result;
  }
};

console.log(getEmpleyees(employees));
