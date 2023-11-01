const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rolSchema = new Schema({
  profecion: String,
  consultorio: String,
  sede: String,
  sexo: String,
  edad: String,
  paciente: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("rol", rolSchema);
