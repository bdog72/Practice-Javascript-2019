const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}'
];

/* From the "postsJSON" array create "posts" array that will consist of JavaScript objects */

// var posts = [];
// for (let i = 0; i < postsJSON.length; i++) {
//   posts.push(JSON.parse(postsJSON[i]));
// }

// const posts = postsJSON.map(JSON.parse);

const posts = postsJSON.map(post => JSON.parse(post));

console.log(posts);
console.log(posts[1].postId);
