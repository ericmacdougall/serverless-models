'use strict'

module.exports = mongoose => {
    const ObjectId = mongoose.Schema.Types.ObjectId
    return mongoose.model('Rolepermission', mongoose.Schema({
        name: { type: String, default: "" }
    },{ timestamps: true }))
}