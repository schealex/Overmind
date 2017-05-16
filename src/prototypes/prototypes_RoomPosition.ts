Object.defineProperty(RoomPosition.prototype, 'name', { // identifier for the room position, used in caching
    get: function () {
        return this.roomName + ":" + this.x + ":" + this.y;
    }
});

Object.defineProperty(RoomPosition.prototype, 'flagged', { // if the object has a flag
    get: function () {
        return this.lookFor(LOOK_FLAGS).length > 0;
    }
});

RoomPosition.prototype.flaggedWith = function (filter) { // if the object has a certain type of flag
    return _.filter(this.lookFor(LOOK_FLAGS), filter).length > 0;
};

// RoomPosition.prototype.findClosestByRangeMultiroom = function (positions: RoomPosition[]): RoomPosition {
//
// };