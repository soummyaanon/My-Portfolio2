import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const countFilePath = path.join(process.cwd(), 'data', 'visitorCount.json');

export async function GET() {
  try {
    console.log('GET request received');
    const data = await fs.readFile(countFilePath, 'utf8');
    const count = JSON.parse(data).count;
    console.log('Visitor count read successfully:', count);
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error reading visitor count:', error);
    return NextResponse.json({ error: 'Failed to read visitor count' }, { status: 500 });
  }
}

export async function POST() {
  try {
    console.log('POST request received');
    const data = await fs.readFile(countFilePath, 'utf8');
    const { count } = JSON.parse(data);
    const newCount = count + 1;
    await fs.writeFile(countFilePath, JSON.stringify({ count: newCount }));
    console.log('Visitor count updated successfully:', newCount);
    return NextResponse.json({ count: newCount });
  } catch (error) {
    console.error('Error updating visitor count:', error);
    return NextResponse.json({ error: 'Failed to update visitor count' }, { status: 500 });
  }
}