import { $ } from "@wdio/globals";
import BasePage from "./basePage.js";
import { HOME_PAGE } from "../constants/homePageSelectors.js";

export class HomePage extends BasePage {
  get providerServicesButton() {
    return $(HOME_PAGE.PROVIDER_SERVICES.BUTTON);
  }

  get findCareProviders() {
    return $(HOME_PAGE.FIND_CARE_PROVIDER.BUTTON);
  }

  /**
   * Navigates to the provider search page
   * @returns {Promise<void>}
   */
  async findProviderService() {
    await this.providerServicesButton.waitForClickable();
    await this.providerServicesButton.click();
    await this.findCareProviders.waitForClickable();
    await this.findCareProviders.click();
  }
}

export default HomePage;
