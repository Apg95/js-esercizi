function calculate() {
    
 return {
    current: 0,
    add: function(num) {
        this.current += num;
        return this;
    },
    sub: function(num) {
        this.current -= num;
        return this;
    },

    multiply: function(num) {
        this.current *= num;
        return this;
    },

    divide: function(num) {
        this.current /= num;
        return this;
    },

    printResult : function() {
        console.log(this.current);
    }
}
};

const calculator = calculate();

calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult();
