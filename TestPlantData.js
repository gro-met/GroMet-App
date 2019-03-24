import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyD5lJW2xnGJXHzijMyJMHVTEa_60z6x2X4",
  authDomain: "gromet-a0b7d.firebaseapp.com",
  databaseURL: "https://gromet-a0b7d.firebaseio.com",
  projectId: "gromet-a0b7d",
  storageBucket: "gromet-a0b7d.appspot.com",
  messagingSenderId: "539802681511"
};
firebase.initializeApp(firebaseConfig);

var PlantData = [
    {
      id: 'test0',
      type: 'PLANT_ITEM',
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Green_circle.png",
      name: "David",
      species: "Stick",
      data: {
        latest_hum: 10,
        latest_light: 10,
        hum: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        light: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      }
    },
    {
      id: 'test1',
      type: 'PLANT_ITEM',
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Green_circle.png",
      name: "Devon",
      species: "Nut",
      data: {
        latest_hum: 10,
        latest_light: 10,
        hum: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        light: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
      }
    }];

(function initUserData() {
  console.log('run readUserData');
  var info;
  var plants;
  firebase.database().ref('info/').on('value', (snapshot) => {
    info = snapshot.val();
    console.log('run info update');
  });
  firebase.database().ref('plants/').on('value', (snapshot) => {
    console.log('run plant update');
    var newPlantData = [];
    plants = snapshot.val()
    for (let plantID in plants) {
      var plant = {};
      plant.id = plantID;
      plant.type = 'PLANT_ITEM';
      plant.img = 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Green_circle.png';
      plant.name = info[plantID]['name'];
      plant.species = info[plantID]['species'];
      var hum_array = [];
      var light_array = [];
      for (let instance in plants[plantID]) {
        hum_array.push(plants[plantID][instance]['hum']);
        light_array.push(plants[plantID][instance]['light']);
      }
      var data = {};
      data.latest_hum = plants[plantID]['latest']['hum'];
      data.latest_light = plants[plantID]['latest']['light'];
      data.hum = hum_array;
      data.light = light_array;
      plant.data = data;
      newPlantData.push(plant)
    }
    PlantData = newPlantData;
    console.log(PlantData);
  });
  console.log(PlantData);
})();

(function updateUserData() {
  console.log('run readUserData');
  var info;
  var plants;
  firebase.database().ref('info/').on('value', (snapshot) => {
    info = snapshot.val();
    console.log('run info update');
  });
  firebase.database().ref('plants/').on('value', (snapshot) => {
    console.log('run plant update');
    var newPlantData = [];
    plants = snapshot.val()
    for (let plantID in plants) {
      var plant = {};
      plant.id = plantID;
      plant.type = 'PLANT_ITEM';
      plant.img = 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Green_circle.png';
      plant.name = info[plantID]['name'];
      plant.species = info[plantID]['species'];
      var hum_array = [];
      var light_array = [];
      for (let instance in plants[plantID]) {
        hum_array.push(plants[plantID][instance]['hum']);
        light_array.push(plants[plantID][instance]['light']);
      }
      var data = {};
      data.latest_hum = plants[plantID]['latest']['hum'];
      data.latest_light = plants[plantID]['latest']['light'];
      data.hum = hum_array;
      data.light = light_array;
      plant.data = data;
      newPlantData.push(plant)
    }
    PlantData = newPlantData;
    console.log(PlantData);
  });
  console.log(PlantData);
})();

export default PlantData;
