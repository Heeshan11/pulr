import { NextResponse } from "next/server";

export async function GET() {
    const data = {
        applinks: {
            apps: [],
            details: [
                {
                    "appID": "DSAKBH8JLV.co.pulr.app",
                    "paths": ["*"]
                },
            ],
        },
    };

    return NextResponse.json(data, {
        headers: {
            "Content-Type": "application/json",
        },
    });
}
