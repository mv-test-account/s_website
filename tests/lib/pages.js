

const homePage = require('../e2e/homePage');
const portfolioPage = require('../e2e/portfolioPage');
const contactPage = require('../e2e/contactPage');
const careerPage = require('../e2e/careersPage');
const blogPage = require('../e2e/blogPage');
const aboutPage = require('../e2e/aboutPage');
const pageHelper = require('../e2e/pageHelper');

const     home = new homePage();
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