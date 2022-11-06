// challenge area 
let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailablity: function(partySize) {
        return partySize <= (this.guestCapacity - this.guestCount);
    },
    seatParty: function(partySeat) {
        this.guestCount += partySeat;
    },
    removeParty: function(removeSeat) {
        this.guestCount -= removeSeat;
    }
}

restaurant.seatParty(72);
console.log(restaurant.checkAvailablity(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailablity(4));
