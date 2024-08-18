const PostModel = require('../models/post.model');

module.exports.getPosts = async (req,res) => {
    const posts = await  PostModel.find();
    res.status(200).json(posts);
}

module.exports.setPosts = async (req, res) => {
    // res.json({message: "Posts set  succeufull !"})
    if(!req.body.message) {
        res.status(400).json({message : "merci d ajouter un Poster"});
    }
    const post = await PostModel.create({
        message: req.body.message,
        author: req.body.author,
    })
    res.status(200).json(post);
};

module.exports.editPost = async (req,res) => {
    const post = await PostModel.findById(req.params.id)

    if (!post) {
        res.status(400).json({message:"Ce post n existe pas !"});
    }

    const updatePost = await  PostModel.findByIdAndUpdate(
       post,
       req.body,{new:true,}
    )
    res.status(200).json(updatePost);
};

module.exports.deletePost = async (req,res) => {
    const post = await PostModel.findOneAndDelete(req.params.id);
    // findById
    if (!post) {
        res.status(400).json({message:"Ce post n existe pas !"});
    }

    // await post.remove();
    res.status(200).json("message supprime" + " " + req.params.id);
};


module.exports.likePost = async (req, res) => {
    try{
        await PostModel.findByIdAndUpdate(
            req.params.id,
            {$addToset: {likers: req.body.userId}},
            {new: true}
        ).then((data) => res.status(200).send( data));
        

    } catch (err){
        res.status(400).json( err);

    }
};


module.exports.dislikePost = async (req, res) => {
    try{
        await PostModel.findByIdAndUpdate(
            req.params.id,
            {$pull: {likers: req.body.userId}},
            {new: true}
        ).then((data) => res.status(201).send( data));
        

    } catch (err){
        res.status(400).json(err);

    }
};