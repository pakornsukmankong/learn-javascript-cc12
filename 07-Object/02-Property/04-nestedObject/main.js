const product1 = {
  name: 'Water',
  distributor: {
    name: 'Giraffe Water Company',
    address: {
      street: 'Phetchaburi',
      subdistrict: 'Thanonphetchaburi',
      district: 'Ratchathewi',
      province: 'Bangkok'
    }
  }
};

const product2 = {}

// onsole.log(user.address ? user.address.province : undefined);
console.log(product1.distributor.address.province)
console.log(product2.distributor?product2.distributor.address.province : undefined)

console.log(product2.distributor?.address?.province)