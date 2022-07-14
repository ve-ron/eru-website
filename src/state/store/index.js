import { createStore } from 'redux';
import reducers from '../reducers';
import { InitialState } from '../reducers/searchTextReducer';

export const store = createStore(
    reducers,
);