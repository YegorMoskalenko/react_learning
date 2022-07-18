// import axios from "axios";

export default class PostService {
    static async getAll(page, limit){
        // const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        // return response
        let url = new URL('https://jsonplaceholder.typicode.com/posts')
        let params = {
            _limit: limit,
            _page: page
        }
        url.search = new URLSearchParams(params).toString();

        const responseJson = await fetch(url)
        return responseJson
    }

    static async getById(id){
        const responseJson = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        return responseJson
    }

    static async getCommentsByPostId(id){
        const responseJson = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return responseJson
    }
}