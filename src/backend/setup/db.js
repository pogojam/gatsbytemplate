const mongoose = require('mongoose')

const Database ={
        init:()=>{
            mongoose.connect('mongodb://pogojam:Cocojam1@ds011902.mlab.com:11902/sndle_web',{useNewUrlParser:true}).then(()=>{
                console.log("DB up")
            }).catch(err=>console.log('DB Setup ' + err))
        }
} 

module.exports = Database