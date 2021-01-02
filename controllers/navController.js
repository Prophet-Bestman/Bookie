module.exports.nav_home = (req, res) =>{
    res.redirect('/');
};

module.exports.nav_about = (req, res) => {
    res.render('about', {
        title: 'About',
        heading: 'about this app'
    });
};

module.exports.nav_books = (req, res) => {
    res.redirect('/book-store');
};

module.exports.nav_contact = (req, res) => {
    res.render('contact', {
        title: 'Contact Us',
        heading: 'contact us'
    });
};
