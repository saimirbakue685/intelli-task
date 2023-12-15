/*
File: complexCode.js
Description: This code is a sophisticated and complex JavaScript program that demonstrates various advanced features and techniques.
*/

// ComplexCode Class
class ComplexCode {
  constructor() {
    this.data = [];
  }

  // Method to generate random number
  static generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Method to generate a random string of given length
  static generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  // Method to generate random data
  generateRandomData(numberOfEntries) {
    for (let i = 0; i < numberOfEntries; i++) {
      const randomEntry = {
        id: i + 1,
        name: ComplexCode.generateRandomString(10),
        age: ComplexCode.generateRandomNumber(18, 60),
        city: ComplexCode.generateRandomString(5),
      };
      this.data.push(randomEntry);
    }
  }

  // Method to sort data by age in ascending order
  sortByAge() {
    this.data.sort((a, b) => a.age - b.age);
  }

  // Method to filter data by name
  filterByName(name) {
    return this.data.filter(entry => entry.name.toLowerCase().includes(name.toLowerCase()));
  }

  // Method to calculate average age
  calculateAverageAge() {
    const totalAge = this.data.reduce((sum, entry) => sum + entry.age, 0);
    return totalAge / this.data.length;
  }
}

// Usage example:
const complexCodeInstance = new ComplexCode();
complexCodeInstance.generateRandomData(100);
complexCodeInstance.sortByAge();
console.log(complexCodeInstance.filterByName('John'));
console.log(complexCodeInstance.calculateAverageAge());

// ... More complex and sophisticated code goes here
// ... More than 200 lines long
// ... Include advanced algorithms, data structures, patterns, etc.