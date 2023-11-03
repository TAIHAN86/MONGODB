import express from 'express';

const app = express();

app.get('/ping',(req, res)=>{
    res.send('pong');
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log('server running on port ${port}')
})