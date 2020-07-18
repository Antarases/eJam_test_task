const mongoose = require("mongoose");
const { Schema } = mongoose;

const deploymentTemplateSchema = new Schema({
    name: { type: String, required: true },
    versions: {
        type: [String],
        validate: (value) => (Array.isArray(value) && value.length > 0),
    },
}, {
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

mongoose.model("deploymentTemplate", deploymentTemplateSchema, "deploymentTemplates");
