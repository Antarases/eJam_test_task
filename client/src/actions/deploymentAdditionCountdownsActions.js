import { dispatch } from "../store/configureStore";

import { MIN_COUNTDOWN_TIME_IN_MILISECONDS, MAX_COUNTDOWN_TIME_IN_MILISECONDS } from "../constants/deploymentAdditionCountdowns";

export const addDeploymentAdditionCountdown = async ({ countdownText, callback }) => {
    const countdownId = Date.now();
    const countdownEndTime = Date.now() + Math.floor(Math.random() * (MAX_COUNTDOWN_TIME_IN_MILISECONDS - MIN_COUNTDOWN_TIME_IN_MILISECONDS + 1)) + MIN_COUNTDOWN_TIME_IN_MILISECONDS;

    dispatch({
        type: "DEPLOYMENT_ADDITION_COUNTDOWNS__ADD_COUNTDOWN",
        countdownId,
        countdownEndTime,
        countdownText,
        callback: () => {
            deleteDeploymentAdditionCountdown(countdownId);
            callback();
        }
    });
};

export const deleteDeploymentAdditionCountdown = (countdownId) => {
    dispatch({ type: "DEPLOYMENT_ADDITION_COUNTDOWNS__DELETE_COUNTDOWN_BY_ID", countdownId });
};
