const gameSrcs = ["https://www.crazygames.com/gameframe/run-3?v1"];

exports.getSrc = id => { 
    let index = Number(id);
    return gameSrcs[index];
 }