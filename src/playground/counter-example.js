const rootApp = document.getElementById('app');

let counter= 0;

const decreaseCounter = () => {
    counter--;
    renderCounterApp();
};

const increaseCounter = () => {
    counter++;
    renderCounterApp();
};

const reset = () => {
    counter =0;
    renderCounterApp();
}

const renderCounterApp = () => {
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
}

renderCounterApp();