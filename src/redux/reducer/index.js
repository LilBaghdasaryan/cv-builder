import { combineReducers } from 'redux';
import headerReducer from "./headerReducer";
import educationReducer from "./educationReducer";
import experienceReducer from "./experienceReducer";
import skillsReducer from "./skillsReducer";


export default combineReducers({
    headerInfo: headerReducer,
    educationInfo: educationReducer,
    experienceInfo: experienceReducer,
    skillsInfo: skillsReducer
});