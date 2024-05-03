import { NextResponse } from "next/server";

const energyRegex = /Sum of electronic and thermal Free Energies=\s+([-\d.]+)/;

export async function POST(req: Request) {
  const form = await req.formData();
  const logFile = form.get("file") as File;

  if (!logFile) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const log = await logFile.text();
  const energyMatch = log.match(energyRegex);

  if (!energyMatch) {
    return NextResponse.json({ error: "No energy found" }, { status: 400 });
  }

  const energy = parseFloat(energyMatch[1]);
  return NextResponse.json({ energy: energy }, { status: 200 });
}
