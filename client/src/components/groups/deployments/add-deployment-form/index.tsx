import React, { useState, ChangeEvent, FormEvent } from "react";
import { connect } from "react-redux";

import { Container, Row, Col, Form, Input, Button } from "reactstrap";

import { addDeployment } from "../../../../actions/deploymentActions";

// @ts-ignore
import styles from "./add-deployment-form.module.scss";

import { RootStateType } from "../../../../reducers";
import { DeploymentTemplateType } from "../../../../types/deploymentTemplateType";

type MapStatePropsType = {
    deploymentTemplates: Record<string, DeploymentTemplateType>,
    isDeploymentTemplatesLoading: boolean
};

const AddDeploymentForm: React.FC<MapStatePropsType> = ({ deploymentTemplates, isDeploymentTemplatesLoading }) => {
    const [templateName, setTemplateName] = useState<string>("");
    const [templateVersion, setTemplateVersion] = useState<string>("");
    const [templateUrl, setTemplateUrl] = useState<string>("");
    const [selectedDeploymentTemplateId, setSelectedDeploymentTemplateId] = useState<string>("");

    return (
        <Container tag="section" className={styles.addDeploymentForm}>
            <Row>
                <Col
                    className={styles.title}
                    lg={{size: 4, offset: 4}} md={{size: 6, offset: 3}} sm={{size: 6, offset: 3}} xs={12}
                >
                    Add Deployment
                </Col>
            </Row>

            {
                (!isDeploymentTemplatesLoading && !!Object.keys(deploymentTemplates).length)
                && <Form
                    onSubmit={(e: FormEvent<HTMLFormElement>) => {
                        e.preventDefault();

                        addDeployment({ templateName, version: templateVersion, url: templateUrl });

                        setTemplateName("");
                        setTemplateVersion("");
                        setTemplateUrl("");
                        setSelectedDeploymentTemplateId("");
                    }}
                >
                    <Row>
                        <Col
                            className={styles.formFieldContainer}
                            lg={{size: 4, offset: 4}} md={{size: 6, offset: 3}} sm={{size: 8, offset: 2}} xs={12}
                        >
                            <label htmlFor="text" className={styles.label}>Template name:</label>
                            <Input
                                id="templateName"
                                type="select"
                                value={selectedDeploymentTemplateId}
                                placeholder="Select name"
                                required
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    setTemplateName(deploymentTemplates[e.target.value].name);
                                    setSelectedDeploymentTemplateId(e.target.value);
                                }}
                            >
                                <option hidden />
                                {
                                    Object.values(deploymentTemplates).map(deploymentTemplate => (
                                        <option key={deploymentTemplate.id} value={deploymentTemplate.id}>{deploymentTemplate.name}</option>
                                    ))
                                }
                            </Input>
                        </Col>
                    </Row>

                    <Row>
                        <Col
                            className={styles.formFieldContainer}
                            lg={{size: 4, offset: 4}} md={{size: 6, offset: 3}} sm={{size: 8, offset: 2}} xs={12}
                        >
                            <label htmlFor="text" className={styles.label}>Template version:</label>
                            <Input
                                id="templateVersion"
                                type="select"
                                value={templateVersion}
                                placeholder="Select version"
                                disabled={!templateName}
                                required
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setTemplateVersion(e.target.value)}
                            >
                                <option hidden />
                                {
                                    selectedDeploymentTemplateId && deploymentTemplates && deploymentTemplates[selectedDeploymentTemplateId]
                                    && deploymentTemplates[selectedDeploymentTemplateId].versions.map(version => (
                                        <option key={version}>{version}</option>
                                    ))
                                }
                            </Input>
                        </Col>
                    </Row>

                    <Row>
                        <Col
                            className={styles.formFieldContainer}
                            lg={{size: 4, offset: 4}} md={{size: 6, offset: 3}} sm={{size: 8, offset: 2}} xs={12}
                        >
                            <label htmlFor="text" className={styles.label}>Url:</label>
                            <Input
                                id="url"
                                type="url"
                                value={templateUrl}
                                placeholder="Enter url"
                                required
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setTemplateUrl(e.target.value)}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col
                            className={styles.submitButtonContainer}
                            lg={{size: 4, offset: 4}} md={{size: 6, offset: 3}} sm={{size: 8, offset: 2}} xs={12}
                        >
                            <Button
                                className={styles.submitButton}
                                type="submit"
                                color="primary"
                            >
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            }

            {
                (!isDeploymentTemplatesLoading && !Object.keys(deploymentTemplates).length)
                && <Col
                    className={styles.noDeploymentTemplatesText}
                    lg={{size: 4, offset: 4}} md={{size: 6, offset: 3}} sm={{size: 8, offset: 2}} xs={12}
                >
                    You are unable to add deployment due to not having deployment templates
                </Col>
            }
            {
                isDeploymentTemplatesLoading
                && <Col
                    className={styles.isLoading}
                >
                    Deployment templates are being loaded...
                </Col>
            }
        </Container>
    );
};

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        deploymentTemplates: state.deploymentTemplates.deploymentTemplates,
        isDeploymentTemplatesLoading: state.deploymentTemplates.isDeploymentTemplatesLoading
    };
};

export default connect(mapStateToProps)(AddDeploymentForm);
