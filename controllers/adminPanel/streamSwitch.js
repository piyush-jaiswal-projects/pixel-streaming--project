const express = require('express');
const mongoose = require('mongoose');
const {streamSwitchSchema} = require('../../database/schemas.js');

const StreamSwitch = mongoose.model("StreamSwitch", streamSwitchSchema);

async function streamSwitch(req, res){
    StreamSwitch.updateOne({User: "Admin"},{Stream: req.body.Switch}, function(err){
        if(err){
            const jsonContent = JSON.stringify({
                Message: "Switching Failed"
            });
            res.status(400).send(jsonContent);
        }
        else{
            if(req.body.Switch === "ON"){
                jsonContent = JSON.stringify({
                    Message: "ON"
                });
            }
            else if(req.body.Switch === "OFF"){
                jsonContent = JSON.stringify({
                    Message: "OFF"
                });
            }
            
            res.status(200).send(jsonContent);
        }
    });
}

module.exports = streamSwitch;