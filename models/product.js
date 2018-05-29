var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProductSchema   = new Schema({
    nom:  String,
    reference: String,
    photo: String,
    date: {type:Date, default: Date.now},
    emprunte_par: String,
    localisation: String,
    estDispo: Boolean,
    caution: Number,
    debut_emprunt: Date,
    fin_emprunt: Date
});

module.exports = mongoose.model('Product', ProductSchema);