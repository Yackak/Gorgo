import puppeteer from "puppeteer-core";
import chrome from "chrome-aws-lambda";

export const scrapeCoupang = async (keyword) => {
  try {
    const browser = await puppeteer.launch({
      executablePath: await chrome.executablePath,
      args: chrome.args,
      headless: true,
    });

    const page = await browser.newPage();
    await page.goto(`https://www.coupang.com/np/search?q=${keyword}`, {
      waitUntil: "domcontentloaded",
    });

    // 상품 정보 크롤링
    const products = await page.evaluate(() => {
      return [...document.querySelectorAll(".search-product")].map((el) => ({
        name: el.querySelector(".name")?.innerText || "상품명 없음",
        price: el.querySelector(".price-value")?.innerText || "가격 없음",
        rocketDelivery: !!el.querySelector("img[alt='로켓배송']"),
        reviewCount: el.querySelector(".rating-total-count")?.innerText || "0",
      }));
    });

    await browser.close();
    return products;
  } catch (error) {
    console.error("크롤링 오류:", error);
    return [];
  }
};
