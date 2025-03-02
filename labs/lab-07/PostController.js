const Post = require('./Post.js');
class PostController {


    async getAllPost(url, userId) {
        const response = await fetch(url);
        const allPost = await response.json();
        //console.log(allPost);
        const listUserPost = allPost.filter(function (post) {
            return post.userId === userId;
        });

        return listUserPost;
    }
    async getTargetpost(postId, allPost) {
        const targetPost = new Post();

        const resultpost = allPost.find(function (post) {
            return post.id == postId;
        });
        if (resultpost != null) {

            targetPost._userId = resultpost.userid;
            targetPost._id = resultpost.id;
            targetPost._title = resultpost.title;
            targetPost._body = resultpost.body;
        }
        return targetPost;

    }
    async getUserId(userid, url) {
        const users = await fetch(url);
        const result = await users.json();
        const resultUser = result.find(function (targetUser) {
            return targetUser.id === userid;
        });
        return resultUser;

    }

}
module.exports = PostController;

