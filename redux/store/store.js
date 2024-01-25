import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.APP_ENV !== 'production'
});

store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
}

store.runSagaTask()

export default () => store;