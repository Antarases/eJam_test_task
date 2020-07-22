import React  from "react";
import CountdownComponent, { zeroPad } from 'react-countdown';

// @ts-ignore
import styles from "./countdown.module.scss";

import { DeploymentAdditionCountdownType } from "../../../types/deploymentAdditionCountdownType";

type PropsType = {
    countdown: DeploymentAdditionCountdownType
};

const renderer = ({ minutes, seconds, milliseconds, completed, props }) => {
    if (completed) {
        return null;
    } else {
        return (
            <React.Fragment>
                { props.countdownText && <span className={styles.text}>{props.countdownText}</span> }
                <span>{zeroPad(minutes)}:{zeroPad(seconds)}:{milliseconds}</span>
            </React.Fragment>
        );
    }
};

const Countdown: React.FC<PropsType> = ({ countdown }) => {
    return (
        <section className={styles.countdownContainer}>
            <CountdownComponent
                date={countdown.countdownEndTime}
                zeroPadTime={3}
                intervalDelay={0}
                precision={3}
                renderer={renderer}
                onComplete={countdown.callback}
                // @ts-ignore
                countdownText={countdown.countdownText}
            />
        </section>
    );
};

export default Countdown;
