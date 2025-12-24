const mongoose = require("mongoose")

const wishlistSchema = new mongoose.Schema({
    
        title : {type : String},
        discount: {type : String},
        discountedPrice : {type : Number},
        originalPrice : {type : Number},
        rating:  {type : Number},
        Benefits : {type : Array},
        productDetails : {type : String},
         containsWeight : {type : Array},
        containsCal : {type : Array},
        img_url: {type : String},
        premiumPrice : {type : String},
        section : {type : String},
      
}, { versionKey : false })

const WishlistModel = mongoose.model("wishlists", wishlistSchema);

module.exports = WishlistModel;