import React, { useEffect } from "react";
import { connect } from "react-redux";

import Deployment from "../deployment";
import { Container, Row, Col } from "reactstrap";

import { getDeployments } from "../../../../actions/deploymentActions";

import styles from "./deployment-list.module.scss";

const DeploymentList = ({ deployments, isDeploymentsLoading }) => {
    useEffect(() => {
        getDeployments();
    }, []);

    return (
        <Container tag="section" className={styles.deploymentListContainer}>
            <Row>
                <Col
                    className={styles.deploymentList}
                    xl={{size: 8, offset: 2}} lg={{size: 10, offset: 1}} md={12} sm={12} xs={12}
                >
                    {
                        Object.values(deployments).map(deployment => (
                            <Deployment
                                key={deployment.id}
                                deployment={deployment}
                            />
                        ))
                    }

                    {
                        (!isDeploymentsLoading && !Object.keys(deployments).length)
                        && <div className={styles.noDeploymentsText}>You have no deployments yet</div>
                    }
                    { isDeploymentsLoading && <div className={styles.isLoading}>Deployments are being loaded...</div> }
                </Col>
            </Row>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        deployments: state.deployments.deployments,
        isDeploymentsLoading: state.deployments.isDeploymentsLoading
    };
};

export default connect(mapStateToProps)(DeploymentList);


