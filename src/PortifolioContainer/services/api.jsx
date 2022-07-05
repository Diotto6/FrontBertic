import axios from "axios";

export const api = axios.create({   
    baseURL: 'https://backappdesafio.herokuapp.com/'
})

export const getComment = async() => {
    let url = `/comment`

    return api.get(url)
};

export const createComment = async(name, comment) => {
    let url = `/comment`

    return api.post(url, {name:name, comment:comment})
}

export const CreateEmail = async(nome, number, email) => {
    let url = `/dados`

    return api.post(url, {nome:nome, number:number, email:email})
}