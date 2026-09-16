import { resolve } from 'path';
import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

function cleanUrlsPlugin() {
  const pageMap = {
    '/': '/index.html',
    '/about': '/about.html',
    '/about-us': '/about.html',
    '/careers': '/careers.html',
    '/insights': '/insights.html',
    '/research-insights': '/insights.html',
    '/resources': '/insights.html',
    '/blog': '/blog.html',
    '/blog-detail': '/blog-detail.html',
    '/faq': '/faq.html',
    '/industries': '/industries.html',
    '/industries/digital-enterprises-scalable-platforms': '/industries.html',
    '/industries/education-learning-skill-development': '/industries.html',
    '/industries/consumer-products-retail-innovation': '/industries.html',
    '/industries/lifestyle-wellness-personal-care': '/industries.html',
    '/industries/healthcare-insurance-pharmaceutical': '/industries.html',
    '/industries/banking-investment': '/industries.html',
    '/industries/energy-commodities-industrial-supply': '/industries.html',
    '/industries/supply-chain-logistics': '/industries.html',
    '/contact': '/contact.html',
    '/entwy-uiux-design-residency': '/entwy-uiux-design-residency.html',
    '/resources/ui-ux-design-residency': '/entwy-uiux-design-residency.html',
    '/entwy-product-design-residency': '/entwy-product-design-residency.html',
    '/resources/product-design-residency': '/entwy-product-design-residency.html',
    '/product': '/product.html',
    '/products': '/product.html',
    '/products/huzzler': '/product.html',
    '/z01': '/z01.html',
    '/products/z01': '/z01.html',
    '/products/z01crew': '/z01.html',
    '/wiviy': '/wiviy.html',
    '/products/wiviy': '/wiviy.html',
    '/rentit': '/rentit.html',
    '/products/rentit': '/rentit.html',
    '/zuca': '/zuca.html',
    '/products/zuca': '/zuca.html',
    '/products/mungo': '/product.html',
    '/privacy-policy': '/privacy-policy.html',
    '/terms-and-conditions': '/terms-and-conditions.html',
    '/terms': '/terms-and-conditions.html',
  };

  return {
    name: 'vite-plugin-clean-urls',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url || '';
        const [pathname] = url.split('?');
        const cleanPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;

        let targetHtml = pageMap[cleanPath];
        if (!targetHtml && !cleanPath.includes('.') && cleanPath !== '/') {
          const possibleHtml = cleanPath + '.html';
          if (fs.existsSync(path.resolve(process.cwd(), '.' + possibleHtml))) {
            targetHtml = possibleHtml;
          }
        }

        if (targetHtml && targetHtml !== '/index.html') {
          const filePath = path.resolve(process.cwd(), '.' + targetHtml);
          if (fs.existsSync(filePath)) {
            try {
              let html = fs.readFileSync(filePath, 'utf-8');
              html = await server.transformIndexHtml(req.url, html);
              res.statusCode = 200;
              res.setHeader('Content-Type', 'text/html');
              return res.end(html);
            } catch (e) {
              return next(e);
            }
          }
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || '';
        const [pathname] = url.split('?');
        const cleanPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;

        let targetHtml = pageMap[cleanPath];
        if (!targetHtml && !cleanPath.includes('.') && cleanPath !== '/') {
          const possibleHtml = cleanPath + '.html';
          if (fs.existsSync(path.resolve(process.cwd(), 'dist' + possibleHtml))) {
            targetHtml = possibleHtml;
          }
        }

        if (targetHtml && targetHtml !== '/index.html') {
          const filePath = path.resolve(process.cwd(), 'dist' + targetHtml);
          if (fs.existsSync(filePath)) {
            const html = fs.readFileSync(filePath, 'utf-8');
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            return res.end(html);
          }
        }
        next();
      });
    },
    closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist');
      if (fs.existsSync(distDir)) {
        Object.entries(pageMap).forEach(([cleanPath, htmlFile]) => {
          if (cleanPath === '/') return;
          const srcHtml = path.join(distDir, htmlFile.replace(/^\//, ''));
          const targetDir = path.join(distDir, cleanPath.replace(/^\//, ''));
          if (fs.existsSync(srcHtml)) {
            if (!fs.existsSync(targetDir)) {
              fs.mkdirSync(targetDir, { recursive: true });
            }
            fs.copyFileSync(srcHtml, path.join(targetDir, 'index.html'));
          }
        });
      }
    }
  };
}

export default defineConfig({
  plugins: [cleanUrlsPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        about: resolve(process.cwd(), 'about.html'),
        careers: resolve(process.cwd(), 'careers.html'),
        insights: resolve(process.cwd(), 'insights.html'),
        blog: resolve(process.cwd(), 'blog.html'),
        blogDetail: resolve(process.cwd(), 'blog-detail.html'),
        faq: resolve(process.cwd(), 'faq.html'),
        industries: resolve(process.cwd(), 'industries.html'),
        contact: resolve(process.cwd(), 'contact.html'),
        residency: resolve(process.cwd(), 'entwy-uiux-design-residency.html'),
        productResidency: resolve(process.cwd(), 'entwy-product-design-residency.html'),
        product: resolve(process.cwd(), 'product.html'),
        z01: resolve(process.cwd(), 'z01.html'),
        wiviy: resolve(process.cwd(), 'wiviy.html'),
        rentit: resolve(process.cwd(), 'rentit.html'),
        zuca: resolve(process.cwd(), 'zuca.html'),
        privacyPolicy: resolve(process.cwd(), 'privacy-policy.html'),
        termsAndConditions: resolve(process.cwd(), 'terms-and-conditions.html'),
      },
    },
  },
});
