const express = require('express');
const router = express.Router();
const members = require('../../members');
const uuid = require('uuid');



// Gets all members
router.get('/', (req, res) => 
    res.json(members));

// Get a single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));

    } else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }
    
});
//

// Create or Post a new member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if (!newMember.name || !newMember.email) {
        return res.status(400).json({msg: 'Pls include a name or email'});
    }
    members.push(newMember);
    res.json(members);


});

// Update a new member
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        const updMember =  req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email? updMember.email : member.email;

                res.json({msg: 'Member updated', member});
            };
        });
        } else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }
    
});


// delete a member
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json({msg: 'member deleted', members: members.filter(member => member.id !== parseInt(req.params.id))});

    } else{
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }
    
});



module.exports = router;
