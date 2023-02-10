
const express = require("express");
const cors = require('cors');

const router = express.Router();

var whitelist = ['http://localhost:3000']

var corsOptions = {
    origin: function( origin, callback ) {
        if (whitelist.indexOf(origin) !== -1) {
            callback( null, true )
        } else {
            callback( null, false )
            console.log('Bypass Failed: ', origin);
        }
    },
}

// Gets All Members ^^
router.get('/', cors(corsOptions), (req, res) => {
    res.json(members);
});

// Get Single Member
router.get('/:id', cors(corsOptions), (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No mumber with the id of ${req.params.id} was found.` });
    };
});

// Create Member
router.post('/', cors(corsOptions), (req, res) => {
    const newMember = {
        id: 10,
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if (!newMember.name || !newMember.email) {
        return res.status(400).json( { msg: 'Please include a name and email' } );
    }

    members.push(newMember);

    res.json(members);
});

// Update Single Member
router.put('/:id', cors(corsOptions), (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        const updMember = req.body;

        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;

                res.json({ msg: 'Member was updated', member })
            }
        });
    } else {
        res.status(400).json({ msg: `No mumber with the id of ${req.params.id} was found.` });
    };
});

// Delete Single Member
router.delete('/:id', cors(corsOptions), (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json({ 
            msg: 'Member deleted', 
            members: members.filter(member => member.id !== parseInt(req.params.id))
        });
    } else {
        res.status(400).json({ msg: `No mumber with the id of ${req.params.id} was found.` });
    };
});

module.exports = router;