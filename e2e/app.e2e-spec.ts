import { AngularTourPage } from './app.po';

describe('angular-tour App', function() {
  let page: AngularTourPage;

  beforeEach(() => {
    page = new AngularTourPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
