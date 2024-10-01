const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const fetch = require('node-fetch'); 

const app = express();
const port = 3000;


const ACCOUNT_SID = 'your_account_SID';
const AUTH_TOKEN = 'your _account_auth_tokken';
const TWILIO_PHONE_NUMBER = 'add a twilio phone number';


const client = new twilio(ACCOUNT_SID, AUTH_TOKEN);

app.use(cors());

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Welcome to the Heart Attack Alert System');
});


async function getAddressFromCoordinates(lat, lon) {
    try {
        const response = await fetch(`http://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
        const data = await response.json();
        return data.display_name || 'Unknown location';
    } catch (error) {
        console.error('Error fetching address:', error);
        return 'Error fetching address';
    }
}

app.post('/alert', async (req, res) => {
    const { latitude, longitude, phoneNumber } = req.body;

    if (!latitude || !longitude || !phoneNumber) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const address = await getAddressFromCoordinates(latitude, longitude);

        await client.messages.create({
            body: `Heart attack alert! Location: Latitude ${latitude}, Longitude ${longitude}, Address: ${address}`,
            from: TWILIO_PHONE_NUMBER,
            to: phoneNumber
        });
        res.json({ message: 'Alert received and SMS sent' });
    } catch (error) {
        console.error('Error sending SMS:', error);
        res.status(500).json({ message: 'Error sending SMS' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

