export async function GET() {
  const externalLinks = [
    'https://caffeinated-sarcasm.vercel.app',
    'https://www.redbubble.com/people/Sarkadib/shop?asc=u&ref=account-nav-dropdown',
    'https://www.teepublic.com/user/caffeinated-sarcasm-co',
    'https://www.etsy.com/shop/CaffeinatedSarcasmCo',
  ];

  // Biztonságos XML escape
  const escapeXml = (unsafe) =>
    unsafe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${externalLinks
    .map(
      (url) => `
    <url>
      <loc>${escapeXml(url)}</loc>
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
