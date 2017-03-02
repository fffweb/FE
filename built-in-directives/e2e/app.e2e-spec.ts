import { BuiltInDirectivesPage } from './app.po';

describe('built-in-directives App', () => {
  let page: BuiltInDirectivesPage;

  beforeEach(() => {
    page = new BuiltInDirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
