import Article from '../models/ArticleModel.js'

export const getArticles = async (req, res) => {
    try {
        const articles = await Article.find()
        res.json(articles)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getArticleById = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id)
        res.json(article)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const postArticle = async (req, res) => {
    const article = new Article(req.body)
    try {
        const addArticle = await article.save()
        res.status(201).json(addArticle)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const updateArticle = async (req, res) => {
    try {
        const updateArticle = await Article.updateOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(updateArticle)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteArticle = async (req, res) => {
    try {
        const deleteArticle = await Article.delteOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(deleteArticle)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}