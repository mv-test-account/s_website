let EC = protractor.ExpectedConditions;
const menuItems ={
    portfolio: $$(".nav-links li").get(0),
    careers: $$(".nav-links li").get(1),
    about: $$(".nav-links li").get(2),
    "blog.salsitasoft": $$(".nav-links li").get(3)
};


const elements = {
    buttonGetInTouch : $('a[class*=get-in-touch]')
};

let HomePage = function (){
    this.getElements = elements;
    this.getMenuItems = menuItems;
};
module.exports = new HomePage();