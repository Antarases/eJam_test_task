const mongoose = require("mongoose");

const DeploymentTemplate = mongoose.model("deploymentTemplate");

module.exports = {
    getDeploymentTemplates: async () => {
        return await DeploymentTemplate.find({});
    },
};

