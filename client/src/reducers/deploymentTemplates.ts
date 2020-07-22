import { DeploymentTemplateType } from "../types/deploymentTemplateType";

export type DeploymentTemplatesStateType = {
    deploymentTemplates: Record<string, DeploymentTemplateType>,
    isDeploymentTemplatesLoading: boolean
};

const initialState = {
    deploymentTemplates: {},
    isDeploymentTemplatesLoading: true
};

export default function deploymentTemplates(state: DeploymentTemplatesStateType = initialState, action ): DeploymentTemplatesStateType {
    switch (action.type) {
        case "DEPLOYMENT_TEMPLATES__SET_DEPLOYMENT_TEMPLATES": {
            return {
                ...state,
                deploymentTemplates: action.deploymentTemplates
            };
        }

        case "DEPLOYMENT_TEMPLATES__SET_IS_DEPLOYMENT_TEMPLATES_LOADING": {
            return {
                ...state,
                isDeploymentTemplatesLoading: action.isDeploymentTemplatesLoading
            };
        }

        default:
            return state;
    }
};
