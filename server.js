const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/',function(req,res){
    res.send('Backend server is live!')
})

app.get('/home',function(req,res){
    res.send('Welcome to my app')
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, function () {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;  

