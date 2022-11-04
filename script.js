// function createUser(pName, pAge) {
//     return{
//         name:pName,
//         age:pAge,
//         displayInfo: function(){
//             document.write("saxeli" + this.name + "asaki" +this.age)
//         }
//     }
// }
// var tom = createUser("Tom", 26)
// tom.displayInfo()


// const User = (pName, pAge) => {
//     name = pName;
//     age = pAge;
//     displayInfo = () => {
//         document.write("saxeli" + this.name + "asaki" +this.age)
//     }
// }
// var tom = new User ("Tom", 26)
// document.write(tom.name)

// Car type constructor

function Car(mName, mBrand, mYear){
    this.name = mName;
    this.brand = mBrand;
    this.year = mYear;
    }
}
function User (pName, pAge){
    this.name = pName;
    this.age = pAge;
    this.Carowner = function(car){
        document.write(''+ 'has' + car.name + '' + car.brand +''+ car.year)
    }
this.displayInfo =  function(){
    document.write(this.name + '' + 'is' + '' this.age + 'years')
}
}

var Bill = new User ("Bill", 18);
Bill.displayInfo();

var lada = new Car ("lada", 1800);
Bill.Carowner(lada)

person{
    name: 'Bill',
    age: 18,
    car:  {
        name: 'lada',
        brand: 'niva',
        year: 1800
    }
}

car{
    name: 'lada',
        brand: 'niva',
        year: 1800
}

//ეს დავალებაში არ შედის მაგრამ მაინც  prototype
function User (tName, tAge){
    this.name = tName;
    this.age = tAge;
    this.displayInfo = function(){
        document.write("saxeli" + this.name + "asaki" + this.age)
        }
    }

    User.prototype.maxAge = 110;
var tom = new User ("Tom", 26)
tom.hello()
document.write(tom.maxAge)
var mari = new User ("Giorgi", 24)
mari.hello()

document.write(mari.maxAge)
