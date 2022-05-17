const express = require('express');
const bd = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const cors = require('cors');
const { db, apiCaller } = require('./Config');


const app = express();

dotenv.config();

app.use(morgan('dev'));
app.use(cors());
app.use(bd.urlencoded({extended : false}));
app.use(bd.json());


const PORT = process.env.PORT || 5000 ;
const KEY = process.env.API_KEY ;

app.post('/getimages' , async (req,res) =>{
    try {
        const { q , orientation , page , category } = req.body;
        let query = '';
        const queryList = q.split(' ');
        queryList.forEach(elem => {
            query += '+'+elem
        });
        //orientation and all other params left to integrate in URL 
        const URL = `https://pixabay.com/api/?key=${KEY}&q=${query}&orientation=${orientation}&page=${page}&category=${category}`
        const data = await apiCaller(URL);
        if(data.totalHits > 0){
            res.json({
                note : "SUCCESS",
                message : "Images Fetched successfully",
                data,
            });
        }else{
            res.status(200).json({
                note : "FAILED" ,
                message : "Cannot find images as per your requests !",
                data
            })
        }
    } catch (error) {
        res.status(400).json({
            note : "FAILED" ,
            message : "Something wrong with the request , please try again !",
        })
    }
    
})

app.get('/getimagebyid/:id' , async (req,res) =>{
    try { 
        const id = req.params.id ;
        console.log(id)
        const URL = `https://pixabay.com/api/?key=${KEY}&id=${id}`
        const data = await apiCaller(URL);
        if(data.totalHits > 0){
            res.json({
                note : "SUCCESS",
                message : "Images Fetched successfully",
                data,
            });
        }else{
            res.status(504).json({
                note : "FAILED" ,
                message : "Cannot find images as per your requests !",
                data
            })
        }
    } catch (error) {
        res.status(400).json({
            note : "FAILED" ,
            message : error.message
        })
    }
})

app.get('/' , (req,res) =>{
    apiCaller();
    res.send('Hello Front Page');
});

app.listen(PORT , () =>{
console.log(`Port running on localhost ${`${PORT}`.bold.yellow}`);
});