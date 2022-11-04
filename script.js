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
function Car(mName, mYear){
    this.name = mName;
    this.year = mYear;
    this.getCarinfo = function(){
        document.write("model" + this.name + "gamoshvebis weli" + this.year)
    }
}
function User (pName, pAge){
    this.name = pName;
    this.age = pAge;
    this.driveCar = function(car){
        document.write(this.name + "atarebs" + car.name + car.year)
    }
this.displayInfo =  function(){
    document.write("saxeli" + this.name + "asaki" + this.age)
}
}

var tom = new User ("Tomi", 18);
tom.displayInfo();

var lada = new Car ("lada", 1800);
tom.driveCar(lada)