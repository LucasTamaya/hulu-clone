import bcrypt from "bcrypt";

import { connectToDatabase } from "../../../utils/mongodb";
import { nextCors } from "../../../utils/cors";

export default async function handler(req, res) {
  // connexion BD
  const { db } = await connectToDatabase();

  // CORS middleware
  await nextCors(req, res);

  const { email, password } = req.body;

  console.log(email, password);

  //   searching email in DB
  const existingEmail = await db.collection("users").find({ email }).toArray();

  // if email incorrect
  if (existingEmail.length < 1) {
    console.log("can't find user");
    res.send({ status: "Error" });
  }

  // if email correct
  if (existingEmail.length >= 1) {
    console.log("user found");

    // pwd verification
    const isMatch = await bcrypt.compare(password, existingEmail[0].password);

    // if err with pwd
    if (!isMatch) {
      console.log("incorrect pwd");
      return res.send({ status: "Error" });
    }

    // if no err with pwd
    if (isMatch) {
      return res.status(200).send({ status: "Success" });
    }
  }
}
