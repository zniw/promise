const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        for (let i = 0; i < posts.length; i++){
            output += `<li>${posts[i].title}</li>`;
        }
        document.body.innerHTML = output;
    }, 1000);
}
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push(post);
            const error =false;
            if (!error) {
                resolve();
            }
            else {
                reject('Error:Something went wrong');
            }
        },2000);
    });
}
function deletePost(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if (posts.values !==0){
                resolve(posts.pop());
            }

            else{
                reject('Array is empty now');
            }

        },1000)
    });
}
function updateLastUserActivityTime() {

    return new Promise((resolve) => {
   
     setTimeout(() => {
   
      const updatedLastActivityTime = new Date().toTimeString();
   
      resolve(updatedLastActivityTime);
   
     }, 1000); // Simulate a 1-second delay
   
    });
   
   }
createPost({ title: 'Post Three', body: 'This is post Three' })
.then(() => updateLastUserActivityTime())
.then((updatedLastActivityTime) => {
console.log('Last Activity Time Updated:', updatedLastActivityTime);
// Display all posts
getPosts();
// Delete the last post
return deletePost();
})
.then(() => {
console.log('Last Post Deleted');
// Display remaining posts after deletion
getPosts();
})
.catch((error) => {
console.error('An error occurred:', error);
});
    
    

  
