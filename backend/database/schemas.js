const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    Username: String,
    Password: String
});
const  Admin = mongoose.model("Admin", adminSchema);
const sessionSchema = new mongoose.Schema({
    User: String,
    Duration: Number
});

const dailyDurationSchema = new mongoose.Schema({
    DailyBudget: Number,
    User: String,
    Date: Date,
    TodaySessions: []
});
const DailyDuration = mongoose.model("DailyDuration", dailyDurationSchema);
const campaignDurationSchema = new mongoose.Schema({
    CampaignBudget: Number,
    User: String,
    CampaignSessions: []
});
const CampaignDuration = mongoose.model("CampaignDuration", campaignDurationSchema);
const streamSwitchSchema = new mongoose.Schema({
    User: String,
    Stream: String,
    Reason: String
});

module.exports = {
    Admin,
    DailyDuration ,
    CampaignDuration,
    sessionSchema,
    dailyDurationSchema,
    campaignDurationSchema,
    streamSwitchSchema
};

