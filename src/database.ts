import mongoose from 'mongoose';

class SwsDatabase {

  constructor() {}

  init() {
    console.log('MONGODB_URI is', process.env.MONGODB_URI);
    mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/sws_db',
      // {
      //   useUnifiedTopology: true,
      //   useNewUrlParser: true
      // },
      (error) => {
        if (error) {
          console.log('Error while trying to connect to Mongodb with result:', error);
          // throw error
        } else {
          console.log('Successfully connected to Mongodb');
        }
      }
    );
  }
}

export default new SwsDatabase();