"use strict"
function func1(a){
    console.log(a);
}// declaration

// const func2 = function(a){
//     console.log(a);
// } // function expression

// const func3 = a => a

// const tencuatimout = setTimeout(callback,)

// const testTimeout =setTimeout(()=>{
//     console.log('test timeout');
// },1000)

// const testInterval =setInterval(()=>{
//     console.log('test timeout');
// },1000)

const promise = new Promise((resolve, reject) => {
    resolve(3)
});
promise
.then((result) => (console.log(result*2)))
.catch(result => console.log(result*3));

// const getNumber = async()=>{
//    console.log(await promise()) 
// }

console.log('a');
setTimeout(()=>console.log('b'),0)

new Promise((resolve,reject)=>{
    resolve()
})
    .then(()=>{
        console.log('c');
    })

    console.log('d');

for(let i=0;i<5;i++){
    console.log(i)
}

let arr = [1,2,3,4,5]

// arr.forEach((i)=>console.log(i))

const find = arr.filter((i)=>(i>3))

console.log(find);

//spread

"use strict"
const a = 5;
const b = a;

b = 6;

console.log(a,b)

const student1 = {
    name:'loi',
    age:28
}

const student2 = {...student1};

student2.name = 'tung';

arr[]

console.log(student1);
console.log(student2);