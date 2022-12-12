const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast

  const setName = function (name, position){
    let n = fullName.split(' ')
    n[position] = name
    fullName = n.join(' ')
  }

  this.getFullName = function() {
    return fullName;
  };
  this.getFirstName = function(){
    return fullName.split(' ')[0]
  }
  this.getLastName = function(){
    return fullName.split(' ')[1]
  }
  this.setFirstName = function(first){
    setName(first, 0)
  }
  this.setLastName = function(last){
    setName(last, 1)
  }
  this.setFullName = function(firstAndLast){
    fullName = firstAndLast
  }
};

const bob = new Person('Bob Ross');
bob.getFullName();