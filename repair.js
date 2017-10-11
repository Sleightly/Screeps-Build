var roleUpgrader = require('role.upgrader');

var roleRepair = {
    run: function(creep) {
        
        var target = creep.room.find(FIND_STRUCTURES, {
            filter: (structures) => structures.hits < 10000
        });
        
        if(creep.carry.energy == 0) {
            var harvesting = 1;
        }
        
        if (creep.carry.energy == creep.carry.carryCapacity) {
            var harvesting = 0;
        }
    
        if(harvesting) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        
        else {
            if(target.length) {
                if(creep.repair(target[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
                else {
                    creep.repair(target[0]);
                }
            }
        }
    }
};

module.exports = roleRepair;


