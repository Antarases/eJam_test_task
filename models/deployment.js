const mongoose = require("mongoose");
const { Schema } = mongoose;

const deploymentSchema = new Schema({
    url: { type: String, required: true },
    templateName: { type: String, required: true },
    version: { type: String, required: true }
}, {
    timestamps: { createdAt: "deployedAt" },
    toJSON: {   //  enable to see virtuals in output when using console.log(obj)
        virtuals: true,
        transform: (doc, ret) => {
            delete ret._id;
        }
    },
    toObject: {
        virtuals: true,
        transform: (doc, ret) => {
            delete ret._id;
        }
    }
});

mongoose.model("deployment", deploymentSchema, "deployments");