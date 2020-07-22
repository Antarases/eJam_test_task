import { DeploymentAdditionCountdownType } from "../types/deploymentAdditionCountdownType";

type DeploymentAdditionCountdownsStateType = {
    deploymentAdditionCountdowns: Record<string, DeploymentAdditionCountdownType>;
};

const initialState = {
    deploymentAdditionCountdowns: {}
};

export default function deploymentAdditionCountdowns(state: DeploymentAdditionCountdownsStateType = initialState, action ): DeploymentAdditionCountdownsStateType {
    switch (action.type) {
        case "DEPLOYMENT_ADDITION_COUNTDOWNS__ADD_COUNTDOWN": {
            const { countdownId, countdownEndTime, countdownText, callback } = action;

            return {
                ...state,
                deploymentAdditionCountdowns: {
                    ...state.deploymentAdditionCountdowns,
                    [countdownId]: {
                        id: countdownId,
                        countdownEndTime,
                        countdownText,
                        callback
                    }
                }
            };
        }

        case "DEPLOYMENT_ADDITION_COUNTDOWNS__DELETE_COUNTDOWN_BY_ID": {
            const { countdownId } = action;

            let newDeploymentAdditionCountdowns = { ...state.deploymentAdditionCountdowns };
            delete newDeploymentAdditionCountdowns[countdownId];

            return {
                ...state,
                deploymentAdditionCountdowns: newDeploymentAdditionCountdowns
            }
        }

        default:
            return state;
    }
};
