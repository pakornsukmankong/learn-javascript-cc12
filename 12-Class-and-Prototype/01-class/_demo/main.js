class User {
  name;
  password;
  role;

  constructor(name, password, role) {
    console.log('constructor');
    this.name = name;
    this.password = password;
    this.role = role || 'normal-user';
  }

  login(password) {
    console.log('Login');
  }

  changePassword(newPassword) {
    console.log('Change Password');
  }

  loggingName() {
    console.log(this.name);
  }
}

const a = new User('a', '1234', 'admin');
const b = new User('b', '567');
const c = new User('c', '91022');

console.log(a);
console.log(b);
console.log(c);

a.login('1234');

class Admin extends User {
  updateProduct(productData) {
    console.log('Update Product');
  }
}
class Customer extends User {
  constructor(rank, ...args) {
    super(...args);
    this.rank = rank;
  }

  createOrder(cart) {
    console.log('Create Order');
  }
  login(phoneNumber) {
    console.log('Customer Login');
  }
  logCustName() {
    super.loggingName();
  }
}

const admin = new Admin('admin');
console.log(admin);
admin.login();

const cust = new Customer('VIP', 'Cust', '12', 'custome');
cust.login();
