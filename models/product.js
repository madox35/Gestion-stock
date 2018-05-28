var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProductSchema   = new Schema({
    nom:  String,
    date: { type: Date, default: Date.now },
    emprunte_par: String,
    disponibilite: Boolean,
    comments: [{ body: String, date: Date }]
});

module.exports = mongoose.model('Product', ProductSchema);