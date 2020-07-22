import React, { useEffect } from "react";

import AddDeploymentForm from "../../groups/deployments/add-deployment-form";
import DeploymentList from "../../groups/deployments/deployment-list";
import DeploymentAdditionCountdownList from "../../groups/deployments/deployment-addition-countdown-list";

import { getDeploymentTemplates } from "../../../actions/deploymentTemplatesActions";

// @ts-ignore
import styles from "./app.module.scss";

const App = () => {
    useEffect(() => {
        getDeploymentTemplates();
    }, []);

    return (
        <div className={styles.deploymentsApp}>
            <AddDeploymentForm />
            <DeploymentList />
            <DeploymentAdditionCountdownList />
        </div>
    );
};

export default App;
