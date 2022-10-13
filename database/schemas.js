const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    Username: String,
    Password: String
});

const sessionSchema = new mongoose.Schema({
    User: String,
    Duration: Number
});

const dailyDurationSchema = new mongoose.Schema({
    DailyBudget: Number,
    TodaysSessions: []
});

const campaignDurationSchema = new mongoose.Schema({
    CampaignBudget: Number,
    CampaignSessions: []
});

const streamSwitchSchema = new mongoose.Schema({
    User: String,
    Stream: String
});

module.exports = {
    adminSchema,
    sessionSchema,
    dailyDurationSchema,
    campaignDurationSchema,
    streamSwitchSchema
};

