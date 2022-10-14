const express = require('express');
const mongoose = require('mongoose');
const {campaignDurationSchema} = require('../../database/schemas.js')

const CampaignDuration = mongoose.model("CampaignDuration", campaignDurationSchema);

async function getTotalMinutesBudget(req, res){
    CampaignDuration.updateOne({User:"Admin"},{CampaignBudget: req.body.newCampaignBudget}, function(err){
        if(err){
            console.log(err);
            const jsonContent = JSON.stringify({
                Message: "Some Error Occurred"
            });
            res.status(400).send(jsonContent);
        }
        else{
            const jsonContent = JSON.stringify({
                Message: "Success"
            });
            res.status(200).send(jsonContent);
        }
    });
}

module.exports = getTotalMinutesBudget;