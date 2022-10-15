const express = require('express');
const mongoose = require('mongoose');
const {dailyDurationSchema} = require('../../database/schemas.js')

const DailyDuration = mongoose.model("DailyDuration", dailyDurationSchema);

async function setTodaysTotalMinutesBudget(req, res){
    DailyDuration.updateOne({User:"Admin"},{DailyBudget: req.body.newDailyBudget}, function(err){
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

module.exports = setTodaysTotalMinutesBudget;