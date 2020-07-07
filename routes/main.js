const express = require('express')
const router = express()
const projectController = require('../controllers/ProjectController')


router.get('/', (req, res) => {

    const data = req.context // {page:..., global:...}

    const projectCtr = new projectController()
    projectCtr.get()
        .then(projects => {
            data['projects'] = projects
            // console.log('Projects: ' + JSON.stringify(projects))
            res.render('landing', data)
        })
        .catch(err => {
            res.send('Oops!' + err.message)
        })
})

router.get('/project/:slug', (req, res) => {
    const data = req.context
    const projectSlug = req.params.slug

    const projectCtr = new projectController()
    projectCtr.get({ slug: projectSlug })
        .then(projects => {
            if (projects.length == 0) {
                throw new Error('Project not found')
                return
            }

            const project = projects[0]
            data['project'] = project
            res.render('project', data)
        })
        .catch(err => {
            res.send('Oops! ' + err.message)
        })
})

module.exports = router