import { createStore, compose, applyMiddleware } from 'redux';
//import rootSaga from './sagas';
import appReducer from '../_reducers/index'
/** Saga Middleware */
//const sagaMiddleware = createSagaMiddleware();
/** Create middlewares for redux */
//let middlewares = applyMiddleware(sagaMiddleware);
const store = createStore(appReducer,{}
    //,compose
    )
/** run saga watchers */
//sagaMiddleware.run(rootSaga);
export {store}