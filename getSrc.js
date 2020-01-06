const gameSrcs = [
  "https://www.crazygames.com/gameframe/run-3?v1",
  "https://www.crazygames.com/gameframe/swords-souls",
  "https://www.crazygames.com/gameframe/jacksmith",
  "https://www.crazygames.com/gameframe/papa-s-scooperia",
  "https://www.crazygames.com/gameframe/8-ball-online",
  "https://www.crazygames.com/gameframe/dragon-simulator-3d/1/index.html?v20191123083835",
  "https://www.crazygames.com/gameframe/doge-miner-2",
  "https://www.crazygames.com/gameframe/strike-force-heroes-2",
  "https://www.crazygames.com/gameframe/stickman-prison-counter-assault/1/index.html?v20191031094629",
  "https://www.addictinggames.com/embed/flash-games/19775",
  "https://www.crazygames.com/gameframe/stickman-tennis-3d/1/index.html?v20191118063330",
  "https://www.crazygames.com/gameframe/sports-heads-soccer",
  "https://www.crazygames.com/gameframe/zombsroyaleio",
  "https://www.crazygames.com/gameframe/bullet-force-multiplayer/37/index.html?1640",
  "http://www.crazygames.com/gameframe/slitherio",
  "https://www.crazygames.com/gameframe/derby-crash-2?v20190610194550",
  "https://www.crazygames.com/gameframe/bloons-tower-defense-5?v2",
  "https://www.crazygames.com/gameframe/cut-the-rope",
  "https://www.crazygames.com/gameframe/ducklife-4",
  "https://www.crazygames.com/gameframe/2048?autob"
];

exports.getSrc = id => {
  let index = Number(id);
  return gameSrcs[index];
};
