const deploymentAPI = require("../datasources/DeploymentAPI");

module.exports = (app) => {
    app.get(
        "/deployments",
        async (req, res) => {
            try {
                const deployments = await deploymentAPI.getDeployments();

                res.send({ deployments, code: 200 });
            } catch (error) {
                console.log(error);
                res.status(422).send({ code: 422, text: "An error occurred during getting deployments", error: error.message });
            }
        }
    );

    app.put(
        "/deployment",
        async (req, res) => {
            try {
                const addedDeployment =  await deploymentAPI.addDeployment(req.body.deployment);

                res.send({ deployment: addedDeployment, code: 200 });
            } catch (error) {
                console.log(error);
                res.status(422).send({ code: 422, text: "An error occurred during adding deployment", error: error.message });
            }
        }
    );

    app.delete(
        "/deployment",
        async (req, res) => {
            try {
                const deletedDeployment = await deploymentAPI.deleteDeployment(req.body.deploymentId);

                res.send({ deployment: deletedDeployment, code: 200 });
            } catch (error) {
                console.log(error);
                res.status(422).send({ code: 422, text: "An error occurred during deleting deployment", error: error.message });
            }
        }
    );
};
