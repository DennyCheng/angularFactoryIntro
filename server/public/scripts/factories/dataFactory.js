myApp.factory('DataFactory', [function() {
  console.log("data factory running");

  // Private information/data/methods that is shared across controllers
  //the controllers can't directly access these variables/data/methods only what is explcity returned below
  var people = [];
  var recentPerson = {};
  var count = 0;

  var addPerson = function(name) {
    var newPerson = {name: name};
    people.push(newPerson);
    // make sure you use a property on this object!
    // otherwise the controller/view won't reflect the new value
    recentPerson.name = newPerson;
    //recentPerson.name = "tyler sucks"
    //when modifying a method in the private scope you have to explicity state what property you are adding
    //you have to explicity state what property you want to add or it won't update the property
  }

  var increment = function() {
    count++;
    console.log("factory count: ", count);
    return count;
  }

//PUBLIC SCOPED variables/methods controllers have access too
  // public API for access to our private data
//these return properities have access to the private information by invoking the functions
//without returning it we have no way of accessing these data
//typically supply methods that are public that allow you to get and set data
  return {
    peopleArray: people,
    recentPerson: recentPerson,
    count: function() {
      return count;
    },
    addOne: function() {
      return increment();
    },
    addPerson: function(person) {
      addPerson(person);
    }
  };

}]);
