const deploymentTemplateAPI = require("../datasources/DeploymentTemplateAPI");

module.exports = (app) => {
    app.get(
        "/deploymentTemplates",
        async (req, res) => {
            try {
                const deploymentTemplates = await deploymentTemplateAPI.getDeploymentTemplates();

                res.send({ deploymentTemplates, code: 200 });
            } catch (error) {
                console.log(error);
                res.status(422).send({ code: 422, text: "An error occurred during getting deployment templates", error: error.message });
            }
        }
    );
};

