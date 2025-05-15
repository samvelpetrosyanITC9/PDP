import { browser, expect } from "@wdio/globals";
import HomePage from "../pages/homePage.js";
import BasePage from "../pages/basePage.js";
import DoctorClinicians from "../pages/doctorClinicians.js";
import { PROVIDER_SEARCH } from "../constants/providerSearchSelectors.js";

describe("Medicare Provider Search Tests", () => {
  let page;
  let homePage;
  let doctorClinicians;

  before(async () => {
    // Initialize page objects
    page = new BasePage();
    homePage = new HomePage();
    doctorClinicians = new DoctorClinicians();
  });

  beforeEach(async () => {
    // Open the homepage before each test
    await page.open();
  });

  describe("Provider Search Flow", () => {
    it("should successfully navigate to providers & services and select Find Care Providers", async () => {
      // Step 1: Navigate to provider search
      await homePage.findProviderService();

      // Step 2: Validate provider search page elements
      const searchHeadline = await $(PROVIDER_SEARCH.HEADLINE);
      await expect(searchHeadline).toBeDisplayed();
      await expect(searchHeadline).toHaveText(
        "Find & compare providers near you."
      );
      const element = await $(PROVIDER_SEARCH.FINF_COMPARE_MESSAGE);
      await expect(element).toBeDisplayed();
      await expect(element).toHaveText("Find & compare providers near you.");
      await doctorClinicians.findDoctorClinicians();
      const findDoctorsMessage = await $(PROVIDER_SEARCH.FIND_DOCTORS_MESSAGE);
      await expect(findDoctorsMessage).toBeDisplayed();
      await expect(findDoctorsMessage).toHaveText(
        "Find doctors & clinicians near me"
      );
    });
  });
});
