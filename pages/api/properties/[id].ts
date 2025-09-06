// pages/api/properties/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { Property, properties } from "../../../lib/properties";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Property | { message: string }>
) {
  const { id } = req.query;
  const propertyId = Array.isArray(id) ? id[0] : id; 

  if (req.method === "GET") {
    const property = properties.find((p) => p.id === propertyId);

    if (property) {
      res.status(200).json(property);
    } else {
      res.status(404).json({ message: "Property not found" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
