var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProductSchema   = new Schema({
    nom:  String,
    date: { type: Date, default: Date.now },
    emprunte_par: String,
    comments: String
});

module.exports = mongoose.model('Product', ProductSchema);