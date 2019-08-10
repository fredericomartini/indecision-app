const rootApp = document.getElementById('app');
const insertOption = () => {
    console.log('option');
};

const appConfig = {
    title: 'Indecision App!',
    options: ['NodeJS', 'Laravel']
}

const removeOption = (event) => {
    const name = event.target.name;

    if (name) {
        appConfig.options = appConfig.options.filter((value) => value !== name);
    }

    renderApp();
}

const getOptions = () => {
    if(appConfig.options){
        return appConfig.options.map(option => {
            return (
                    <li key={option}>{option}
                    <button style={{ marginLeft:"10px" }} name={option} onClick={removeOption}>-</button></li>
            )
        });
    }
}

const addOption = (event) => {
    event.preventDefault();
    const {
        target: {
            elements: {
                option,
            }
        }
    } = event;

    if (!option.value || option.value.trim() ==='') {
        return;
    }

    if (appConfig.options.includes(option.value)) {
        alert('Não é possível adicionar elementos duplicados!');
        return;
    }

    appConfig.options.push(option.value.trim());
    option.value = '';
    // Reloads the DOM
    renderApp();
}

const removeAll = (event) => {
    event.preventDefault();

    appConfig.options = [];

    // Reloads the DOM
    renderApp();
}

const onMakeDecision = () => {
    const randomOption = Math.floor(Math.random() * appConfig.options.length);
    console.log(randomOption);
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{appConfig.title}</h1>
        {<p>{appConfig.options.length ? 'Options:': 'No Options'}</p>}
        <p>Total: {appConfig.options.length}</p>

        <button disabled={ !appConfig.options.length } onClick={onMakeDecision}>What should I do ?</button>
        <button onClick={removeAll}>Remove All</button>

        <ol className="my-options">
        { getOptions() }
        </ol>

        <form onSubmit={addOption}>
        <p>Option:</p>
        <input type="text" name="option"/>
        <button>Add</button>
        </form>
        </div>
    );

    ReactDOM.render(template, rootApp);
}

renderApp();