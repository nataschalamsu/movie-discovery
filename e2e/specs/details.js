import { load } from "../pageObjects/details";

import {
  getHeaderTitle,
  clickBackToHome,
  clickLink
} from '../pageObjects/details';

describe("Movie Details Page", () => {
  beforeEach(async () => {
    await load();
  });

  it("should show the correct movie title", async () => {
    expect(await getHeaderTitle()).toBe("project power");
  });

  it("should go to movie homepage", async () => {
    expect(
      await clickLink()
    )

    expect(
      page.url()
    ).toBe('https://www.netflix.com/id-en/title/80204465');
  });

  it("should go back to home", async () => {
    expect(
      await clickBackToHome()
    );

    expect(
      page.url()
    ).toBe('http://localhost:3000/');
  });
});