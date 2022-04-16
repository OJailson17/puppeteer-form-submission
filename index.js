import puppeteer from 'puppeteer';

(async () => {
	const browser = await puppeteer.launch({
		headless: true,
		defaultViewport: null,
		args: ['--start-maximized'],
	});
	const page = await browser.newPage();
	await page.setUserAgent(
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.82 Safari/537.36',
	);
	await page.goto('https://jailsondeoliveira.vercel.app/');

	await page.type('#name', 'Automation Name');
	await page.type('#email', 'jaylsono11@gmail.com');
	await page.type('#subject', 'Automation Subject');
	await page.type('#message', 'Automation Message');

	const button = await page.$(
		'#contact > div > div.css-1mgaivn > form > button',
	);
	await button.evaluate(b => b.click());

	await page.waitForSelector('.chakra-alert', {
		visible: true,
	});

	await page.waitForTimeout(600);

	await page.screenshot({ path: 'response.png' });

	await browser.close();
})();
