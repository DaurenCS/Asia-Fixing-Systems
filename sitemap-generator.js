const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

const hostname = 'https://asiafix-pro.com'; // Replace with your website's URL

const routes = [
    { url: '/en', changefreq: 'daily', priority: 1.0 },
    { url: '/en/about', changefreq: 'weekly', priority: 0.8 },
    { url: '/en/contacts', changefreq: 'monthly', priority: 0.7 },
    { url: '/en/isolation-system', changefreq: 'weekly', priority: 0.8 },
    { url: '/en/isolation-system/products', changefreq: 'weekly', priority: 0.8 },
    { url: '/en/isolation-system/certificates', changefreq: 'monthly', priority: 0.7 },
    { url: '/en/isolation-system/technology', changefreq: 'weekly', priority: 0.8 },
    { url: '/en/installation-system', changefreq: 'weekly', priority: 0.8 },
    { url: '/en/installation-system/products', changefreq: 'weekly', priority: 0.8 },
    { url: '/en/installation-system/certificates', changefreq: 'monthly', priority: 0.7 },
    { url: '/en/installation-system/technology', changefreq: 'weekly', priority: 0.8 },
    // Repeat for other languages and routes
    { url: '/ru', changefreq: 'daily', priority: 1.0 },
    { url: '/ru/about', changefreq: 'weekly', priority: 0.8 },
    { url: '/ru/contacts', changefreq: 'monthly', priority: 0.7 },
    { url: '/ru/isolation-system', changefreq: 'weekly', priority: 0.8 },
    { url: '/ru/isolation-system/products', changefreq: 'weekly', priority: 0.8 },
    { url: '/ru/isolation-system/certificates', changefreq: 'monthly', priority: 0.7 },
    { url: '/ru/isolation-system/technology', changefreq: 'weekly', priority: 0.8 },
    { url: '/ru/installation-system', changefreq: 'weekly', priority: 0.8 },
    { url: '/ru/installation-system/products', changefreq: 'weekly', priority: 0.8 },
    { url: '/ru/installation-system/certificates', changefreq: 'monthly', priority: 0.7 },
    { url: '/ru/installation-system/technology', changefreq: 'weekly', priority: 0.8 },
];

(async () => {
    const sitemapStream = new SitemapStream({ hostname });

    const writeStream = createWriteStream(resolve('./public/sitemap.xml'));

    sitemapStream.pipe(writeStream);

    routes.forEach(route => sitemapStream.write(route));

    sitemapStream.end();

    await streamToPromise(sitemapStream);

    console.log('Sitemap generated!');
})();
