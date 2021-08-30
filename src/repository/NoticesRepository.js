const {Op} = require('sequelize');
const Notice = require('../entity/Notices');
const Author = require('../entity/Author');
const AuthorRepository = require('../repository/AuthorRepository');

async function insertNotice(req) {
    let authorId = await AuthorRepository.insertAuthor(req.authorName)
    await Notice.create({title: req.title, text: req.text, author_id: authorId});
}

function selectAllNotices() {
    return Notice.findAll({
        attributes: ['title', 'text','author_id'],
        include: [{
            model: Author,
            required: true,
            attributes: ['name','id']
        }]
    });
}

async function updateNotice(req) {
    await Notice.update({title: req.title, text: req.text}, {
        where: {
            title: req.oldTitle,
            text: req.oldText
        }
    });
}

async function deleteNotice(req) {
    await Notice.destroy({
        where: {
            title: req.title,
            text: req.text
        }
    });
}



async function getAllLike(req) {
    return await Notice.findAll({
        where: {
             title: { [Op.like]: '%' + req.search + '%' }
        }
    });
}

module.exports = {insertNotice,selectAllNotices,deleteNotice,updateNotice,getAllLike};
