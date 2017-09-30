// 1
function getNewCar () {
  return {
    'City': 'Toronto',
    'Passengers': 0,
    'Gas': 100,
  }
}


// 2
function addCar(cars, newCar) {
  cars.push(newCar);
  console.log('Adding new car to fleet. Fleet size is now ' + cars.length + '.');
}


// 3
function pickUpPassenger(car) {
  car['Passengers'] += 1;
  car['Gas'] -= 10;
  console.log('Picked up passenger. Car now has ' + car['Passengers'] + ' passengers.');
}


// 4
function getDestination(car) {
  if (car['City'] === 'Toronto') {
    return 'Mississauga'
  } else if (car['City'] === 'Mississauga') {
    return 'London'
  } else if (car['City'] === 'London') {
    return 'Toronto'
  }
}


// 5

function fillUpGas(car) {
  var oldGas = car['Gas'];
  car['Gas'] = 100;
  return 'Filled up to ' + getGasDisplay(car['Gas']) + ' on gas from ' + getGasDisplay(oldGas)
}

// 6
function getGasDisplay(gasAmount) {
  return gasAmount + '%'
}


// 7
function drive(car, cityDistance) {
  if (car['Gas'] < cityDistance) {
    return fillUpGas(car);
  }

  car['City'] = getDestination(car);
  car['Gas'] -= cityDistance;
  return 'Drove to ' + car['City'] + '. Remaining gas: ' + getGasDisplay(car['Gas'])
}


// 8
function dropOffPassengers(car) {
  var previousPassengers = car['Passengers'];
  car['Passengers'] = 0;
  return 'Dropped off ' + previousPassengers + ' passengers.'
}


// 9
function act(car) {
  var distanceBetweenCities = 50;

  if (car['Gas'] < 20) {
    fillUpGas(car);
  } else if (car['Passengers'] < 3) {
    pickUpPassenger(car);
  } else {
    if (car['Gas'] < distanceBetweenCities) {
      return fillUpGas(car);
    }
    var droveTo = drive(car, distanceBetweenCities);
    var passengersDropped = dropOffPassengers(car);
    return droveTo + passengersDropped;
  }
}

// 10
function commandFleet(cars){
  for (i = 0; i < cars.length; i++){
    var car = cars[i];
    var action = act(car);
     console.log('Car ' + (i + 1) + ': ' + action )
  }
  console.log('---')
}


// 11
function addOneCarPerDay(cars, num_days) {
  for (var i = 0; i < num_days; i++) {
    var new_car = getNewCar();
    console.log(addCar(cars, new_car));
    commandFleet(cars);
  }
}



var cars = [];
addOneCarPerDay(cars, 10)
