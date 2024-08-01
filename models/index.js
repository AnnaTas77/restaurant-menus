const { Restaurant } = require("./Restaurant");
const { Menu } = require("./Menu");
const { Item } = require("./Item");

// Associations: One-to-Many

Restaurant.hasMany(Menu);
Menu.belongsTo(Restaurant);

module.exports = { Restaurant, Menu, Item };
