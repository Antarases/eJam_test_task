const initialState = {
    deploymentTemplates: {},
    isDeploymentTemplatesLoading: true
};

export default function deploymentTemplates(state = initialState, action ) {
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



