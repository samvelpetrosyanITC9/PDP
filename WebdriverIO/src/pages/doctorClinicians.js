import { $ } from "@wdio/globals";
import BasePage from "./basePage.js";
import { PROVIDER_SEARCH } from "../constants/providerSearchSelectors.js";

class DoctorClinicians extends BasePage {
  get doctorsClinicians() {
    return $(PROVIDER_SEARCH.DOCTOR_CLINICIANS);
  }
  
  /**
   * Navigates to the provider find page
   * @returns {Promise<void>}
   */
  async findDoctorClinicians() {
    await this.doctorsClinicians.click();
  }
}

export default DoctorClinicians;
