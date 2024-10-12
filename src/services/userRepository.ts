import { User } from "../models/usersModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function register(
  nom: string,
  cognom: string,
  edat: number,
  email: string,
  password: string
) {

  const user = await User.findOne({ email});
  if(user) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    nom,
    cognom,
    edat,
    email,
    password: hashedPassword,
  });

  return await newUser.save();
}

export async function login(email: string, password: string) {
  const user = await User.findOne({ email });
  if (!user ) {
    throw new Error("User doesn't exist or invalid");
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    throw new Error("Passwords doesn't match");
  }
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });
  //TODO no devolver todo el user solo el token
  return { token, user };
}


//TODO logout
export async function logout () {}