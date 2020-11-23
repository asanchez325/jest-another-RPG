const Potion = require('../lib/Potion.js');
const Player = require('../lib/Player');

test('creates a health potion object', () => {
    const potion = new Potion('health');
  
    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
  });

  test('creates a random potion object', () => {
    const potion = new Potion();
  
    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
  });

  test("gets player's stats as an object", () => {
    const player = new Player('Dave');
  
    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
  });

  test('gets inventory from player or returns false', () => {
    const player = new Player('Dave');
  
    expect(player.getInventory()).toEqual(expect.any(Array));
  
    player.inventory = [];
  
    expect(player.getInventory()).toEqual(false);
  });