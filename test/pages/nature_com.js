const {expect} = require('chai');
const testHelper = require('./test-helper');

const Parser2 = require('../../app/parser2');

describe('nature_com', () => {

  let document, parser;

  beforeEach(() => {
    document = testHelper.getDocumetOfHtmlFile('test/pages/nature_com.html');
    parser = new Parser2(document, testHelper.getMockConsole());
  });

  it('#findArticles works', () => {

    const articles = parser.getArticles();

    expect(articles[0]).to.eql({
      title: 'First-ever picture of a black hole scoops US$3-million prize',
      link: '/articles/d41586-019-02659-5',
      "description": [
            "News",
            "05 September 2019",
            "First-ever picture of a black hole scoops US$3-million prize",
            "The Event Horizon Telescope team wins a Breakthrough Prize — one of six awards covering physics, the life sciences and mathematics.",
            "Zeeya Merali"
          ]

    });

  });

});
