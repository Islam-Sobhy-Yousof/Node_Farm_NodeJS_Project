/*
- creating simple server
*/
const http = require('http');
const fs = require('fs');
const url = require('url');

const replaceTemplate = require('./modules/replaceTemplate');
//fetching the data before starting the server
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const templateOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const templateProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);
const templateCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
const dataObj = JSON.parse(data);
//creating a server with simple request
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  //template overview
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, {
      'Content-type': 'text/html',
    });
    const cardsHtml = dataObj.map((ele) => replaceTemplate(templateCard, ele));
    const output = templateOverview.replace(
      /{%PRODUCT_CARD%}/g,
      cardsHtml.join('')
    );
    res.end(output);

    //template product
  } else if (pathname === '/product') {
    res.writeHead(200, {
      'Content-type': 'text/html',
    });
    const productId = query.id;
    const output = replaceTemplate(templateProduct, dataObj[productId]);
    res.end(output);

    //API
  } else if (pathname === '/api') {
    //want to read the file which have some json in it

    //using the variable __dirname to get the parent dir path

    res.end(data);
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1>Page Note Found</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Server is Listening 🌍');
});
