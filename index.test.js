const { sequelize } = require("./db");
const { Restaurant, Menu } = require("./models/index");
const { seedRestaurant, seedMenu } = require("./seedData");

describe("Restaurant and Menu Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Restaurant", async () => {
    // TODO - write test
    const restaurant = await Restaurant.bulkCreate(seedRestaurant);
    const allRestaurants = await Restaurant.findAll({ raw: true });
    // console.log(allRestaurants);
    expect(allRestaurants[0]).toEqual(
      expect.objectContaining(seedRestaurant[0])
    );
  });

  test("can create a Menu", async () => {
    const menu = await Menu.bulkCreate(seedMenu);
    // console.log(menu);
    const allMenus = await Menu.findAll({ raw: true });
    // console.log(allMenus);
    expect(allMenus[1]).toEqual(expect.objectContaining(seedMenu[1]));
  });

  test("can find Restaurants", async () => {
    // TODO - write test
    const restaurant = await Restaurant.bulkCreate(seedRestaurant);
    const foundRestaurant = await Restaurant.findByPk(3);
    // console.log(foundRestaurant.toJSON());
    expect(foundRestaurant).toEqual(expect.objectContaining(seedRestaurant[2]));
  });

  test("can find Menus", async () => {
    // TODO - write test
    const menu = await Menu.bulkCreate(seedMenu);
    const foundMenu = await Menu.findByPk(2);
    expect(foundMenu).toEqual(expect.objectContaining(seedMenu[1]));
  });

  test("can delete Restaurants", async () => {
    // TODO - write test
    await Restaurant.bulkCreate(seedRestaurant);
    const foundRestaurant = await Restaurant.findByPk(1);
    await Restaurant.destroy({ where: { id: 1 } });
    expect(foundRestaurant).toEqual(expect.objectContaining(seedRestaurant[0]));
  });
});
