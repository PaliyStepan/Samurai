import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './App';

    ReactDOM.render(<MainApp />,document.getElementById('root'));




// ReactDOM.render(<App state={state}  addPost={addPost}/>, document.getElementById('root'));

// rerenderEntireTree(fake_store.getState());


// fake_store.subscribe(rerenderEntireTree);

// fake_store.subscribe( () => {
//     let state = fake_store.getState();
//     rerenderEntireTree(state);
// });



serviceWorker.unregister();


