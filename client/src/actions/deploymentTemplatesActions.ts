import axios from "axios";
import { dispatch } from "../store/configureStore";

import { DeploymentTemplateType, DeploymentTemplatesResponseType } from "../types/deploymentTemplateType";

export const getDeploymentTemplates: () => Promise<void> = async () => {
    try {
        dispatch({ type: "DEPLOYMENT_TEMPLATES__SET_IS_DEPLOYMENT_TEMPLATES_LOADING", isDeploymentTemplatesLoading: true });

        const res = await axios.get<DeploymentTemplatesResponseType>("/deploymentTemplates");

        const deploymentTemplates: Record<string, DeploymentTemplateType> = res.data.deploymentTemplates.reduce((map, obj) => {
            map[obj.id] = obj;

            return map;
        }, {});

        dispatch({ type: "DEPLOYMENT_TEMPLATES__SET_DEPLOYMENT_TEMPLATES", deploymentTemplates });

        dispatch({ type: "DEPLOYMENT_TEMPLATES__SET_IS_DEPLOYMENT_TEMPLATES_LOADING", isDeploymentTemplatesLoading: false });
    } catch (error) {
        console.error("An error occurred during getting deployment templates.", error);

        dispatch({ type: "DEPLOYMENT_TEMPLATES__SET_IS_DEPLOYMENT_TEMPLATES_LOADING", isDeploymentTemplatesLoading: false });
    }
};
