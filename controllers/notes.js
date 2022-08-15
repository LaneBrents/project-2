const Application = require('../models/application');

module.exports = {
    create,
    delete: deleteNote
};

async function deleteNote(req, res){
    try {

        const applicationDocument = await DocumentfindOne({
            'note._id': req.params.id,
            'note._user': req.user._id
        });

        if(!applicationDocument) return res.redirect('/applications');

        applicationDocument.notes.remove(req.params.id);

        await applicationDocument.save();

        res.redirect(`/applications/${applicationDocument._id}`)
 
    } catch(err) {
        res.send(err)
    }
}

function create(req, res) {
    console.log(req.user, " <- this is req.user")

    Application.findById(req.params.id, function(err, applicationDocument) {

        req.body.user = req.user._id;
        req.body.userName = req.user.name;

        applicationDocument.notes.push(req.body);

        applicationDocument.save(function(err) {
            res.redirect(`/applications/${req.params.id}`);
        });
    });
}