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
  "https://www.crazygames.com/gameframe/sports-heads-soccer"
];

exports.getSrc = id => {
  let index = Number(id);
  return gameSrcs[index];
};
