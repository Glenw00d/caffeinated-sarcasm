import fs from 'fs';
import path from 'path';

export async function GET() {
  const designsDir = path.join(process.cwd(), 'public', 'designs');
  const files = fs.readdirSync(designsDir);
  const imageFiles = files.filter(file =>
    /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
  );

  const imagePaths = imageFiles.map(file => `/designs/${file}`);

  return new Response(JSON.stringify(imagePaths), {
    headers: { 'Content-Type': 'application/json' },
  });
}
