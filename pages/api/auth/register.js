import bcrypt from "bcrypt";

import { connectToDatabase } from "../../../utils/mongodb";
import { nextCors } from "../../../utils/cors";

export default async function handler(req, res) {
  // connexion BD
  const { db } = await connectToDatabase();

  // CORS middleware
  await nextCors(req, res);

  const { email, username, password } = req.body;

  // searching existing email in DB
  const existingEmail = await db.collection("users").find({ email }).toArray();

  // if existing email
  if (existingEmail.length >= 1) {
    console.log("this user already exists");
    res.send({ status: "Error" });
  }

  // if no existing email
  if (existingEmail.length < 1) {
    console.log("new user in DB");

    // pwd hashing
    const hashPassword = await bcrypt.hash(password, 10);

    // save new user in DB
    const newUser = await db.collection("users").insertOne({
      email,
      username,
      password: hashPassword,
    });
  }

  res.status(200).send({ status: "Success" });
}
