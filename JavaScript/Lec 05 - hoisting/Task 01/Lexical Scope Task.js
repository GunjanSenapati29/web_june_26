var a1 = 100
var a2 = 200

function test() {

    debugger
    let x1 = 300
    console.log("This is the local scope element: ", x1)

    function test1() {
        let y1 = 400
        console.log(y1)
        console.log("This is the value of 'x1' inside test1: ", x1)

        function test2() {
            let z1 = 500
            console.log(z1)
            console.log("This is the value of 'y1' inside test2: ", y1)

            function test3() {
                console.log("Value of y1 inside test3", y1)
                console.log("Value of x1 inside test3", x1)

                // Global Scope
                console.log("Value of a1 inside test3", a1)
                console.log("Value of a2 inside test3", a2)

                function add(){
                    console.log("Addition of values of x1: ",x1," \ty1: ",y1," \tz1: ",z1,"\ta1: ",a1,"\ta2: ",a2)
                    console.log(x1+y1+z1+a1+a2)
                }

                console.log("Before calling add")
                add()
                console.log("After calling add")
            }

            console.log("Before calling test3")
            test3()
            console.log("After calling test3")

        }

        console.log("Before calling test2")
        test2()
        console.log("After calling test2")

    }
    console.log("Before calling test1")
    test1()
    console.log("After calling test1")

}

test()