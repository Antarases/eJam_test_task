import React  from "react";
import classnames from "classnames";

import { Button } from "reactstrap";

import { deleteDeploymentById } from "../../../../actions/deploymentActions";

// @ts-ignore
import styles from "./deployment.module.scss";

import { DeploymentType } from "../../../../types/deploymentType";

type PropsType = {
    deployment: DeploymentType
};

const Deployment: React.FC<PropsType> = ({ deployment }) => {
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

                <div className={classnames(styles.deploymentInfoItem, styles.deploymentDate)}>
                    <span className={styles.text}>Deployment date:</span>
                    <span className={styles.value}>{new Date(deployment.deployedAt).toLocaleString()}</span>
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
