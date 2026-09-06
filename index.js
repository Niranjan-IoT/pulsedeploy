const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
res.send('Welcome to PulseDeploy');
});

app.get('/health', (req, res) => {
res.json({ status: 'UP' });
});

app.get('/version', (req, res) => {
res.json({ version: '1.0.0' });
});

if (require.main === module) {
app.listen(PORT, () => {
console.log(`PulseDeploy app running on port ${PORT}`);
});
}

module.exports = app;
