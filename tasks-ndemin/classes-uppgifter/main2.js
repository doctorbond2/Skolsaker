class Customer {


  constructor(discount) {
    this.payments = [];
    this.transactionDiscount = discount;
  }

  addTransaction(money) {

    if (typeof money !== 'number') {
      return console.error
        ('You can only pay with money man, words mean nothing to me');
    } 

    this.payments.push(money);
    
    console.log(`Added $${money} to payments!`);
  }

  getTransaction() {
    return this.payments.forEach((value,index) => {
      console.log(`Transaction ${index+1}: $${value}`);
    });
  }

  getTotalSpent() {

    let total = 0;

    this.payments.forEach(value => {
      total += value;
    });

    console.log(`From ${this.payments.length} transactions you have spent a total of $${total}`);

    return total;
  }


  isEligableForDiscount() { 
    
    const x = this.payments;
    let discount = '';
    let total = 0;
    
    for (let i = 0; i < x.length; i++) {
      total += x[i];
    }

    if (total >= this.transactionDiscount) {
      discount = true;x
    } else {
      discount = false;
    }
    return console.log(discount);
    }
  }
    


const customer_1 = new Customer(100);
const customer_2 = new Customer(2000);


customer_1.addTransaction(20);

customer_1.addTransaction(100);

customer_1.getTotalSpent();
customer_1.getTransaction();
customer_1.getTotalSpent();
customer_1.isEligableForDiscount();

customer_2.addTransaction(2000);


customer_2.isEligableForDiscount();
