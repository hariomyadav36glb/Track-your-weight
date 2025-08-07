import User from '../model/user.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

const generateToken = (userId)=> 
{
    return jwt.sign({id : userId},process.env.JWT_SECRET , {expiresIn :'7d'});
};

export const signup = async(req , res)=>{
    const {email , password} = req.body;
    try {
        const userExists = await User.findOne({email});
        if(userExists) return res.json({error : "Email already in use"})
        const hashedPassword = await bcrypt.hash(password ,10);
        const user = await User.create({email , password:hashedPassword });
        const token = generateToken(user._id);
        res.json({token}) ;
    } catch (error) {
        res.json({error : "signup failed"});
    }
};

export const login  = async(req , res)=>{

    const {email , password} = req.body;
    try {
        
        const user  = await User.findOne({email});
        if(!user) return res.json({error:"invalid credentials"});
        
        const isMatch = await bcrypt.compare(password , user.password)
        if(!isMatch) return res.json({error : "Invalid credentials"});
        const token = generateToken(user._id);
        res.json({token});
    } catch (error) {
        return res.json({error :'Login failed'});
    }

}