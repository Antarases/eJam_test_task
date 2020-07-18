import axios from "axios";
import { dispatch } from "../store/configureStore";

import { addDeploymentAdditionCountdown } from "./deploymentAdditionCountdownsActions";

export const getDeployments = async () => {
    try {
        dispatch({ type: "DEPLOYMENTS__SET_IS_DEPLOYMENTS_LOADING", isDeploymentsLoading: true });

        const res = await axios.get("/deployments");

        const deployments = res.data.deployments.reduce((map, obj) => {
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

export const addDeployment = async (deployment) => {
    try {
        const res = await axios.put("/deployment", { deployment });

        addDeploymentAdditionCountdown({
            countdownText: "Deployment will be shown after:",
            callback: () => dispatch({ type: "DEPLOYMENTS__ADD_DEPLOYMENT", deployment: res.data.deployment })
        });
    } catch (error) {
        console.error("An error occurred during adding deployment.", error);
    }
};

export const deleteDeploymentById = async (deploymentId) => {
    try {
        const res = await axios.delete("/deployment", { data: { deploymentId } });

        dispatch({ type: "DEPLOYMENTS__DELETE_DEPLOYMENT_BY_ID", deploymentId: res.data.deployment.id });
    } catch (error) {
        console.error("An error occurred during adding deployment.", error);
    }
};