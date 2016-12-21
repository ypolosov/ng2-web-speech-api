import { Ng2WebSpeechApiPage } from './app.po';

describe('ng2-web-speech-api App', function() {
  let page: Ng2WebSpeechApiPage;

  beforeEach(() => {
    page = new Ng2WebSpeechApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
