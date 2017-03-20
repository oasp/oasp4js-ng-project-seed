import { Oasp4jsNgCliProjectSeedPage } from './app.po';

describe('oasp4js-ng-cli-project-seed App', () => {
  let page: Oasp4jsNgCliProjectSeedPage;

  beforeEach(() => {
    page = new Oasp4jsNgCliProjectSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
