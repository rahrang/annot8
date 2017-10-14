/**
* Annot8
* Module define all API paths
* author: @rahrang
*/

const LOCALHOST = window.location.host === 'annot8-cs194.herokuapp.com' ? 'annot8-cs194.herokuapp.com' : 'localhost:5000';
const BASE_URL = `http://${LOCALHOST}`

module.exports = {
    POSTS: `${BASE_URL}/posts`,
    VIDEOS: `${BASE_URL}/videos`,
    USERS: `${BASE_URL}/users`
}