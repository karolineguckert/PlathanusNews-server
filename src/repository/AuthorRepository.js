const Author = require("../entity/Author");

async function insertAuthor(authorName) {
    let author = await Author.create({name: authorName});
    return author.id;
}

async function deleteAuthor(req) {
    await Author.destroy({
        where: {
            name: req.authorName,
        }
    });
}

async function updateAuthor(req) {
    await Author.update({name: req.authorName}, {
        where: {
            name: req.oldAuthorName,
        }
    });
}


module.exports = {insertAuthor,deleteAuthor,updateAuthor};
