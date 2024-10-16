import mongoose from "mongoose";

const workshopSchema = new mongoose.Schema({
    workshopName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    selectedSkills: Array,
    venue: {
        type: Object,
        required: true
    },
    workshopDate: {
        type: Date,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    }
});

const Workshop = mongoose.model('Workshop', workshopSchema);

export default Workshop;