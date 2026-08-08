require('dotenv').config();
const express = require('express');
const criaturasRoutes = require('./routes/criaturas');
const jefesRoutes = require('./routes/jefes');
const objetosRoutes = require('./routes/objetos');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/criaturas', criaturasRoutes);
app.use('/jefes', jefesRoutes);
app.use('/objetos', objetosRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});