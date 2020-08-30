import { load, getTitle } from "../pageObjects/index";

describe("Discovery Movie", () => {
  it("should be titled 'Discovery Movie'", async () => {
    await load();
    expect(await getTitle()).toBe("Discovery Movie");
  });
});
