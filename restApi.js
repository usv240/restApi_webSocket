const express = require('express');
const app = express();

const PORT = 3000;
//Considering the initial number as 10
const number = 10;

// Post request for plus-one received 
    app.post('/plus-one', (req, res) => {
        // Checking if number is integer and add +1 to the number received.
        if (typeof number === 'number') {
            const result = number + 1;
            res.json({ result });
            console.log('In plus-one API');
        
            // setting up the interval of 5 seconds.
            const intervalId = setInterval(() => {
                axios.post('http://localhost:3000/plus-two', { number: result })
                    .then((response) => {
                        // Handle the response if needed
                        console.log('POST request successful:', response.data);
                    })
                    .catch((error) => {
                        console.error('Error while making the POST request:', error);
                    });
            }, 5000);
        } else {
            return res.status(400).json({ message: 'Invalid input. Expected a numeric value.' });
        }
    });
    
    // Listening on port 
    app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

