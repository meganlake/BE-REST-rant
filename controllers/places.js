const router = require('express').Router()
const places = require('../models/places.js')
const db = require('../models')

//View Home Page
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', { places })
    })
    .catch(err => {
        console.log(err) 
        res.render('error404')
    })
})


//View New Page
router.get('/new', (req, res) => {
    res.render('places/new')
})

//Add New Place
router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})


//View Places
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
        console.log(place.comments)
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})


//Delete Place
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(deletedplace => {
            res.redirect('/places')
        }).catch(err =>{
            res.render('error404')
        })
})

//View Edit Page
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
    .then((place) => {
    res.render('places/edit', { place })
    })
})

//Update/edit a place
router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect(`/places/${req.params.id}`)
        })
        .catch((err) => {
            console.log('err', err)
            res.render('error404')
        })
})

//Add Comment
router.post('/:id/comment', (req, res) => {
    console.log(req.body)
    db.Place.findById(req.params.id)
    .then(place => {
        db.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment.id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            res.render('error404')
        })
    })
    .catch(err => {
        res.render('error404')
    })
})




module.exports = router