const mongoose = require("mongoose");

const DenunciaSchema = new mongoose.Schema({
    titulo: String,
    mensaje: String,
    fecha: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Denuncia", DenunciaSchema);
