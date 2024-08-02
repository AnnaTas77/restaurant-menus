const { Restaurant } = require("./Restaurant");
const { Menu } = require("./Menu");
const { Item } = require("./Item");

// Associations: One-to-Many

Restaurant.hasMany(Menu);
Menu.belongsTo(Restaurant);

// Associations: Many-to-Many

Item.belongsToMany(Menu, { through: "ItemMenus" });
Menu.belongsToMany(Item, { through: "ItemMenus" });

module.exports = { Restaurant, Menu, Item };
