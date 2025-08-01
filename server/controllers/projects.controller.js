import Project from '../models/projects.model.js'
import extend from 'lodash/extend.js'
import errorHandler from './error.controller.js'

const create = async (req, res) => {
    const project = new Project(req.body)
    try {
        await project.save()
        return res.status(200).json({
            message: "Successfully created the project!"
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const list = async (req, res) => {
    try {
        let projects = await Project.find().select('title first_name last_name email completion description')
        res.json(projects)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const projectByID = async (req, res, next, id) => {
    try {
        let project = await Project.findById(id)
        if (!project)
            return res.status(400).json({
                error: "Project not found"
            })
        req.profile = project
        next()
    } catch (err) {
        return res.status(400).json({
            error: "Could not retrieve project"
        })
    }
}

const read = (req, res) => {
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile)
}

const update = async (req, res) => {
    try {
        let project = req.profile
        project = extend(project, req.body)
        project.updated = Date.now()
        await project.save()
        res.json(project)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const remove = async (req, res) => {
    try {
        let project = req.profile
        let deletedProject = await project.deleteOne()
        res.json({
            message: 'Project deleted successfully',
            deletedProject: deletedProject
        });
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const removeAll = async (req, res) => {
    try {
        await Project.deleteMany({})
        res.json({ message: "All projects deleted successfully!" })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

export default { create, projectByID, read, list, remove, update, removeAll }
