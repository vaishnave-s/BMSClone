import { HashTable } from './hashtable.js';
export class Router {
    routes = new HashTable(10);
    addRoute = function (path, name) {
      if (name !== "") {
        this.routes.insert(name,path);
      }
    };
    displayRoutes = function () {
      this.routes.print();
    };
    getRoute = function (name) {
      if (name !== "") {
          var path=this.routes.lookup(name);
          console.log(path);
          location.replace(path)
      }
    };
    getCurrentPath=function(){
      return (window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1));
    }
}