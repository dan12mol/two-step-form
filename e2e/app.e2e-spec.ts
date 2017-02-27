import { TwoStepFormPage } from './app.po';

describe('two-step-form App', () => {
  let page: TwoStepFormPage;

  beforeEach(() => {
    page = new TwoStepFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
