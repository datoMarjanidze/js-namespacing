var NAMESPACE = function(){
    const one = {
        Car: class Car{
            constructor(){
                console.log('Namespace-One: Car has been assembled with diesel engine')
            }
        },
        logger: (param) => {
            window.localStorage.setItem(one.id, param)
            console.log(`Request has been logged in localStorage, with the id: ${one.id++}`)
        },
        id: 0
    }
    const two = {
        Car: class Car{
            constructor(){
                console.log('Namespace-Two: Car has been assembled with V8 engine')
            }
        },
        logger: (param) => {
            two.data.push(param)
            console.log('Request has been logged in data')
        },
        data: []
    }
    const three = {
        data: [],
        x: 1
    }
    return { one, two, three }
}()

with(NAMESPACE.one){
    let dieselEngine = new Car()
    logger('Today factory has manufactured one car with the diesel engine1')
}
with(NAMESPACE.two){
    let VEightEngine = new Car()
    logger('Today I\'ve changed manufacturing technology')
    console.log(data)
    with(NAMESPACE.three){
        console.log(data)
    }
}

const [x, y] = [2, 3]
with(NAMESPACE.three){
    console.log(x)
    console.log(y)
}
