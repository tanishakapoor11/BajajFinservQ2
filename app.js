const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const operationCode = "1";
const result = {};
const myDOB = '11102002';

app.get('/api', (req,res) =>{
    const user_id = `tanisha_kapoor_${myDOB}`;
    const response = {
        operation_code: operationCode,
        user_id: user_id,
        is_success: true,
    };
    res.status(200).json(response);
});

app.post('/api', (req,res)=>{
    try {
        const { user_id, college_email, college_roll_number, numbers, alphabets } = req.body;

        //Highest Alphabet
        const highestAlphabet = alphabets.reduce((a,b) => (a>b ? a:b));

        result.is_succes= true;
        result.user_id = `tanisha_kapoor_${myDOB}`;
        result.college_email = college_email;
        result.college_roll_number = college_roll_number;
        result.numbers = numbers;
        result.alphabets = alphabets;
        result.highest_alphabet = highestAlphabet;

        res.status(200).json(result);
    } catch(error){
        res.status(400).json({ is_success: false, message: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
