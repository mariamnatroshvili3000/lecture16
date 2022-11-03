function createUser(pName, pAge) {
    return{
        name:pName,
        age:pAge,
        displayInfo: function(){
            document.write("saxeli" + this.name + "asaki" +this.age)
        }
    }
}
var tom = createUser("Tom", 26)
tom.displayInfo()





const User = (pName, pAge) => {
    name = pName;
    age = pAge;
    displayInfo = () => {
        document.write("saxeli" + this.name + "asaki" +this.age)
    }
}
var tom = new User ("Tom", 26)
document.write(tom.name)