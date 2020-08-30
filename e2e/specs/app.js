import {
  getHeaderTitle,
  clickPopularityBtn,
  clickReleaseDateBtn,
  clickVoteCountBtn,
  getPopularityBtnValue,
  getReleaseDateBtnValue,
  getVoteCountBtnValue,
  clickMovieCard
} from "../pageObjects/app";
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
      await getPopularityBtnValue()
    ).toBe('popularity.');

    expect(
      await clickPopularityBtn()
    );
  });

  it("should sorted by release date", async () => {
    expect(
      await getReleaseDateBtnValue()
    ).toBe('release_date.')

    expect(
      await clickReleaseDateBtn()
    );
  });

  it("should sorted by vote count", async () => {
    expect(
      await getVoteCountBtnValue()
    ).toBe('vote_count.')

    expect(
      await clickVoteCountBtn()
    );
  });

  it("should go to details movie page", async () => {
    expect(
      await clickMovieCard()
    )
    expect(
      page.url()
    ).toBe('http://localhost:3000/movie/605116');
  });
});
