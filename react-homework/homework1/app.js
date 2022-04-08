import axios from "axios";

async function getData(number){
    const {
        data: users
    } = await axios(`https://jsonplaceholder.typicode.com/users/${number}`)
    const{
        data: posts
    } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${{data: users}.data.id}`)

    return {data: users}, {data:posts}
}

export default getData;