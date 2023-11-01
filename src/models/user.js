const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  rol: [
    {
      type: Schema.Types.ObjectId,
      ref: "rol",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
