const puppeteer = require('puppeteer');

async function run() {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://www.traversymedia.com');

	await page.screenshot({ path: 'test.pgn' };

	await browser.FileChooser();
}

run();