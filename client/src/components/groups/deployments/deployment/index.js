import React  from "react";

import { Button } from "reactstrap";

import { deleteDeploymentById } from "../../../../actions/deploymentActions";

import styles from "./deployment.module.scss";

const Deployment = ({ deployment }) => {
    return (
        <section className={styles.deploymentContainer}>
            <section className={styles.deploymentInfoContainer}>
                <div className={styles.deploymentInfoItem}>
                    <span className={styles.text}>Template name:</span>
                    <span className={styles.value}>{deployment.templateName}</span>
                </div>

                <div className={styles.deploymentInfoItem}>
                    <span className={styles.text}>Version:</span>
                    <span className={styles.value}>{deployment.version}</span>
                </div>

                <div className={styles.deploymentInfoItem}>
                    <span className={styles.text}>Url:</span>
                    <a href={deployment.url} className={styles.value}>{deployment.url}</a>
                </div>
            </section>

            <section className={styles.deleteButtonContainer}>
                <Button
                    className={styles.deleteDeploymentButton}
                    size="sm"
                    color="danger"
                    outline
                    onClick={() => {
                        deleteDeploymentById(deployment.id);
                    }}
                >
                    Delete
                </Button>
            </section>
        </section>
    );
};

export default Deployment;



