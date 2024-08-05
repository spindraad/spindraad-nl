export async function loader () {
  const sitemap = '<?xml version="1.0" encoding="UTF-8"?>' +
'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">' +
  '<url>' +
    '<loc>https://spindraad.nl/</loc>' +
    '<lastmod>2024-08-05</lastmod>' +
    '<changefreq>monthly</changefreq>' +
    '<priority>1.0</priority>' +
  '</url>' +
'</urlset>';

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Content-Length': String(Buffer.byteLength(sitemap)),
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
