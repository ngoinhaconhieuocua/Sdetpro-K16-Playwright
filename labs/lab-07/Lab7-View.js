const Post = require('./Post.js');
const PostController = require('./PostController.js');
const PostCtrl = new PostController();
const baseUrl = "https://jsonplaceholder.typicode.com/posts";
const userUrl = "https://jsonplaceholder.typicode.com/users";
const readline = require('readline-sync');


async function main() {
    // Get userId

    let userId = Number(readline.question("input userid: "));
    const targetUser = await PostCtrl.getUserId(userId, userUrl);
    if (targetUser != null) {

        let postid = Number(readline.question("input postid: "));
        const data = await PostCtrl.getAllPost(baseUrl,userId);
         console.log("---------------------Target Post-----------");
        const targetPost = await PostCtrl.getTargetpost(postid, data);
        console.log("Target post id: " + targetPost._id);
        console.log("Target post title: " + targetPost._title);
        console.log("Target post body: " + targetPost.body);
    }
    else {
        console.log("User khong ton tai");
    }


}


main();