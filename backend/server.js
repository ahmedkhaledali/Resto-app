const express =require('express')
const app = express()
const db = require('./config/db.js')
db();
const cors= require('cors')
app.use(cors())
const body=require('body-parser')
app.use(express.json())

const AdminRoutes=require('./Routes/adminRoutes')
const CommandeRoutes=require('./Routes/commandeRoutes')
const PlatRoutes=require('./Routes/platRoutes')
const UserRoutes=require('./Routes/userRoutes')
app.use("/app",AdminRoutes);
app.use("/app", CommandeRoutes);
app.use("/app", PlatRoutes);
app.use("/app", UserRoutes);
app.listen('5002',()=>{
    console.log('server run')
})