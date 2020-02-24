
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState) {

    const composeEnhancers = composeWithDevTools();
    return createStore(
        rootReducer, 
        initialState, 
        composeEnhancers
    );
}