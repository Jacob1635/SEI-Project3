require('dotenv').config();
require('./database');
const Category = require('../models/category');
const Item = require('../models/item');
// const links= {
//   Rogue: 'https://www.roguecanada.ca/',
//   Titan: 'https://www.titan.fitness/',
//   Gym80: 'https://gym80.us/',
//   Hampton: 'https://www.hamptonfit.com/',
//   Eleiko : 'https://eleiko.com/en-ca',
//   Sedia: 'https://sideaita.net/',
//   ProMax: 'https://promaxima.com/cardio/',
//   CoreFX: 'https://corefx.ca/',
//   Quantam: 'https://www.quantum.lk/'
// }
(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: '', sortOrder: 10},
    {name: '', sortOrder: 20},
    {name: '', sortOrder: 30},
    {name: '', sortOrder: 40},
    {name: '', sortOrder: 50},
    {name: ' ', sortOrder: 60},
  ]);
  await Item.deleteMany({});
  const items = await Item.create([
    {name: '', type: '', manufacturer: '', website: '', image: '', category: categories[0], price: 0},
    {name: '', type: '', manufacturer: '', website: '', image: '', category: categories[0], price: 0},
    {name: '', type: '', manufacturer: '', website: '', image: '', category: categories[0], price: 0},
    {name: '', type: '',  manufacturer: '', website: '', image: '', category: categories[0], price: 0},
    {name: '', type: '',  manufacturer: '', website: '', image: '', category: categories[0], price: 0},
    {name: '', type: '',  manufacturer: '', website: '', image: '', category: categories[1], price: 0},
    {name: '',type: '', manufacturer: '', website: '', image: '', category: categories[1], price: 0},
    {name: '',type: '', manufacturer: '', website: '', image: '', category: categories[1], price: 0},
    {name: '', type: '', manufacturer: '', website: '', image: '', category: categories[1], price: 0},
    {name: '', type: '', manufacturer: '', website: '', image: '', category: categories[1], price: 0},
    {name: '', type: '', manufacturer: '', website: '', image: '', category: categories[1], price: 0},
    {name: '',type: '',  manufacturer: '', website: '', image: '', category: categories[1], price: 0},
    {name: '', type: '', manufacturer: '', website: '', image: '', category: categories[2], price: 0},
    {name: '', type: '', manufacturer: '', website: '', image: '', category: categories[2], price: 0},
    {name: '', type: '', manufacturer: '', website: '', image: '', category: categories[3], price: 0},
    {name: '', type: '', manufacturer: '', website: '', image: '', category: categories[3], price: 0},
    {name: '', type: '', manufacturer: '', website: '',  image: '', category: categories[4], price: 0},
    {name: '', type: '', manufacturer: '', website: '', image: '', category: categories[4], price: 0},
    {name: '', type: '', manufacturer: '', website: '', image: '', category: categories[5], price: 0},
    {name: '', type: '', manufacturer: '', website: '', image: '', category: categories[5], price: 0},
    {name: '', type: '', manufacturer: '', website: '', image: '', category: categories[5], price: 0},
  ]);
  console.log(items);
  process.exit();
})();