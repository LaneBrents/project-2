const Application = require('../models/application');

module.exports = {
    new: newApplication,
    create,
    index,
    show,
};

function show(req, res) {
    Application.findById(req.params.id, function(err, appDocumentCreated) {
        res.render('applications/show.ejs', {
            company,
            position,
            date,
            stat,
        });
    });
}

function index(req, res) {
    Application.find({}, function(err, allOfTheApplicationsInTheDatabase) {
        console.log(allOfTheApplicationsInTheDatabase, " <- all the applications");
        if(err) {
            res.send("You have an error trying to find the application");
        }

        res.render('applications/index.ejs', {
            application: allOfTheApplicationsInTheDatabase,
        }); // end of render
    });
}

function newApplication(req, res) {
    res.render('applications/new.ejs');
}

// Create a new application
function create(req, res) {
    Application.create(req.body, function(err, appDocumentCreated) {
        if(err) {
            console.log(err, " <- err in the application create controller")
            return res.render('applications/new.ejs');
        }
        res.redirect(`/applications/${appDocumentCreated._id}`);
    })
}