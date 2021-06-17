import { combineReducers } from 'redux';

import CmsPageReducer from '../../../components/with-cms-page/redux/reducer';
import DatasetsReducer from '../../../components/with-datasets/redux/reducer';

export default combineReducers({ CmsPageReducer, DatasetsReducer });
