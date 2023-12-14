const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const {mongoose}=require('./mongoose.js');
const {Seance}=require('./models/seance.js')
app.use(bodyParser.json());

app.post('/add', async(req, res)=> {
    try {
        const { lieu, prix, dateSeance } = req.body; 

      
        const newSeance = new Seance({
            lieu,
            prix,
            dateSeance
        });

       
        const savedSeance = await newSeance.save();

        res.status(201).json(savedSeance); 
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
app.get('/getAll',async(req,res)=>{
    try {
        Seance.find({

          
    
        }).then((listSeance)=>{
            res.send(listSeance);
    
        });


    }catch(error) {
        res.status(400).json({ message: error.message });

    }

});
app.delete('/delete/:id',async(req,res)=>{

    try {
        const deletedSeance = await Seance.findByIdAndDelete(req.params.id);
        if (!deletedSeance) {
            return res.status(404).json({ message: 'Seance not found' });
        }

        res.json({ message: 'Seance deleted successfully' });
        

    }catch(error) {
        res.status(400).json({ message: error.message });

    }

});
app.put('/update/:id', async (req, res) => {
    try {
        const updatedSeance = await Seance.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true } // Return the updated document
        );

        if (!updatedSeance) {
            return res.status(404).json({ message: 'Seance not found' });
        }

        res.json({ message: 'Updated successfully', seance: updatedSeance });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
app.get('/getbyId/:id',async(req,res)=>{
    try {
        const id = req.params.id; 
       
        const seance = await Seance.findById(id);
        
        if (!seance) {
            return res.status(404).json({ message: ' seance not found' });
        }

        res.json({  seance });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

});



app.listen(3000,() =>{

    console.log("Server is listening on port 3000");


})
