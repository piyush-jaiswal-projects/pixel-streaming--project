const express = require('express');
const mongoose = require('mongoose');

const {streamSwitchSchema} = require('../../database/schemas.js');
const {campaignDurationSchema} = require('../../database/schemas.js')
const {dailyDurationSchema} = require('../../database/schemas.js')

const DailyDuration = mongoose.model("DailyDuration", dailyDurationSchema);

const CampaignDuration = mongoose.model("CampaignDuration", campaignDurationSchema);

const StreamSwitch = mongoose.model("StreamSwitch", streamSwitchSchema);

async function addNewSessionDuration(req, res){

    // var campaignArray = [];
    // var dailyArray = [];

    const NewDuration = req.body.NewDuration;

    CampaignDuration.findOne({User:"Admin"}, function(err, foundData){
        campaignArray = foundData.CampaignSessions;
    });

    DailyDuration.findOne({User:"Admin"}, function(err, foundData){
        dailyArray = foundData.TodaySessions;
    });

    // campaignArray.push(req.body.NewDuration);
    // dailyArray.push(req.body.NewDuration);

    CampaignDuration.updateOne({User: "Admin"},{
        $push: {CampaignSessions:NewDuration}
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
        $push: {TodaySessions: NewDuration}
    },
    function(err){
        if(err){
            console.log(err);
            const jsonContent = JSON.stringify({
                Message: "Some Error Occurred"
            });
            streamSwitch();
            res.status(400).send(jsonContent);
        }
        else{
            const jsonContent = JSON.stringify({
                Message: "Success"
            });
            streamSwitch();
            res.status(200).send(jsonContent);
        }
    });

}

async function streamSwitch(){
    console.log("Inside main function");
    var message="default";

    //get todays budget
    //get todays minutes used
    const today = await compareToday();
    console.log("Switching-today: "+today);
    //get total budget
    //get total minutes used
    const total = await compareTotal();
    console.log("Switching-total: "+total);
    //compare and accordingly set ON and OFF
    if(today === false && total === false){
        //Stream OFF
        message = Switch("ON");
    }
    else{
        //Stream ON
        message = Switch("OFF");
    }

    // const jsonContent = JSON.stringify({
    //     Message: message
    // });
    // res.status(200).send(jsonContent);
}

async function compareTotal(){
    console.log("inside compare total");
    var budget;
    var used;
    const promise = await CampaignDuration.findOne({User:"Admin"})
    .then(function(foundData){
        budget = foundData.CampaignBudget;
        const durationsArray = foundData.CampaignSessions;
        used = 0;
        durationsArray.forEach((item)=>{
                used += item;
            });
    });
    if((used/60) >= budget) return true;
    else return false;

}

async function compareToday(){
    console.log("inside compare today");
    var budget;
    var used;
    const promise = await DailyDuration.findOne({User:"Admin"})
    .then(function(foundData){
       budget = foundData.DailyBudget;
        const durationsArray = foundData.TodaySessions;
        used = 0;
       durationsArray.forEach((item)=>{
                used += item;
            });
    });
    console.log(used+" ---- "+budget);
    if((used/60) >= budget) return true;
    else return false;
}

function Switch(Switch){
    console.log("inside compare switch");
    StreamSwitch.updateOne({User: "Admin"},{Stream: Switch}, function(err){
        if(err){
            console.log(err);
            return "Switching Failed";
        }
        else{
            if(Switch === "ON"){
                return "ON";
            }
            else if(Switch === "OFF"){
                return "OFF";
            }
            
        }
    });
}

module.exports = addNewSessionDuration;