import nc from "next-connect";
import bcrypt from "bcrypt";
import User from "../../../models/userModel";
import dbConnect from "../../../utils/dbConnect";
import { NextApiRequest, NextApiResponse } from "next";
import { signToken } from "../../../utils/auth";
const handler = nc();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
    });
    const user = await newUser.save();
    console.log(user);
    const token = signToken(user);
    res.status(201).send({
      token,
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

export default handler;
