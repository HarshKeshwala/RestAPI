const mongoose = require('mongoose');
//Stat Model
const StatsSchema = mongoose.Schema({
        asset_id: String,
        asset_type: String,
        created_at: Date,
        schema_version: Number,
        stat: String,
        updated_at: Date,
        value: Number,
        date: Date,
        latest: Boolean,
        softdelete: Boolean
})

module.exports = mongoose.model('Stats', StatsSchema);