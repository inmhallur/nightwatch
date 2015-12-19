var data  = require('/usr/local/lib/node_modules/nightwatch/globals.js');
module.exports = {
  'demo test walmart' : function (client) {
    

    client
      .url('http://walmart.com/account')
      .waitForElementPresent('body', 2000);
  },

  'part two' : function(client) {
    //var data = client.globals;
    //console.log("Printing globals")
    //console.log(data)
    //console.log(client.globals.myVar)
    //console.log(client.globals.test)
    //console.log(client.globals.test.myVar)
    //console.log(client.globals)
    //console.log("Printing globals end")
    var button_id = '/html/body/div[2]/section/section[4]/div/div/div/div/div/div/div/form/div/button';
    var addToCart = '//*[@id="WMItemAddToCartBtn"]';
    client
      .pause(2000)
      .setValue('input[id=login-username]', data.username)
      .pause(1000)
      .setValue('input[id=login-password]',data.password)
      .useXpath()
      .click(button_id)
      .pause(5000)
      .useCss()
      .assert.containsText('h1', 'Welcome to your Walmart account!')
      .pause(3000)
      .waitForElementVisible('input[type=text]',5000)
      .assert.elementPresent('input[type=text]')
      .setValue('input[type=text]',[data.keywords.tv,client.Keys.ENTER])
      .pause(2000)
      //*[@id="tile-container"]/div[1]/div/div/h4/a
      .useXpath()
      .click('//*[@id="tile-container"]/div[1]/div/div/h4/a')
      .pause(5000)
      .assert.elementPresent('//*[@id="WMItemAddToCartBtn"]')
      .click('//*[@id="WMItemAddToCartBtn"]')
      .pause(5000)
      .assert.elementPresent('//*[@id="PACViewCartBtn"]')
      .click('//*[@id="PACViewCartBtn"]')
      .pause(2000)
      .waitForElementVisible('//*[@id="CartItemInfo"]',5000)
      .waitForElementPresent('//*[@id="CartItemInfo"]',5000)
      .assert.elementPresent('//*[@id="CartItemInfo"]')
      .pause(2000)

  },

  'part three': function(client) {
    var socksLink = '//*[@id="tile-container"]/ul/li[5]/div/a[1]/img';
    client
      .useCss()
      .setValue('input[type=text]',[data.keywords.socks,client.Keys.ENTER])
      .pause(2000)
      .useXpath()
      .click(socksLink)
      .pause(2000)
      .assert.elementPresent('//*[@id="WMItemAddToCartBtn"]')
      .click('//*[@id="WMItemAddToCartBtn"]')
      .pause(5000)
      .assert.elementPresent('//*[@id="PACViewCartBtn"]')
      .click('//*[@id="PACViewCartBtn"]')
      .pause(2000)
      .waitForElementVisible('//*[@id="CartItemInfo"]',5000)
      .waitForElementPresent('//*[@id="CartItemInfo"]',5000)
      .assert.elementPresent('//*[@id="CartItemInfo"]')
      .pause(2000)
  },

  'part four': function(client){
    var dvdLink = '//*[@id="tile-container"]/div[1]/div/div/h4/a';
    client
      .useCss()
      .setValue('input[type=text]',[data.keywords.dvd,client.Keys.ENTER])
      .pause(2000)
      .useXpath()
      .click(dvdLink)
      .pause(2000)
      .assert.elementPresent('//*[@id="WMItemAddToCartBtn"]')
      .click('//*[@id="WMItemAddToCartBtn"]')
      .pause(5000)
      .assert.elementPresent('//*[@id="PACViewCartBtn"]')
      .click('//*[@id="PACViewCartBtn"]')
      .pause(2000)
      .waitForElementVisible('//*[@id="CartItemInfo"]',5000)
      .waitForElementPresent('//*[@id="CartItemInfo"]',5000)
      .assert.elementPresent('//*[@id="CartItemInfo"]')
      .pause(2000)
  },

   'part five': function(client){
    var iPhoneLink = '//*[@id="tile-container"]/div[1]/div/div/h4/a';
    var phoneColor = '/html/body/div[2]/section/section[4]/div/div[2]/div[1]/div[5]/div[2]/div/div[2]/div/div[2]/div/div[1]/div/div/div/span[2]/label/span';
    client
      .useCss()
      .setValue('input[type=text]',[data.keywords.iPhone,client.Keys.ENTER])
      .pause(2000)
      .useXpath()
      .click(iPhoneLink)
      .pause(2000)
      .waitForElementVisible(phoneColor,5000)
      .waitForElementPresent(phoneColor,5000)
      .click(phoneColor)
      .pause(2000)
      .assert.elementPresent('//*[@id="WMItemAddToCartBtn"]')
      .click('//*[@id="WMItemAddToCartBtn"]')
      .pause(5000)
      .assert.elementPresent('//*[@id="PACViewCartBtn"]')
      .click('//*[@id="PACViewCartBtn"]')
      .pause(2000)
      .waitForElementVisible('//*[@id="CartItemInfo"]',5000)
      .waitForElementPresent('//*[@id="CartItemInfo"]',5000)
      .assert.elementPresent('//*[@id="CartItemInfo"]')
      .pause(2000)
    },

    'part six': function(client){
    var toysLink = '//*[@id="js-category-container"]/div[1]/div[6]/div/div[2]/ol/div/div/li[2]/div/a[1]/img';
    client
      .useCss()
      .setValue('input[type=text]',[data.keywords.toys,client.Keys.ENTER])
      .pause(2000)
      .useXpath()
      .click(toysLink)
      .pause(2000)
      .assert.elementPresent('//*[@id="WMItemAddToCartBtn"]')
      .click('//*[@id="WMItemAddToCartBtn"]')
      .pause(5000)
      .assert.elementPresent('//*[@id="PACViewCartBtn"]')
      .click('//*[@id="PACViewCartBtn"]')
      .pause(2000)
      .waitForElementVisible('//*[@id="CartItemInfo"]',5000)
      .waitForElementPresent('//*[@id="CartItemInfo"]',5000)
      .assert.elementPresent('//*[@id="CartItemInfo"]')
      .pause(2000)
      .end();
    }


};

