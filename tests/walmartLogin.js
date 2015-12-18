module.exports = {
  'demo test walmart' : function (client) {
    client
      .url('http://walmart.com/account')
      .waitForElementPresent('body', 2000);
  },

  'part two' : function(client) {
    var button_id = '/html/body/div[2]/section/section[4]/div/div/div/div/div/div/div/form/div/button';
    client
      .pause(2000)
      .setValue('input[id=login-username]', 'snehasaran700@gmail.com')
      .pause(1000)
      .setValue('input[id=login-password]','sneha123')
      .useXpath()
      .click(button_id)
      .pause(5000)
      .useCss()
      .assert.containsText('h1', 'Welcome to your Walmart account!')
      .pause(3000)
      .waitForElementVisible('input[type=text]',5000)
      .assert.elementPresent('input[type=text]')
      .setValue('input[type=text]',['tv',client.Keys.ENTER])
      .pause(2000)
      .assert.containsText('href','/ip/SCEPTRE-X322BV-HDR-32-LED-Class-720P-HDTV-with-ultra-slim-metal-brush-bezel-60Hz/25059351')
      .useXpath()
      .click('//*[@id="tile-container"]/div[1]/div/div/h4/a')

      .end();
  }
};




/*module.exports = function (browser, url) {
  // body...
  return browser
  .url("https://www.walmart.com/account")
  .waitForElementVisible('body',1000)
  .setValue('input[name="login-username"]','snehasaran700@gmail.com')
  .setValue('input[name="login-password"]','sneha123')
  .click('input[type="submit"]')
  .assert.title('Welcome to your Walmart account!')
  .pause(2000)
  .end()
};*/




/*module.exports = {
"Walmart Login page" : function(browser){
browser
.url("https://www.walmart.com/account")
.waitForElementVisible('body',5000)
.assert.elementPresent()
}
};


module.exports = {
  'navigate to login page' : function (client) {
    client
      .url('http://walmart.com/login')
      .waitForElementPresent('body', 2000);
  },

  'part two' : function(client) {
    client
      .setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
      .pause(2000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};







module.exports = function(client) {
  return {
    load: function () {
      return client.url('https://walmart.com/login');
    },
    setEmail: function(email) {
      return client.setValue('#email', email);
    },
    setPassword: function(password) {
      return client.setValue('#password, email);
    }
}
*/