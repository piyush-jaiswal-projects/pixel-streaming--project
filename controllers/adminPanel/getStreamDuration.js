const express = require('express');
const mongoose = require('mongoose');
const {sessionSchema} = require('../../database/schemas.js');

const Session = mongoose.model("Session", sessionSchema);

async function getStreamDuration(req, res){
    Session.findOne({User: "Admin"}, function(err, foundData){
        if(foundData){
            console.log(foundData);
            const jsonContent = JSON.stringify({
                Message: "Duration Found",
                StreamDuration: foundData.Duration
            });
            res.status(200).send(jsonContent);
        }
        else{
            const jsonContent = JSON.stringify({
                Message: "Duration Not Found",
                StreamDuration: 30
            });
            res.status(200).send(jsonContent);
        }
    });
}

module.exports = getStreamDuration;