const express = require('express');
const mongoose = require('mongoose');
const {DailyDuration} = require('../../database/schemas.js');

// const {DailyDuration} = mongoose.model("DailyDuration", dailyDurationSchema);

async function getTodaysTotalMinutesBudget(req, res){
    DailyDuration.findOne({User:"Admin"}, function(err, foundData){
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
                TotalMinutesBudgetToday: foundData.DailyBudget
            });
            res.status(200).send(jsonContent);
        }
    });
}

module.exports = getTodaysTotalMinutesBudget;