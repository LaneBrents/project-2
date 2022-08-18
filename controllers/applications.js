const Application = require('../models/application');

module.exports = {
    new: newApplication,
    create,
    index,
    show,
    edit,
    update,
    delete: deleteApplication,
};

function show(req, res) {
    Application.findById(req.params.id, function (err, appDocumentCreated) {
        res.render('applications/show.ejs', {
            company,
            position,
            dateApplied,
            stat,
            edit,
            remove,
        });
    });
}

// Shows the index page
function index(req, res) {
    Application.find({}, function (err, allOfTheApplicationsInTheDatabase) {
        console.log(allOfTheApplicationsInTheDatabase, " <- all the applications");
        if (err) {
            res.send("You have an error trying to find the application");
        }

        res.render('applications/index.ejs', {
            application: allOfTheApplicationsInTheDatabase,
        }); // end of render
    });
}

// Moves to the new application screen
function newApplication(req, res) {
    res.render('applications/new.ejs');
}

// Creates the application
function create(req, res) {
    Application.create(req.body, function (err, appDocumentCreated) {
        if (err) {
            console.log(err, " <- err in the application create controller")
            return res.render('applications/new.ejs');
        }
        res.redirect(`/applications`);
    })
}

// Shows the edit page for the application
function edit(req, res) {
    Application.findById(req.params.id, function (err, appDocumentCreated) {
        res.render('applications/edit.ejs', {
            application: appDocumentCreated,
        });
    });
}

// Updates the application itself
function update(req, res) {
    Application.findByIdAndUpdate(req.params.id, req.body, function (err, appDocumentCreated) {
        appDocumentCreated.save(function (err) {
            res.redirect('/applications');
        });
    });
}


// Deletes the application
function deleteApplication(req, res) {
    Application.findByIdAndRemove(req.params.id, function (err) {
        res.redirect('/applications');
    });
}
