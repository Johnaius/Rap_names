const { response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Nick PapaGiorio',
        'location': 'London, England',
    },
    'ryze hendricks':{
        'age': 29,
        'birthName': 'Slava Ukraine',
        'location': 'Buffalo, New York',
    },
    'dylan':{
        'age': 29,
        'birthName': 'Dylan',
        'location': 'Dylan',
        }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res)=>{
    const rappersName= req.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        res.json(rappers[rappersName])
    }else{
        res.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The Server is running on port ${PORT}. You better go catch it!`)
})