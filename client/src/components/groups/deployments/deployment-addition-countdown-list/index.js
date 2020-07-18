import React  from "react";
import { connect } from "react-redux";

import Countdown from "../../../commons/countdown";
import { Container, Row, Col } from "reactstrap";

const DeploymentAdditionCountdownList = ({ deploymentAdditionCountdowns }) => {
    return (
        <Container tag="section">
            <Row>
                <Col xl={{size: 8, offset: 2}} lg={{size: 10, offset: 1}} md={12} sm={12} xs={12}>
                    {
                        Object.values(deploymentAdditionCountdowns).map(countdown => (
                            <Countdown
                                key={countdown.id}
                                countdown={countdown}
                            />
                        ))
                    }
                </Col>
            </Row>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        deploymentAdditionCountdowns: state.deploymentAdditionCountdowns.deploymentAdditionCountdowns
    };
};

export default connect(mapStateToProps)(DeploymentAdditionCountdownList);



