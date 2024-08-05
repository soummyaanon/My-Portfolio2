import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const countFilePath = path.join(process.cwd(), 'data', 'visitorCount.json');

export async function GET() {
  try {
    const data = await fs.readFile(countFilePath, 'utf8');
    const count = JSON.parse(data).count;
    return NextResponse.json({ count });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read visitor count' }, { status: 500 });
  }
}

export async function POST() {
  try {
    const data = await fs.readFile(countFilePath, 'utf8');
    const { count } = JSON.parse(data);
    const newCount = count + 1;
    await fs.writeFile(countFilePath, JSON.stringify({ count: newCount }));
    return NextResponse.json({ count: newCount });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update visitor count' }, { status: 500 });
  }
}