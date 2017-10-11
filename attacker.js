var roleHarvester = require('role.harvester');

var roleAttacker = {

    run: function(creep) {
        var enemies = creep.pos.findClosestByRange(Game.HOSTILE_CREEPS);
        if (creep.attack(enemies) == ERR_NOT_IN_RANGE) {
            creep.moveTo(enemies);
        }
        else {
            creep.attack(enemies);
        }
    }
};

module.exports = roleAttacker;