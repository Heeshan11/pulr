import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Path to your AASA file in public/.well-known/
    const filePath = path.join(process.cwd(), "public/.well-known/apple-app-site-association");

    // Read file content
    const fileContent = fs.readFileSync(filePath, "utf8");

    // Force JSON content type
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(fileContent);
  } catch (error) {
    res.status(500).json({ error: "Cannot read AASA file" });
  }
}
