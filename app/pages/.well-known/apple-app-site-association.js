export default function handler(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({
        applinks: {
            apps: [],
            details: [
                {
                    "appID": "DSAKBH8JLV.co.pulr.app",
                    paths: ["*"]
                }
            ]
        }
    });
}
