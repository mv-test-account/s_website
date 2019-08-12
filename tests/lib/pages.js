const homePage = require('../e2e/pages/homePage');
const portfolioPage = require('../e2e/pages/portfolioPage');
const contactPage = require('../e2e/pages/contactPage');
const careerPage = require('../e2e/pages/careersPage');
const blogPage = require('../e2e/pages/blogPage');
const aboutPage = require('../e2e/pages/aboutPage');
const pageHelper = require('../e2e/pages/pageHelper');

const   home = new homePage();
const   portfolio = new portfolioPage();
const   contact = new contactPage();
const   career = new careerPage();
const   blog = new blogPage();
const   about = new aboutPage();
const   helper = new pageHelper();

module.exports = {
    home,
    portfolio,
    contact,
    career,
    blog,
    about,
    helper
};