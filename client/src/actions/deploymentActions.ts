import axios from "axios";
import { dispatch } from "../store/configureStore";

import { addDeploymentAdditionCountdown } from "./deploymentAdditionCountdownsActions";
import { DeploymentType, DeploymentInputType, DeploymentsResponseType, DeploymentResponseType} from "../types/deploymentType";

export const getDeployments: () => Promise<void> = async () => {
    try {
        dispatch({ type: "DEPLOYMENTS__SET_IS_DEPLOYMENTS_LOADING", isDeploymentsLoading: true });

        const res = await axios.get<DeploymentsResponseType>("/deployments");

        const deployments: Record<string, DeploymentType> = res.data.deployments.reduce((map, obj) => {
            map[obj.id] = obj;

            return map;
        }, {});

        dispatch({ type: "DEPLOYMENTS__SET_DEPLOYMENTS", deployments });

        dispatch({ type: "DEPLOYMENTS__SET_IS_DEPLOYMENTS_LOADING", isDeploymentsLoading: false });
    } catch (error) {
        console.error("An error occurred during getting deployments.", error);

        dispatch({ type: "DEPLOYMENTS__SET_IS_DEPLOYMENTS_LOADING", isDeploymentsLoading: false });
    }
};

export const addDeployment: (deployment: DeploymentInputType) => Promise<void> = async (deployment) => {
    try {
        const res = await axios.put<DeploymentResponseType>("/deployment", {deployment});

        addDeploymentAdditionCountdown({
            countdownText: "Deployment will be shown after:",
            callback: () => dispatch({ type: "DEPLOYMENTS__ADD_DEPLOYMENT", deployment: res.data.deployment })
        });
    } catch (error) {
        console.error("An error occurred during adding deployment.", error);
    }
};

export const deleteDeploymentById: (deploymentId: string) => Promise<void> = async (deploymentId) => {
    try {
        const res = await axios.delete<DeploymentResponseType>("/deployment", { data: { deploymentId } });

        dispatch({ type: "DEPLOYMENTS__DELETE_DEPLOYMENT_BY_ID", deploymentId: res.data.deployment.id });
    } catch (error) {
        console.error("An error occurred during adding deployment.", error);
    }
};
