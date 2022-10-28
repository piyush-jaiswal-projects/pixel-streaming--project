const express = require('express');
const mongoose = require('mongoose');
const {streamSwitchSchema} = require('../../database/schemas.js');

const StreamSwitch = mongoose.model("StreamSwitch", streamSwitchSchema);

async function getStreamSwitch(req, res){
    console.log("Insie get stream switch");
    StreamSwitch.findOne({User: "Admin"}, function(err, foundUser){
        if(foundUser){
            const jsonContent = JSON.stringify({
                Message: foundUser.Stream
            });
            res.status(200).send(jsonContent);
        }
        else if(err){
            console.log(err);
        }
        else{
              const  jsonContent = JSON.stringify({
                    Message: "ERROR"
                });
            res.status(200).send(jsonContent);
        }
    });
}

module.exports = getStreamSwitch;