// let Header = [ // TODO: Include header ?? --healym
//     {
//         type: "HEADER",
//         values: {
//             toImage: "http://img.freeflagicons.com/thumb/glossy_wave_icon/singapore/singapore_640.png",
//             fromImage: "http://img.freeflagicons.com/thumb/glossy_wave_icon/india/india_640.png"
//         }
//     }
// ];

let PlantData = [
    {
      type: 'PLANT_ITEM',
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Green_circle.png",
      name: "Charles",
      species: "Cactus",
      data: {
        hum: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        light: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
      }
    },
    {
      type: 'PLANT_ITEM',
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Green_circle.png",
      name: "Caleb",
      species: "Rock",
      data: {
        hum: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        light: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
      }
    },

];
export default Header.concat(FlightData);
