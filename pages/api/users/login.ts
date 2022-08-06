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
    const user = await User.findOne({ email: req.body.email });
    const hashPassword = await bcrypt.compare(req.body.password, user.password);

    if (user && hashPassword) {
      const token = signToken(user);
      res.status(201).send({
        token,
        id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(401).send({ message: "Invalid email or password" });
    }
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

export default handler;
