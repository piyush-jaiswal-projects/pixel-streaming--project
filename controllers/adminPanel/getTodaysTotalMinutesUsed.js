const express = require('express');
const mongoose = require('mongoose');
const {DailyDuration} = require('../../database/schemas.js');

// const DailyDuration = mongoose.model("DailyDuration", dailyDurationSchema);

async function getTodaysTotalMinutesUsed(req, res){
    DailyDuration.findOne({User:"Admin"}, function(err, foundData){
        if(!foundData){
            console.log(err);
            const jsonContent = JSON.stringify({
                Message: "Some Error Occurred"
            });
            res.status(400).send(jsonContent);
        }
        else{
            const dbDate = foundData.Date;
            console.log(dbDate.getDate());
            const todaysDate = new Date();
            console.log(todaysDate.getDate());
            var diff = todaysDate.getDate() - dbDate.getDate();
            // var dayCount = Math.trunc(diff / 86400e3);
            var dayCount = diff;
            console.log(dayCount);
            var durationsArray = [];
            if(dayCount === 0){
                durationsArray = foundData.TodaySessions;
            }
            else{
                //update date in daily duration schema
                updateTodaysDate();
                durationsArray = [0];
            }
            var totalMinutesUsedToday = 0;
            durationsArray.forEach((item)=>{
                totalMinutesUsedToday += item;
            });
            const jsonContent = JSON.stringify({
                Message: "Success",
                TotalMinutesUsedToday: totalMinutesUsedToday
            });
            res.status(200).send(jsonContent);
        }
    });
    // streamSwitch();
}


function updateTodaysDate(req,res){
    DailyDuration.updateOne({User:"Admin"},{
        Date: new Date(),
        TodaySessions: []
    }, function(err){
        if(err){
            console.log(err);
        }
    });
}

module.exports = getTodaysTotalMinutesUsed;