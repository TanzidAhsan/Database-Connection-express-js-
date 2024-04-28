const User=require('../models/user');


const InputUser= async (req, res) => {
    const{name,email,designation,address}=req.body;
    try{
    const user=await User.create({
        name,email,designation,address
    });
    res.status(201).json(user);
} catch (error) {
  console.error('Error creating user info:', error);
  res.status(500).json({ error: 'Internal server error' });
}
};

const findUser = async (req, res) => {
    

    try {
        
        const getUser = await User.findAll();

        if (!getUser || getUser.length === 0) {
            return res.status(404).json({ error: 'getUser not found.' });
        }

        res.json(getUser);
    } catch (error) {
        console.error('Error finding prescriptions:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports={InputUser,findUser};