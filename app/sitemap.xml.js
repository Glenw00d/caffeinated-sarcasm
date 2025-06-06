export async function GET() {
  const baseUrl = 'https://caffeinated-sarcasm.vercel.app';

  const staticPages = [
    '',
    'https://www.redbubble.com/people/Sarkadib/shop?asc=u&ref=account-nav-dropdown',
    'https://www.teepublic.com/user/caffeinated-sarcasm-co',
    'https://www.etsy.com/shop/CaffeinatedSarcasmCo',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((page) => `
    <url>
      <loc>${page}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `)
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
