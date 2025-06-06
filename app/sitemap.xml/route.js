export async function GET() {
  const baseUrl = 'https://caffeinated-sarcasm.vercel.app';

  const internalRoutes = [
    '',            // főoldal
    'redbubble',   // saját belső oldal
    'teepublic',   // saját belső oldal
    'etsy'         // saját belső oldal
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${internalRoutes
    .map(
      (path) => `
    <url>
      <loc>${baseUrl}/${path}</loc>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
