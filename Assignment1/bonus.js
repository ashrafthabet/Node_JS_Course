// C. Part3: Bonus (2 Grades)

var createCounter = function(init) {
    let initValue=init;
    const increment = () => ++initValue;
    const decrement = () => --initValue;
    const reset = () => {
        initValue=init;
        return init;
    }

    return {increment,decrement,reset};
};
