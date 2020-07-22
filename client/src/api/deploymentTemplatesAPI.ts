import axios from "axios";

import {DeploymentTemplatesResponseType, DeploymentTemplateType} from "../types/deploymentTemplateType";

export const getDeploymentTemplates: () => Promise<Array<DeploymentTemplateType>> = async () => {
    const res = await axios.get<DeploymentTemplatesResponseType>("/deploymentTemplates");

    return res.data.deploymentTemplates;
};
