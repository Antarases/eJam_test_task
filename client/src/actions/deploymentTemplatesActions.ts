import { dispatch } from "../store/configureStore";

import * as deploymentTemplatesAPI from "../api/deploymentTemplatesAPI";

import { DeploymentTemplateType } from "../types/deploymentTemplateType";

export const getDeploymentTemplates: () => Promise<void> = async () => {
    try {
        dispatch({ type: "DEPLOYMENT_TEMPLATES__SET_IS_DEPLOYMENT_TEMPLATES_LOADING", isDeploymentTemplatesLoading: true });

        const deploymentTemplates: Array<DeploymentTemplateType> = await deploymentTemplatesAPI.getDeploymentTemplates();

        const newDeploymentTemplates: Record<string, DeploymentTemplateType> = deploymentTemplates.reduce((map, obj) => {
            map[obj.id] = obj;

            return map;
        }, {});

        dispatch({ type: "DEPLOYMENT_TEMPLATES__SET_DEPLOYMENT_TEMPLATES", deploymentTemplates: newDeploymentTemplates });

        dispatch({ type: "DEPLOYMENT_TEMPLATES__SET_IS_DEPLOYMENT_TEMPLATES_LOADING", isDeploymentTemplatesLoading: false });
    } catch (error) {
        console.error("An error occurred during getting deployment templates.", error);

        dispatch({ type: "DEPLOYMENT_TEMPLATES__SET_IS_DEPLOYMENT_TEMPLATES_LOADING", isDeploymentTemplatesLoading: false });
    }
};
