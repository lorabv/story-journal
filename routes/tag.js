const express = require('express')
const router = express.Router()

const TagService = require('../services/tag-service')
const IdeaService = require('../services/idea-service')

router.get('/', async (req, res, next) => {
    res.send(await TagService.findAll())
})

router.get('/all', async (req, res, next) => {
    const tags = await TagService.findAll()
    res.render('tag-list', {tags})
})

router.get('/:id', async (req, res, next) => {
    const tag = await TagService.find(req.params.id)

    res.render('tag-detail', {tag})
})

router.post('/', async (req, res, next) => {
    const tag = await TagService.add(req.body)

    res.send(tag)
})

router.post('/:id/ideas', async (req, res, next) => {
    const tag = await TagService.find(req.params.id)    
    const idea = await IdeaService.find(req.body.targetId)
    tag.ideas.addToSet(idea)
    const updatedTag = await tag.save()
    res.send(updatedTag)
});

router.delete('/:id', async (req, res, next) => {
    await TagService.del(req.params.id)

    res.send('ok!')
})

module.exports = router
