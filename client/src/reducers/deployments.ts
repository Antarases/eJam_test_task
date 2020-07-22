import { DeploymentType } from "../types/deploymentType";

export type DeploymentsStateType = {
    deployments: Record<string, DeploymentType>;
    isDeploymentsLoading: boolean;
}

const initialState: DeploymentsStateType = {
    deployments: {},
    isDeploymentsLoading: true
};

export default function deployments(state: DeploymentsStateType = initialState, action ): DeploymentsStateType {
    switch (action.type) {
        case "DEPLOYMENTS__SET_DEPLOYMENTS": {
            return {
                ...state,
                deployments: action.deployments
            }
        }

        case "DEPLOYMENTS__ADD_DEPLOYMENT": {
            const { deployment } = action;

            return {
                ...state,
                deployments: {
                    ...state.deployments,
                    [deployment.id]: { ...deployment }
                }
            };
        }

        case "DEPLOYMENTS__DELETE_DEPLOYMENT_BY_ID": {
            const { deploymentId } = action;

            let newDepoyments = { ...state.deployments };
            delete newDepoyments[deploymentId];

            return {
                ...state,
                deployments: newDepoyments
            }
        }

        case "DEPLOYMENTS__SET_IS_DEPLOYMENTS_LOADING": {
            return {
                ...state,
                isDeploymentsLoading: action.isDeploymentsLoading
            };
        }

        default:
            return state;
    }
};
