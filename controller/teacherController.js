const Teacher=require('../models/teacher');


const Inputteacher= async (req, res) => {
    const{name,email,num}=req.body;
    try{
    const teacher=await Teacher.create({
        name,email,num
    });
    res.status(201).json(teacher);
} catch (error) {
  console.error('Error creating user info:', error);
  res.status(500).json({ error: 'Internal server error' });
}
};

const findteacher = async (req, res) => {
    

    try {
        
        const getUser = await Teacher.findAll();

        if (!getUser || getUser.length === 0) {
            return res.status(404).json({ error: 'getUser not found.' });
        }

        res.json(getUser);
    } catch (error) {
        console.error('Error finding prescriptions:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports={Inputteacher,findteacher};