const express = require('express');
const mongoose = require('mongoose');
const {CampaignDuration} = require('../../database/schemas.js');



async function getTotalMinutesBudget(req, res){
    CampaignDuration.findOne({User:"Admin"}, function(err, foundData){
        if(!foundData){
            console.log(err);
            const jsonContent = JSON.stringify({
                Message: "Some Error Occurred"
            });
            res.status(400).send(jsonContent);
        }
        else{
            const jsonContent = JSON.stringify({
                Message: "Success",
                TotalMinutesBudget: foundData.CampaignBudget
            });
            res.status(200).send(jsonContent);
        }
    });
    // streamSwitch();
}

module.exports = getTotalMinutesBudget;