import { Angular2hellowPage } from './app.po';

describe('angular2hellow App', () => {
  let page: Angular2hellowPage;

  beforeEach(() => {
    page = new Angular2hellowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
