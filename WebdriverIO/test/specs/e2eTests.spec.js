const { browser } = require("@wdio/globals");

const HomePage = require("../pages/homePage");
const Page = require("../pages/page");
const DoctorClinicians = require("../pages/doctorClinicians");

describe("Test search provider functionality", () => {
  it("Find provider ", async () => {
    Page.open();
    HomePage.findProviderService();
    DoctorClinicians.findDoctorClinicians();
  });
});
