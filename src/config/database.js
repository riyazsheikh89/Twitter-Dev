import mongoose from 'mongoose';

const connect = async () => {
    mongoose.connect('mongodb://localhost/Twitter_Dev');
}

export default connect;