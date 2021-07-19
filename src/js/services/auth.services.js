import axios from 'axios';

/**
 * Function login. Make login request to API
 * @param {String} username
 * @param {String} password
 */

export async function login(username, password) {
  let id = Math.random();
  try {
    const response = await axios.post('http://localhost:3000/users',
    JSON.stringify({id, username, password}),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response;
  } catch(err) {
    console.log(err);
    return Promise.reject(err);
  }
}

export async function sigin(username, password) {
  try {
    const response = await axios.get('http://localhost:3000/users')
    .then(post => post);
    response.data.filter(item => {
      if (item.name == username && item.password == password) {
        alert(`Welcome ${username}`);
      }
      return;
    })
  } catch(err) {
    console.log(err);
  }
}
