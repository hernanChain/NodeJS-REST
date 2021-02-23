import { allowedNodeEnvironmentFlags } from "process";

import dotenv from 'dotenv'
dotenv.config();

export default{
    MONGO_DATABASE : process.env.MONGO_DATABASE || 'db_name',
    MONGO_USER: process.env.MONGO_USER ||"bd_user",
    MONGO_PASSWORD: process.env.MONGO_PASSWORD ||"db_user_password",
    MONGO_HOST: process.env.MONGO_HOST ||'db_host',
    APP_PORT: process.env.PORT || 3000
}