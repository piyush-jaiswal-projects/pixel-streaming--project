const express = require('express');
const mongoose = require('mongoose');

const {dailyDurationSchema} = require('../../database/schemas.js');
const {campaignDurationSchema} = require('../../database/schemas.js');

const CampaignDuration = mongoose.model("CampaignDuration", campaignDurationSchema);
const DailyDuration = mongoose.model("DailyDuration", dailyDurationSchema);

async function addNewSessionDuration(req, res){

    var campaignArray = [];
    var dailyArray = [];

    CampaignDuration.findOne({User:"Admin"}, function(err, foundData){
        campaignArray = foundData.CampaignSessions;
    });

    DailyDuration.findOne({User:"Admin"}, function(err, foundData){
        dailyArray = foundData.TodaySessions;
    });

    campaignArray.push(req.body.NewDuration);
    dailyArray.push(req.body.NewDuration);

    CampaignDuration.updateOne({User: "Admin"},{
        CampaignSessions: campaignArray
    },
    function(err){
        if(err){
            console.log(err);
            const jsonContent = JSON.stringify({
                Message: "Some Error Occurred"
            });
            console.log(jsonContent);
        }
        else{
            const jsonContent = JSON.stringify({
                Message: "Success"
            });
            console.log(jsonContent);
        }
    });


    DailyDuration.updateOne({User: "Admin"},{
        TodaySessions: dailyArray
    },
    function(err){
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

module.exports = addNewSessionDuration;