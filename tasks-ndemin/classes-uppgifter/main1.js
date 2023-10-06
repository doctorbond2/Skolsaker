class voter {

  constructor(age) {

    this.age = age;

    this.voteAge = 18;
    this.yearsLeft = 18 - age;

    
  }

  canVote() {
    if(this.age >= this.voteAge) {
      return console.log(`You are above ${this.voteAge}, and can thereby go vote!`)
    } else {
      return console.log(`You can't vote yet, you have ${this.yearsLeft} years left before you can vote`);
    }
  }

}

const voter1 = new voter(18);
const voter2 = new voter(13);

voter1.canVote();

voter2.canVote();

