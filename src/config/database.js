import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connect = async () => {
    // mongoose.connect('mongodb://localhost/Twitter_Dev');
    mongoose.connect(process.env.ATLAS_URI);
}

export default connect;