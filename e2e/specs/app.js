import { getHeaderTitle, clickPopularityBtn } from "../pageObjects/app";
import { load } from "../pageObjects/index";

describe("Discovery Movie", () => {
  beforeEach(async () => {
    await load();
  });

  it("should show the correct header title", async () => {
    expect(await getHeaderTitle()).toBe("discovery movie");
  });

  it("should sorted by popularity", async () => {
    expect(
      await clickPopularityBtn()
    );
  });
});
