// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {

  'Test Home': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.home')
      .assert.containsText('h1', 'Caisse Area')
      .assert.elementPresent('.home  ')
      //
      // Click Location
      .click('button[href="/locations"]')
      .pause(100)
      .assert.urlContains('/locations')
      //
      // Click Products
      .url(devServer)
      .click('button[href="/products"]')
      .pause(100)
      .assert.urlContains('/products')
      .end()
  }
}
