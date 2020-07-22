export type DeploymentTemplateType = {
    id: string,
    name: string,
    versions: string[]
};

export type DeploymentTemplatesResponseType = {
    deploymentTemplates: Array<DeploymentTemplateType>,
    code: number
}
