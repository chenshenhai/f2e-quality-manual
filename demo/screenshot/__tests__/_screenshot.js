const path = require('path');
const http = require('http');
const fs = require('fs');
const puppeteer = require('puppeteer');
const serveHandler = require('serve-handler');
const jimp = require('jimp');
const pixelmatch = require('pixelmatch');

const port = 3001;
const width = 400;
const height = 200;
const screenshotPicPath = path.join(__dirname, 'snapshot', 'page.png');

async function main() {
  const server = http.createServer((req, res) => serveHandler(req, res, {
    public: path.join(__dirname, '..', 'src'),
  }));
  server.listen(port, async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport( { width: width, height: height } );
    await page.goto(`http://127.0.0.1:${port}`);
    await page.screenshot({path: screenshotPicPath});
    await browser.close();
    server.close();
  });
  server.on('SIGINT', () => process.exit(1) );
}
main();



async function diffScreen() {
  const server = http.createServer((req, res) => serveHandler(req, res, {
    public: path.join(__dirname, '..', 'src'),
  }));
  server.listen(port, async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport( { width: width, height: height } );
    await page.goto(`http://127.0.0.1:${port}`);

    let actual = (await jimp.read(await page.screenshot())).scale(1).quality(100).bitmap;
    let expected = (await jimp.read(fs.readFileSync(screenshotPicPath))).bitmap;
    let diff = actual;
    let numFailedPixels = pixelmatch(expected.data, actual.data, diff.data, actual.width, actual.height);

    console.log('numFailedPixels  ===', numFailedPixels);

    await browser.close();
    server.close();
  });
  server.on('SIGINT', () => process.exit(1) );
}
diffScreen();

