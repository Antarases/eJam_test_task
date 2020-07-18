const mongoose = require("mongoose");

const Deployment = mongoose.model("deployment");

module.exports = {
    getDeployments: async () => {
        return await Deployment.find({});
    },
    addDeployment: async (deployment) => {
        const {templateName, templateVersion, templateUrl } = deployment;

        return await new Deployment({
            url: templateUrl,
            templateName,
            version: templateVersion
        }).save();
    },
    deleteDeployment: async (deploymentId) => {
        return await Deployment.findByIdAndDelete(deploymentId);
    }
};
