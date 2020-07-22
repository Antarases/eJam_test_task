import { dispatch } from "../store/configureStore";

import { MIN_COUNTDOWN_TIME_IN_MILISECONDS, MAX_COUNTDOWN_TIME_IN_MILISECONDS } from "../constants/deploymentAdditionCountdowns";

import { DeploymentAdditionCountdownInputType } from "../types/deploymentAdditionCountdownType";

export const addDeploymentAdditionCountdown: (obj: DeploymentAdditionCountdownInputType) => Promise<void> = async ({ countdownText, callback }) => {
    const countdownId: number = Date.now();
    const countdownEndTime: number = Date.now() + Math.floor(Math.random() * (MAX_COUNTDOWN_TIME_IN_MILISECONDS - MIN_COUNTDOWN_TIME_IN_MILISECONDS + 1)) + MIN_COUNTDOWN_TIME_IN_MILISECONDS;

    dispatch({
        type: "DEPLOYMENT_ADDITION_COUNTDOWNS__ADD_COUNTDOWN",
        countdownId,
        countdownEndTime,
        countdownText,
        callback: () => {
            deleteDeploymentAdditionCountdown(countdownId);
            (typeof callback === "function") && callback();
        }
    });
};

export const deleteDeploymentAdditionCountdown: (countdownId: number) => void = (countdownId) => {
    dispatch({ type: "DEPLOYMENT_ADDITION_COUNTDOWNS__DELETE_COUNTDOWN_BY_ID", countdownId });
};
