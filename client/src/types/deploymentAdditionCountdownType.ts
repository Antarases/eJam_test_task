export type DeploymentAdditionCountdownType = {
    id: number,
    countdownEndTime: number,
    countdownText?: string,
    callback?: (...args: Array<any>) => any
};

export type DeploymentAdditionCountdownInputType = Omit<DeploymentAdditionCountdownType, "id" | "countdownEndTime">;
