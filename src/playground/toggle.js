const rootApp = document.getElementById('app');
const appConfig = {
    title: 'Visibility Toggle',
    showHide: {
        message: 'Show Details',
        visible: false
    }
};

const toggle = () => {
    const visible = appConfig.showHide.visible;
    appConfig.showHide.message = visible ? 'Show Details' : 'Hide Details';
    appConfig.showHide.visible = !visible;

    render();
}

const showHideContent = () => {
    if (appConfig.showHide.visible) {
        return (
            <p>This is a hidden content!</p>
        );
    }
}

const render = () => {
    const template = (
        <div>
            <h1>{appConfig.title}</h1>
            <button onClick={toggle}>{appConfig.showHide.message}</button>
            { showHideContent() }
        </div>
    );

    ReactDOM.render(template, rootApp);
}

render();