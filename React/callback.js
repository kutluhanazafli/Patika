// setTimeout(() => {
//   console.log('After 5 seconds');
// }, 5000);

// setInterval(() => {
//   console.log('Every 2 seconds');
// }, 2000);

/////////////////////////////

// const sayHello = (callback) => {
//     callback()
// };

// sayHello(() => {
//     console.log('Hello');
// });

/////////////////////////////

import fetch from 'node-fetch';

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(data => data.json())
//     .then(users => {
//         console.log(users);

//         fetch('https://jsonplaceholder.typicode.com/posts/1')
//             .then(data => data.json())
//             .then(posts => {
//                 console.log(posts);

//                 fetch('https://jsonplaceholder.typicode.com/posts/2')
//                     .then(data => data.json())
//                     .then(data => {
//                         console.log(data);
//                     });
//             });
//     });

/////////////////////////////

// async function getData() {
//     const data = await (
//         await fetch('https://jsonplaceholder.typicode.com/users')
//     ).json();

//     const post1 = await (
//         await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     ).json();

//     const post2 = await (
//         await fetch('https://jsonplaceholder.typicode.com/posts/2')
//     ).json();

//     console.log(data);
//     console.log(post1);
//     console.log(post2);
// }

// getData();

/////////////////////////////

// (async () => {
//     const data = await (
//         await fetch('https://jsonplaceholder.typicode.com/users')
//     ).json();

//     const post1 = await (
//         await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     ).json();

//     const post2 = await (
//         await fetch('https://jsonplaceholder.typicode.com/posts/2')
//     ).json();

//     console.log(data);
//     console.log(post1);
//     console.log(post2);
// })();

/////////////////////////////

import axios from 'axios';

// (async () => {
//     const { data: users } = await axios('https://jsonplaceholder.typicode.com/users');

//     const { data: post1 } = await axios('https://jsonplaceholder.typicode.com/posts/1');

//     const { data: post2 } = await axios('https://jsonplaceholder.typicode.com/posts/2');

//     console.log(users);
//     console.log(post1);
//     console.log(post2);
// })();

/////////////////////////////

const getUsers = () => {
    return new Promise(async (resolve, reject) => {

        const { data } = await axios('https://jsonplaceholder.typicode.com/users');

        resolve(data);
        // reject('Error');

    });
};

const getPost = (id) => {
    return new Promise(async (resolve, reject) => {

        const { data } = await axios('https://jsonplaceholder.typicode.com/posts/' + id);

        resolve(data);
        // reject('Error');

    });
};

// (async () => {
//     try {
//         const users = await getUsers();
//         const post = await getPost(2);

//         console.log(users);
//         console.log(post);
//     } catch (error) {
//         console.log(error);
//     }
// })();

/////////////////////////////

Promise.all([getUsers(), getPost(1)]).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});