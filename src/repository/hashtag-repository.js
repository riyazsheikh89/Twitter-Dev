import Hashtag from '../models/hashtags.js';

class HashtagRepository {

    async create(data) {
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id) {
        try {
            const tag = Hashtag.findById(id);
            return tag;
        } catch (error) {
            console.log(error)
        }
    }

    async bulkCreate(data) {
        try {
            const tag = await Hashtag.insertMany(data);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id) {
        try {
            const response  = Hashtag.findByIdAndRemove(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async findByName(titleList) {
        try {
            // titleList is an array and find() returns all the hashtags that mathces with the title 
            const tags = await Hashtag.find({ title: titleList });
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
}

export default HashtagRepository;