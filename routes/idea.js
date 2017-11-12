const express = require('express')
const router = express.Router()

const IdeaService = require('../services/idea-service')
const TagService = require('../services/tag-service')

router.get('/', async (req, res, next) => {
    res.send(await IdeaService.findAll())
})

router.get('/all', async (req, res, next) => {
    const ideas = await IdeaService.findAll()
    res.render('idea-list', {ideas})
})

router.get('/:id', async (req, res, next) => {
    const idea = await IdeaService.find(req.params.id)

    res.render('idea-detail', {idea})
})

router.post('/', async (req, res, next) => {
    const idea = await IdeaService.add(req.body)

    res.send(idea)
})

router.post('/:id/tags', async (req, res, next) => {
    const idea = await IdeaService.find(req.params.id)
    const tag = await TagService.find(req.body.targetId)
    idea.tags.addToSet(tag)
    const updatedIdea = await idea.save()
    res.send(updatedIdea)
});

router.delete('/:id', async (req, res, next) => {
    await IdeaService.del(req.params.id)

    res.send('ok!')
})

module.exports = router
