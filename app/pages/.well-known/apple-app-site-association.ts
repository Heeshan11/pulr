import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.join(process.cwd(), "public/.well-known/apple-app-site-association");
    const fileContent = fs.readFileSync(filePath, "utf8");

    // FORCE JSON content-type
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(fileContent);
  } catch (err) {
    res.status(500).json({ error: "Cannot read AASA file" });
  }
}
