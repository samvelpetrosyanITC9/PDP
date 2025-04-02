class DoctorClinicians {
  get doctorsClinicians() {
    return $(
      "mat-card#searchMenuContainer.mat-card.mat-focus-indicator.ProviderSearchMenu > ccxp-provider-search-menu-options.ProviderSearchMenuListing:nth-child(1) > div:nth-child(2)"
    );
  }

  async findDoctorClinicians() {
    const element = await $(
      ".ProviderSearchLanding__splash-headline.mat-headline-4.mat-display-1"
    );
    await expect(element).toHaveText("Find & compare providers near you.");
    await this.doctorsClinicians.click();
  }
}

module.exports = new DoctorClinicians();
