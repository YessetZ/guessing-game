class GuessingGame {
    constructor() {}
    
    setRange(min, max) {
        this.range = [...Array(max+1).keys()].map(i => i + min);
        return this.range;
    }

    guess() {
        this.index = Math.floor(this.range.length / 2);
        return this.range[this.index];
    }

    lower() {
        let i = Math.floor(this.range.length / 2);
        let temp = this.range;
        temp = temp.filter(function(value, index, arr) {
            return index <= i;
        })
        this.range = temp;
    }

    greater() {
        let i = Math.floor(this.range.length / 2);
        let temp = this.range;
        temp = temp.filter(function(value, index, arr) {
            return index >= i;
        })
        this.range = temp;
    }
}

module.exports = GuessingGame;
