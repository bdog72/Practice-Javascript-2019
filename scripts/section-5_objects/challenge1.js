console.log('------------------------------------');
//
//
let myPost = {
  postTitle: 'Object is reference type',
  postLikes: 0,
  shared: true
};

console.log(myPost);
myPost.postLikes = 1;
console.log(myPost);
delete myPost.shared;
console.log(myPost);

//
//
console.log('------------------------------------');
