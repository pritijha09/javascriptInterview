//Shallow and deep copy in JS
const originalShallow = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
}

//Using spread operator for shallow copy
const shallowCopy = {...originalShallow};
shallowCopy.address.city = 'India'
//console.log(originalShallow.address.city)

const originalDeep = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  }

  //Using JSON parse and stringify for deep copy
  const deepCopy = JSON.parse(JSON.stringify(originalDeep));
  deepCopy.address.city = "Mumbai";

  console.log(originalDeep.address.city) //it does not change original array

