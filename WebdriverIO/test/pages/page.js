const { browser } = require("@wdio/globals");

class Page {
  open() {
    return browser.url(`https://www.medicare.gov/`);
  }
}

module.exports = new Page();
