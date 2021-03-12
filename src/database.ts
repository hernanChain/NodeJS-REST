import mongoose, { ConnectionOptions } from "mongoose";
import config from "./config";

(async () => {
  try {
    mongoose.set("useCreateIndex", true);
    const options: ConnectionOptions = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    };
    // await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, options);
    await mongoose.connect(
      `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@apirest.plgok.mongodb.net/${config.MONGO_DATABASE}?retryWrites=true&w=majority`,
      options
    );
    console.log("Database is now!");
  } catch (error) {
    console.log(error);
  }
})();
