const express = require('express')
const async = require("hbs/lib/async")
// const Contact =require("../models/Contact")

const Detail = require("../models/Detail")
const Slider = require("../models/Slider")

const Service = require("../models/Service")

const routes = express.Router()

routes.get("/", async(req,res) => {

    const details = await Detail.findOne({"_id":"6619284e1b53957681346989"})
    const slides= await Slider.find()
    // console.log(details);
    // console.log(slides);
    const services =await Service.find()

    res.render("index",{
        details:details,
        slides:slides,
        services:services
    })
})


routes.get("/gallery", async(req,res) => {
    const details = await Detail.findOne({"_id":"6619284e1b53957681346989"})
    res.render("gallery",{
        details:details
    })
})

routes.post("/process-contact-form", async(request,response) =>{
    console.log("this form ios submitted");
    console.log(request.body);
    //save the data to db
    try{
          
        const data =await Contact.create(request.body)
        console.log(data);
        response.redirect("/")
    }catch(e){
        console.log(e);
        response.redirect("/")
    }
})

module.exports = routes