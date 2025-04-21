class HomePage {
  get providerServicesBtn() {
    return $(
      ":nth-child(3) > div > .nav-menu-button.ds-u-font-size--base.ds-u-sans.ds-u-valign--bottom.ch-u-text-hover--none.ch-u-text-focus--none"
    );
  }
  get findProviderServiceBtn() {
    return $(
      ":nth-child(1) > :nth-child(2) > .ds-u-margin-bottom--1:nth-child(1)"
    );
  }

  async findProviderService() {
    const element = await $("h1 span");
    await expect(element).toHaveText("Welcome to Medicare");
    await this.providerServicesBtn.click();
    await this.findProviderServiceBtn.click();
  }
}

module.exports = new HomePage();
