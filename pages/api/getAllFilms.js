import axios from "axios";
import { stringify } from "postcss";

import { nextCors } from "../../utils/cors";

export default async function handler(req, res) {
  // CORS middleware
  await nextCors(req, res);

  const parameter = req.query[0];

  const url = `${process.env.MDB_BASE_URL}${parameter}${process.env.MDB_API_KEY}`;

  try {
    const data = await axios.get(url);
    // console.log(data.data.results);
    res.send({ films: data.data.results });
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
}
