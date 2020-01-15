const express = require('express');
const app = express();
const multer = require('multer');

app.use('/images/',express.static('./public/content/images'));//current dir is root
app.get('/', (req,res)=>{
    res.send('Hello');
});
// app.use(express.json())

// app.post('/api/image', async (req,res,next)=>{
//     try {
//         console.log(res.body)
//         throw new Error('ádasd');
//     }catch(ex){
//         next(ex)//call next() with arguments except for 'route' will skip any subsequent middlewares and route handlers invoke the error handler (if existed)
//     }
//     res.send('ok')
// },(err,req,res,next)=>{
//     console.log(err);
//     res.sendStatus(400)
// });
const upload = multer({
    dest: './public/content/images'
})

app.post('/api/image', upload.single('image') ,async (req,res,next)=>{
    console.log(req.file)
    console.log(req.body.image)

    res.send('ok')
},(err,req,res,next)=>{
    console.log(err);
    res.sendStatus(400)
});

app.listen(8080, ()=>{
    console.log('Running on port 8080');
})
