class NewsController {
    index(req, res) {
        res.render('new');
    }
}

module.exports = new NewsController();
