import axios from "axios";

import { nextCors } from "../../utils/cors";
import requests from "../../utils/movieRequests";

export default async function handler(req, res) {
  // CORS middleware
  await nextCors(req, res);

  const index = req.query[0];

  const url = requests[index];

  try {
    const data = await axios.get(url);
    // console.log(data.data.results);
    res.send({ films: data.data.results });
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
}
