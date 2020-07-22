import { dispatch } from "../store/configureStore";

import * as deploymentsAPI from "../api/deploymentsAPI"

import { addDeploymentAdditionCountdown } from "./deploymentAdditionCountdownsActions";
import { DeploymentType, DeploymentInputType } from "../types/deploymentType";

export const getDeployments: () => Promise<void> = async () => {
    try {
        dispatch({ type: "DEPLOYMENTS__SET_IS_DEPLOYMENTS_LOADING", isDeploymentsLoading: true });

        const deployments: Array<DeploymentType> = await deploymentsAPI.getDeployments();

        const newDeployments: Record<string, DeploymentType> = deployments.reduce((map, obj) => {
            map[obj.id] = obj;

            return map;
        }, {});

        dispatch({ type: "DEPLOYMENTS__SET_DEPLOYMENTS", deployments: newDeployments });

        dispatch({ type: "DEPLOYMENTS__SET_IS_DEPLOYMENTS_LOADING", isDeploymentsLoading: false });
    } catch (error) {
        console.error("An error occurred during getting deployments.", error);

        dispatch({ type: "DEPLOYMENTS__SET_IS_DEPLOYMENTS_LOADING", isDeploymentsLoading: false });
    }
};

export const addDeployment: (deployment: DeploymentInputType) => Promise<void> = async (deployment) => {
    try {
        const addedDeployment: DeploymentType = await deploymentsAPI.addDeployment(deployment);

        addDeploymentAdditionCountdown({
            countdownText: "Deployment will be shown after:",
            callback: () => dispatch({ type: "DEPLOYMENTS__ADD_DEPLOYMENT", deployment: addedDeployment })
        });
    } catch (error) {
        console.error("An error occurred during adding deployment.", error);
    }
};

export const deleteDeploymentById: (deploymentId: string) => Promise<void> = async (deploymentId) => {
    try {
        const deletedDeployment: DeploymentType = await deploymentsAPI.deleteDeploymentById(deploymentId);

        dispatch({ type: "DEPLOYMENTS__DELETE_DEPLOYMENT_BY_ID", deploymentId: deletedDeployment.id });
    } catch (error) {
        console.error("An error occurred during adding deployment.", error);
    }
};
