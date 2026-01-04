const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const bcrypt = require("bcryptjs");

const app = express();

/* =======================
   MIDDLEWARE
======================= */
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

/* =======================
   MONGODB
======================= */
mongoose.connect("mongodb://127.0.0.1:27017/ugt", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB conectado"))
.catch(err => console.error("❌ Error MongoDB:", err));

/* =======================
   MODELOS
======================= */
const Denuncia = require("./models/Denuncia");
const User = require("./models/User");

/* =======================
   RUTAS API
======================= */

// Crear denuncia
app.post("/api/denuncia", async (req, res) => {
    try {
        const denuncia = new Denuncia({
            titulo: req.body.titulo,
            mensaje: req.body.mensaje
        });

        await denuncia.save();
        res.json({ ok: true });
    } catch (err) {
        res.sendStatus(500);
    }
});

// Login
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.sendStatus(401);

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.sendStatus(401);

    res.json({ rol: user.rol });
});

// Listar denuncias (admin)
app.get("/api/denuncias", async (req, res) => {
    const denuncias = await Denuncia.find().sort({ fecha: -1 });
    res.json(denuncias);
});

/* =======================
   SERVIDOR
======================= */
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor activo en http://localhost:${PORT}`);
});
