import axios from 'axios'

const host = 'https://tales-server.herokuapp.com'
// const host = 'http://localhost:3000'
const server = `${host}/api/v1`

export function registrate (user) {
  return axios.post(`${server}/users`, {user})
}

export function login (user) {
  return axios.post(`${server}/login`, {user})
}

export function newFairytale (fairytale) {
  return axios.post(`${server}/fairytales`, {fairytale})
}

export function editFairytale (fairytale) {
  return axios.post(`${server}/fairytales`, {fairytale})
}

export function deleteFairytale (fairytale) {
   axios.delete(`${server}/fairytales`, {fairytale})
}
