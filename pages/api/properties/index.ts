import type { NextApiRequest, NextApiResponse } from "next";
import { Property, properties } from "../../../lib/properties";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Property[] | { message: string }>
) {
  if (req.method === "GET") {
    res.status(200).json(properties);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}