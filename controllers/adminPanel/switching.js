const express = require('express');
const mongoose = require('mongoose');
const {streamSwitchSchema} = require('../../database/schemas.js');
const {campaignDurationSchema} = require('../../database/schemas.js')
const {dailyDurationSchema} = require('../../database/schemas.js')

const DailyDuration = mongoose.model("DailyDuration", dailyDurationSchema);

const CampaignDuration = mongoose.model("CampaignDuration", campaignDurationSchema);

const StreamSwitch = mongoose.model("StreamSwitch", streamSwitchSchema);

function streamSwitch(){

    var message="default";

    //get todays budget
    //get todays minutes used
    const today = compareToday();
    console.log("Switching: "+today);
    //get total budget
    //get total minutes used
    const total = compareTotal();
    console.log("Switching: "+total);
    //compare and accordingly set ON and OFF
    if(today === true || total === true){
        //Stream OFF
        message = Switch("OFF");
    }
    else{
        //Stream ON
        message = Switch("ON");
    }

    // const jsonContent = JSON.stringify({
    //     Message: message
    // });
    // res.status(200).send(jsonContent);
}

function compareTotal(){
    var budget;
    var used;
    CampaignDuration.findOne({User:"Admin"}, function(err, foundData){
        budget = foundData.CampaignBudget;
        const durationsArray = foundData.CampaignSessions;
        used = 0;
        durationsArray.forEach((item)=>{
                used += item;
            });
            if(used > budget) return true;
            else return false;
    });

}

function compareToday(){
    var budget;
    var used;
    DailyDuration.findOne({User:"Admin"}, function(err, foundData){
        budget = foundData.DailyBudget;
        const durationsArray = foundData.TodaySessions;
        used = 0;
        durationsArray.forEach((item)=>{
                used += item;
            });
            if(used > budget) return true;
            else return false;
    });
}

function Switch(Switch){
    StreamSwitch.updateOne({User: "Admin"},{Stream: Switch}, function(err){
        if(err){
            console.log(err);
            return "Switching Failed";
        }
        else{
            if(req.body.Switch === "ON"){
                return "ON";
            }
            else if(req.body.Switch === "OFF"){
                return "OFF";
            }
            
        }
    });
}


module.exports = streamSwitch;