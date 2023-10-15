const { Sequelize} = require('sequelize')
const {userSchemaInitialiser} = require("./schema/user_schema")
const {chatQueryInitialiser} = require("../db/Queries/chatQueries")

const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME
const DB_USERNAME = process.env.DB_USERNAME


const sequelize = new Sequelize(DB_NAME,DB_USERNAME,DB_PASS,{
    dialect: 'mysql',
    host:DB_HOST
})  

const dbconnect = async ()=>{
    sequelize.authenticate().then(()=>console.log("successfully connected")).catch((data)=>console.log(data));
    userSchemaInitialiser(sequelize)
    chatSchemaInitialiser(sequelize)
    messageSchemaInitialiser(sequelize)
    chatQueryInitialiser(sequelize)
}
module.exports= dbconnect
