/* deoendencies */
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

/*reducer into*/
import service from './service';


/* const */
const main = combineReducers({service});
const _allReducer = combineReducers({routerReducer, main});

/* export default */
export default _allReducer;
