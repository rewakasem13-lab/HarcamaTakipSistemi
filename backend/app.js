const express = require('express');
const cors = require('cors');
const harcamaRoutes = require('./src/routes/harcamaRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api', harcamaRoutes);

app.get('/', (req, res) => {
    res.send('Backend شغال 🚀');
});

app.listen(PORT, () => {
    console.log(`Server شغال: http://localhost:${PORT}`);
});


const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));