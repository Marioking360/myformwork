//alert('Welcome to Awka');
//document.write('welcome to nigeria');
console.log('today is for coding');
var _peter = 'Welcome to New Era';
console.log(_peter);
var x=23;
console.log(x);
let g="Mario";
console.log(g);
const a= "How old is Emeka =";
const Emeka =27;
console.log(a,Emeka)
let first_name = "Chimere";
let email = "mariosalazar360@yahoo.com";
const total = first_name + " " + email;
console.log(total);

// for array
let y = ['ojo','pat',34];
console.log(y.length);
let solu=y.join(',');
console.log(solu);

// for IF conditional statement
let b=54;
if(b=54){
    console.log('i am happy')
}

// for ELSE statement
let course_rep=20
if (course_rep>20){
    console.log('she is good');
} else{
    console.log('she is bad');
}

// For Else-If statement 
let morning_star = 10;
if(morning_star < 30) {
    console.log(`i am ${morning_star} year old`);
} else if (condition2) {
    console.log(`i am above${morning_star} year old`);
} else {
    console.log('i am a beautiful woman so you can not know my age');
}

// For Switch statement 
let grade = 'F';
switch (grade) {
case 'A':
    console.log('you have A grade');
    break;
    case 'B':
    console.log('you have B grade');
    break;
    case 'C':
    console.log('you have a C grade');
    break;
    default:
    console.log('you have failed woefully');
}

// for FOR loop statement 
for (let x=0; x<10; x++) {
    console.log(`the value for x is ${x}`);
}

// for WHILE loop statement 
let z = 0
while(z < 10) {
    console.log(`the value for y is ${z}`);
    z++;
}

// for Do..While loop statement 
let q=0
do {
    console.log(`the value for q is ${q}`);
    q++
} while (q<5);

// OBJECT IN JAVASCRIPT
let user = {
    name: 'Mario',
    age: 30,
    email:'mariosalazar@yahoo.com',
    blog: ['Make Money Before You Die', 'I Must Make the Money'],
    login: function(){
        console.log('user login successful');
    },
    logout: function(){
        console.log('user logout successful')
    },
};
console.log(user);
console.log(user.name);
console.log(user.blog[1]);
user.login();
user.logout();
user["name"]= "John Okafor"
console.log(user["name"]);