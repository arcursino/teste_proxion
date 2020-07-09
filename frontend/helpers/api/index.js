import {get, post} from './ajaxutils'

export default {
  login (username, password) {
    return post('http://localhost:8000/api/login', {username, password})
  },
  /* http://localhost:3101/login/teste/123
  user (usuario, senha) {
    return get('/login/:mail/:senha', bd.login);
  }, */
  logout () {
    return post('http://localhost:8000/api/logout')
  },
  whoami () {
    return get('/api/whoami')
  },
  settings () {
    return get('/api/settings')
  },
  list_todos () {
    return get('/api/list_todos')
  },
  add_todo (newtask) {
    return post('/api/add_todo', {new_task: newtask})
  },
  list_material () {
    return get('/api/list_material')
  },
  add_material (material) {
    return post('/api/add_material', {new_material: material})
  }
}
