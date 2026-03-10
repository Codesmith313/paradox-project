function Person(n,a,j){

    this.name=n;
    this.age=a;
    this.job=j;
    this.eat=()=>{
        console.log("eating")
    }
}

let timi= new Person("timi",27,"se");

timi={...timi, home:"isheri"};

let {name, age, job,home, eat}= timi;



console.log(`${name} is our new software engineer, hes ${age} years old and
     hes in the ${job} department, he comes from ${home} and earns ${Math.round(Math.random()*100000)}
    
    `)

    let arr= new Array(1,2,3,4,5,6,7)

    let se= arr.filter( (a)=>{
        return a>0
    })

    console.log(se);