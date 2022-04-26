// class Student {
//     getName(name){
//         this.fullame = name
//     }
// }
// raj = new Student()
// console.log(raj);


// class Student {
//     constructor(name){
//         this.schoolName = 'ABC'
//         this.fullame = name
//     }
// }
// raj = new Student('Raj Singh')
// console.log(raj);


// class Student {
//     constructor(firstName, lastName){
//         this.schoolName = 'ABC'
//         this.firstName = firstName
//         this.lastName = lastName
//         this._fullName = ''
//         this.getFullName()
//     }

//     getFullName() {
//         this._fullName = `${this.firstName} ${this.lastName}`
//     }

//     get fullName() {
//         return this._fullName
//     }

//     set setLastName(name){
//         this._fullName = `${this.firstName} ${name}`
//     }
// }

// raj = new Student('Raj', 'Singh')

// console.log(raj);


// class Student {
//     #AfullName
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.#AfullName = firstName + ' ' + lastName
//     }
//     get fullName () {
//         return this.#AfullName
//     }

//     set fullName(name) {
//         this.#AfullName = name
//     }

//     greet(name) {
//         let msg = `Hello ${name} from ${this.fullName}`
//         console.log(msg);
//     }
// }




// class ABCStudent extends Student {
//     constructor(firstName, lastName) {
//         super(firstName, lastName)
//         this.schoolName = 'ABC'
//     }
// }

// raj = new ABCStudent('Raj','Singh')
// console.log(raj);


// r = JSON.stringify(raj)
// console.log(r);
// console.log(JSON.parse(r));

// done = t/f
// name = 'qwertyuio'\

// 'make tea, make food'

try {
    // code here
    // document.getElementById('12134').innerHTML = '1223'
    // n = prompt('Enter a number')
    if (n == 0) {
        let error = new Error('Devided by Zero..')
        throw error
    } else {
        console.log(30/n);
    }
} catch (e) {
    console.log(e);
} finally {
    console.log('EOP');
}
