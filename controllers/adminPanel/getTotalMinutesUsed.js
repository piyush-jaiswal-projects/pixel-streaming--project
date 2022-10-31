const express = require('express');
const mongoose = require('mongoose');
const {CampaignDuration} = require('../../database/schemas.js')

// const CampaignDuration = mongoose.model("CampaignDuration", campaignDurationSchema);

async function getTotalMinutesUsed(req, res){
    CampaignDuration.findOne({User:"Admin"}, function(err, foundData){
        if(!foundData){
            console.log(err);
            const jsonContent = JSON.stringify({
                Message: "Some Error Occurred"
            });
            res.status(400).send(jsonContent);
        }
        else{
            const durationsArray = foundData.CampaignSessions;
            var totalMinutesUsed = 0;
            durationsArray.forEach((item)=>{
                totalMinutesUsed += item;
            });
            const jsonContent = JSON.stringify({
                Message: "Success",
                TotalMinutesUsed: totalMinutesUsed
            });
            res.status(200).send(jsonContent);
        }
    });
    // streamSwitch();
}

module.exports = getTotalMinutesUsed;