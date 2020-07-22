import axios from "axios";

import { DeploymentInputType, DeploymentResponseType, DeploymentsResponseType, DeploymentType } from "../types/deploymentType";

export const getDeployments: () => Promise<Array<DeploymentType>> = async () => {
    const res = await axios.get<DeploymentsResponseType>("/deployments");

    return res.data.deployments;
};

export const addDeployment: (deployment: DeploymentInputType) => Promise<DeploymentType> = async (deployment) => {
    const res = await axios.put<DeploymentResponseType>("/deployment", {deployment});

    return res.data.deployment;
};

export const deleteDeploymentById: (deploymentId: string) => Promise<DeploymentType> = async (deploymentId) => {
    const res = await axios.delete<DeploymentResponseType>("/deployment", { data: { deploymentId } });

    return res.data.deployment;
};
