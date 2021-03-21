'use strict'

module.exports = mongoose => {
    const ObjectId = mongoose.Schema.Types.ObjectId
    return mongoose.model('Role', mongoose.Schema({
        name: { type: String, default: "" },
        rolePermissions: [{ref: 'Rolepermission', type: ObjectId}],
    },{ timestamps: true }))
}