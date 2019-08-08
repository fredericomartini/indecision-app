// console.log('App is running!!');

// var template = (
// <div>
//     <h1>Indecision App</h1>
//     <p>This is some info</p>
//     <ol>
//         <li>Item one</li>
//         <li>Item two</li>
//     </ol>
// </div>
// );

// var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);


const rootApp = document.getElementById('app');
const myTemplate = (
    <div>
        <h1>Frederico Martini</h1>
        <p>Age: 30</p>
        <p>Location: Pelotas</p>
    </div>
);

ReactDOM.render(myTemplate, rootApp);