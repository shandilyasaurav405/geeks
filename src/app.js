const express = require("express")
const hbs = require("hbs")
const bodyParser = require('body-parser')

const app = express()
const mongoose = require("mongoose")


const routes = require('./routes/main')
const Detail = require("./models/Detail")
const Slider = require("./models/Slider")
const Service = require("./models/Service")

app.use(bodyParser.urlencoded({
    extended:true
}))

app.use('/static',express.static("public"))

app.use('',routes)


//template engine


app.set('view engine','hbs')

app.set("views","views")

hbs.registerPartials("views/partials")


//db connection
mongoose.set('strictQuery', false)

mongoose.connect("mongodb://127.0.0.1:27017/MyWeb", ()=>{
    console.log("db connected");
         
//    Service.create([
//     {
//         icon:"fa-solid fa-computer service_icon",
//         title:'Web development',
//         description: 'We provide solution that helps you to grow digitally.',
//          linkText: 'https://www.google.com',
//          link:'Check'
//     },
//     {
//         icon:"fa-brands fa-android",
//         title:'Android development',
//         description: 'Transforming ideas into seamless Android experiences for your digital journey.',
//          linkText: 'https://www.google.com',
//          link:'Check project'
//     },
//     {
//         icon:"fa-solid fa-tachograph-digital",
//         title:'Digital Marketing',
//         description: 'Affordable cost',
//          linkText: 'https://www.google.com',
//          link:'Check clients'
//     }
//    ])

    
  
    // Slider.create([
    //     {
    //         title:"App Development",
    //         subTitle:"App development by embark",
    //         imageUrl:"/static/images/free4.jpg"
    //     },
    //     {
    //         title:"web Development",
    //         subTitle:"web development by embark",
    //         imageUrl:"/static/images/free2.jpg"
    //     },
    //     {
    //         title:"Digital Marketing",
    //         subTitle:"App development by embark",
    //         imageUrl:"/static/images/free3.jpg"
    //     }

    // ])





    
    // Detail.create({
    //     brandName:"Embark Technology",
    //     brandIconUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4UeEjjERyEVTOIaXIKHlj7snPZAKulH5-z1Kau1lsw&s",

    //     links:[
    //     {
    //        label:"Home",
    //        url:"/"
    //     },
    //     {
    //         label:"Services",
    //         url:"/services"
    //     },
    //     {
    //         label:"Gallery",
    //         url:"/gallery"
    //     },
    //     {
    //         label:"About",
    //         url:"/about"
    //     },
    //     {
    //         label:"Contact Us",
    //         url:"/contact-us"
    //     },
    // ]
    // })
})



    





app.listen(process.env.PORT  | 4500,()=>{
    console.log("server started");
})