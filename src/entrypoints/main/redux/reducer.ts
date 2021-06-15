import { combineReducers } from 'redux';

import CmsArticleReducer from '../../../components/with-cms-article/redux/reducer';
import DatasetsReducer from '../../../components/with-datasets/redux/reducer';

export default combineReducers({ CmsArticleReducer, DatasetsReducer });
