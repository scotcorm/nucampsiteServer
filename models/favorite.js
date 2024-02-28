const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    campsites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campsite',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;

////////// First, the value for the user field should be a single ObjectId, not an array (do not surround the object with square brackets).
// Second, the value for the "ref" object property should exactly match the name of the model for the intended collection.
// If you look at the User schema in "models/user.js", you will find our user collection is controlled with a model called "User" (capital 'U').
