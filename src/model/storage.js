// let storage = {
//   set(key,value) {
//     localStorage.setItem("key", JSON.stringify(value));
//   },
//   get() {
//      return JSON.parse(localStorage.getItem(key));
//    //let todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
//    // todos.forEach(function (todo, index) {
//    //   todo.id = index;
//    // });
//    // storage.uid = todos.length;
//    // return todos
//   },
//    remove(key) {
//      localStorage.removeItem(key);
//    }
//
// };
let STORAGE_KEY = 'list';
let storage = {
  get() {
    let todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return todos
  },
  save(todos) {
    localStorage.setItem("list", JSON.stringify(todos))
  }
};
export default storage;
