let EC = protractor.ExpectedConditions;
const menuItems ={
    portfolio: $$(".nav-links li").get(0),
    careers: $$(".nav-links li").get(1),
    about: $$(".nav-links li").get(2),
    "blog.salsitasoft": $$(".nav-links li").get(3)
};


const elements = {
    buttonGetInTouch : $('a[class*=get-in-touch]'),
    iconSalsita : $('header .salsita'),
    buttonFreeConsult : $('.container a[class=button]'),
    title : 'Salsita Software – Designing and Developing Web & Mobile Apps',
    textHeading : $('h1[class=heading-sequential]'),
    heading : 'We build exceptional web\nand mobile applications.'
};

let HomePage = function (){
    this.getElements = elements;
    this.getMenuItems = menuItems;
    this.get = ()=>{
        browser.get('https://www.salsitasoft.com/');
    };

    // this.waitOnButton= ()=> {
    //     console.log(elements.buttonFreeConsult.isPresent())
    //     if (elements.buttonFreeConsult.isPresent()) {
    //         browser.wait(EC.elementToBeClickable(elements.buttonFreeConsult), 5000, 'button get free consult was not displayed');
    //         return elements.buttonFreeConsult;
    //     }
    // };
    this.waitOnMainText =()=>{
        browser.wait(EC.presenceOf($('div[class=logo-strip-container]')));
    };
};
module.exports = HomePage;