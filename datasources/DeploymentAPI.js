const mongoose = require("mongoose");

const Deployment = mongoose.model("deployment");

module.exports = {
    getDeployments: async () => {
        return await Deployment.find({});
    },
    addDeployment: async (deployment) => {
        const {templateName, version, url } = deployment;

        return await new Deployment({
            templateName,
            version,
            url
        }).save();
    },
    deleteDeployment: async (deploymentId) => {
        return await Deployment.findByIdAndDelete(deploymentId);
    }
};
