import axios from "axios";

var urlbase = "https://todos-go.herokuapp.com/api/todos";

export const get = async () => await axios({
    urlbase,
    method: "GET",
    url: urlbase
})

export const post = (todo) => axios({
    method: "POST",
    url: urlbase,
    data: todo
})

export const put = (todo) => axios({
    method: "PUT",
    url: `${urlbase}/${todo.id}`,
    data: todo
})

export const delet = (todoId) => axios({
    urlbase,
    method: "DELETE",
    url: `${urlbase}/${todoId}`
})