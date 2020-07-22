export type DeploymentType = {
    id: string,
    templateName: string,
    version: string,
    url: string,
    deployedAt: string
};

export type DeploymentInputType = Omit<DeploymentType, "id" | "deployedAt">;

export type DeploymentsResponseType = {
    deployments: Array<DeploymentType>,
    code: number
}

export type DeploymentResponseType = {
    deployment: DeploymentType,
    code: number
}
