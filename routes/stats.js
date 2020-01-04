const express = require('express');
const router = express.Router();
const Stat = require('../models/Stat')

// Insert a stat
router.post('/', async (req, res) => {
    const stat = new Stat({
        asset_id: req.body.asset_id,
        asset_type: req.body.asset_type,
        created_at: req.body.created_at,
        schema_version: req.body.schema_version,
        stat: req.body.stat,
        updated_at: req.body.updated_at,
        value: req.body.value
    });

    try {
        const savedStat = await stat.save();
        res.json(savedStat);
    } catch (error) {
        res.json({ message: err })
    }
});

// Get all stats
router.get('/', async (req, res) => {

    try{
        const stats = await Stat.find({softdelete: { $ne : true}});
        res.json(stats);
    } catch(err) {
        res.json({ message: err });
    }
});


// Get one specific stat
router.get('/:statId', async (req, res) => {
    try {
        const stat = await Stat.findById(req.params.statId).find({softdelete: { $ne : true}});
        res.json(stat);
    } catch (err) {
        res.json({ message: err });
    }
});

//Delete one specific stat
router.delete('/:statId', async (req, res) => {

    try {
        const deletedStat = await Stat.updateOne(
            { _id: req.params.statId },
            { $set: 
                    {
                      softdelete: "true"
                    }
            }
        );
        res.json(deletedStat);
    } catch (err) {
        res.json({ message: err });
    }
    // try {
    //     const deletedStat = await Stat.remove({_id: req.params.statId});
    //     res.json(deletedStat);
    // } catch (err) {
    //     res.json({ message: err });
    // }
});

// Update one specific stat // can only update few details
router.patch('/:statId', async (req, res) => {
    try {
        const updatedPost = await Stat.updateOne(
            { _id: req.params.statId },
            { $set: 
                    {
                      stat: req.body.stat,
                      value: req.body.value 
                    }
            }
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

//Update by put //can update whole document
router.put('/:statId', async (req, res) => {
    try {
        const updatedPost = await Stat.updateOne(
            { _id: req.params.statId },
            { $set: 
                    { asset_id: req.body.asset_id, 
                      asset_type: req.body.asset_type,
                      schema_version: req.body.schema_version,
                      stat: req.body.stat,
                      value: req.body.value 
                    }
            }
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;