const rootApp = document.getElementById('app');

const user = {
  name: 'Frederico Martini',
  age: 30,
  location:'Pelotas'
};

const getLocation = location => {
    return location ? <p>Location: {location}</p> : null;
}

const template = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
);

ReactDOM.render(template, rootApp);