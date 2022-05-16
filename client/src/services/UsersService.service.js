const basic_url = process.env.NODE_ENV === 'production' ? 'http://isuggest-app.heroku.com':"http://localhost:8080";

export const GetAllUsers = async ()=>{
    return await fetch(`${basic_url}/users`)
    .then(res=>res.json())
}