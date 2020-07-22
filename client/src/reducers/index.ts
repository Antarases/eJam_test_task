import { combineReducers } from "redux";

import deployments from "./deployments";
import deploymentTemplates from "./deploymentTemplates";
import deploymentAdditionCountdowns from "./deploymentAdditionCountdowns";

const rootReducer = combineReducers({
    deployments,
    deploymentTemplates,
    deploymentAdditionCountdowns
});

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;
