const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            //TODO find mongoose email validation
        },
        thoughts: [],
        //TODO insert array of _id referencing thoughts
        friends: [],
        //TODO insert array of _id referencing users
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const User = model('User', userSchema);

module.exports = User;