class Route {
  constructor(path, handlers) {
    this.path = path
    this.handlers = handlers
  }
}

export class Router {
  constructor(arr) {
    this.arr = arr
    this.routes = []
    this.parse('',this.arr,[], 0)
  }

  add(route) {
    this.routes.push(new Route(route.path, route.handlers))
  }

  parse(parentPath, arr, parentHandlers, index) {
    console.log('arr[i] : ',parentPath + '/' + arr[index].path, [...parentHandlers, arr[index].action], index)
    const route = new Route(`${parentPath}/${arr[index].path}`, [...parentHandlers, arr[index].action])
    this.add(route)
    if ('children' in arr[index]) {
      this.parse(parentPath + '/' + arr[index].path, arr[index].children,[...parentHandlers, arr[index].action], 0)
    }
    
    if ( index < (arr.length - 1) ) {
      this.parse(parentPath, arr,[...parentHandlers], index + 1)
    }
  }



  navigate(url) {
    console.log('navigate: go to ', url)

  }

}



