import { browser } from "@wdio/globals";

export class BasePage {
  /**
   * Opens a URL in the browser
   * @param {string} [url] - Optional URL to open. If not provided, defaults to Medicare.gov
   * @returns {Promise<void>}
   */
  open(url = "https://www.medicare.gov/") {
    return browser.url(url);
  }
}

export default BasePage;
