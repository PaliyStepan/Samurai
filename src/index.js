import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
// import  {Provider} from "./StoreContext";

// let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            {/*<StoreContext.Provider value={store}>
                <App
                    // state={state}
                    // dispatch={store.dispatch.bind(store)}
                    // store={store}
                />
            </StoreContext.Provider>*/}

            <Provider store={store}>
                <App />

            </Provider>
        </BrowserRouter>

        ,document.getElementById('root'));
// }



// ReactDOM.render(<App state={state}  addPost={addPost}/>, document.getElementById('root'));

// rerenderEntireTree(store.getState());


// store.subscribe(rerenderEntireTree);

// store.subscribe( () => {
//     let state = store.getState();
//     rerenderEntireTree(state);
// });



serviceWorker.unregister();


