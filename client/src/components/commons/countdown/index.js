import React  from "react";
import CountdownComponent, { zeroPad } from 'react-countdown';

import styles from "./countdown.module.scss";

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

const Countdown = ({ countdown }) => {
    return (
        <section className={styles.countdownContainer}>
            <CountdownComponent
                date={countdown.countdownEndTime}
                zeroPadTime={3}
                intervalDelay={0}
                precision={3}
                renderer={renderer}
                onComplete={countdown.callback}
                countdownText={countdown.countdownText}
            />
        </section>
    );
};

export default Countdown;
