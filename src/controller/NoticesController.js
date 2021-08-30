const express = require('express');
const router = express.Router();
const NoticesRepository = require("../repository/NoticesRepository");
const AuthorRepository = require("../repository/AuthorRepository");

router.post('/getnotices', async function(req, res, next) {
    let notices = await NoticesRepository.selectAllNotices();
    res.send(notices);
});

router.post('/register', function(req, res, next) {
    NoticesRepository.insertNotice(req.body);
    res.send({success: true, code: 200});
});

router.post('/delete', function(req, res, next) {
    NoticesRepository.deleteNotice(req.body);
    AuthorRepository.deleteAuthor(req.body);

    res.send({success: true, code: 200});
});

router.post('/update', function(req, res, next) {
    console.log(req.body)
    NoticesRepository.updateNotice(req.body);
    AuthorRepository.updateAuthor(req.body);

    res.send({success: true, code: 200});
});

router.get('/search', function(req, res, next) {
    let notices = NoticesRepository.getAllLike(req.query);
    res.send(notices);
});

module.exports = router;
