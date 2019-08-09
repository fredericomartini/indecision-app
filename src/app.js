const rootApp = document.getElementById('app');

let counter= 0;

const decreaseCounter = () => {
    counter--;
    console.log('decrease');
    console.log(counter);
};

const increaseCounter = () => {
    counter++;
    console.log('increase');
    console.log(counter);
};

const reset = () => {
    counter =0;
    console.log('reset');
    console.log(counter);
}

const template = (
    <div>
        <h1>Counter: {counter}</h1>
        <button id="decrease"
        className="button"
        onClick={decreaseCounter}>-1</button>

        <button id="increase"
        className="button"
        onClick={increaseCounter}>+1</button>

        <button id="reset"
        className="button"
        onClick={reset}>reset</button>
    </div>
);

ReactDOM.render(template, rootApp);