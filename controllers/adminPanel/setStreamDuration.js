const express = require('express');
const mongoose = require('mongoose');
const {sessionSchema} = require('../../database/schemas.js');

const Session = mongoose.model("Session", sessionSchema);

async function setStreamDuration(req, res){
    Session.updateOne({User: "Admin"},{Duration: req.body.StreamDuration}, function(err){
        if(err){
            const jsonContent = JSON.stringify({
                Message: "Duration Update Failed"
            });
            res.status(200).send(jsonContent);
        }
        else{
            const jsonContent = JSON.stringify({
                Message: "Duration Update Success"
            });
            res.status(200).send(jsonContent);
        }
    });
}

module.exports = setStreamDuration;