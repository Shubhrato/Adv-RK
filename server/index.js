require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('Advocate Backend Server is Running');
});

// --- Contact Route ---
app.post('/api/contact', (req, res) => {
    const { name, email, phone, caseDetails } = req.body;

    if (!name || !email || !caseDetails) {
        return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
    }

    console.log('--- New Contact Inquiry ---');
    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}`);
    console.log(`Message: ${caseDetails}`);

    res.json({ success: true, message: 'Inquiry received successfully!' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
