'use strict'

module.exports = mongoose => {
    const ObjectId = mongoose.Schema.Types.ObjectId
    return mongoose.model('User', mongoose.Schema({
        owner_id: String,
        email: { type: String, unique: true, required: true },
        userName: { type: String, unique: true, required: true },
        userNameLowercase: { type: String, default: "" },
        realName: { type: String, default: "Not entered" },
        birthdate: { type: String, default: "1901-01-01" },
        age: { type: Number, default: 0 },
        gender: { type: String, default: "Not entered" },
        accountPhone: { type: String, unique: true, required: true },
        accountCountry: { type: String, default: "Not entered" },
        geoCity: { type: String, default: "Not entered" },
        geoState: { type: String, default: "Not entered" },
        geoCountry: { type: String, default: "Not entered" },
        geoLocationText: { type: String, default: "Not entered" },
        geoRegion: { type: String, default: "Not entered" },
        geoLat: { type: Number, default: 0 },
        geoLong: { type: Number, default: 0 },
        bio: { type: String, default: "" },
        active: { type: Boolean, default: true },
        referrer: [{ref: 'User', type: ObjectId}],
        scoreboardRole: [{ref: 'Role', type: ObjectId}],
    },{ timestamps: true }))
}
