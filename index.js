/**
 * Rappels des objects en js
 */

const obj = {
    //index: value
    pseudo: "codwerk",
    ville: "asb",

    direSalut : function() {
        console.log(`salut ${this.pseudo}`);
    }
}

//ajouter
obj.age = 24
obj["admin"] = true

//modifier
obj.pseudo = 'widwerk'

//supprimer
delete obj.ville

//checker si un propriéte existe
//console.log("ville" in obj);

//parcouri un object
for (const key in obj) {
    //console.log(`${key} : ${obj[key]}`);
}

/**
 * les methodes des objects
 */

//obtenir les clés
const keys = Object.keys(obj);
//console.log(keys);

//obtenir les valeurs
const values = Object.values(obj);
//console.log(values);

const nestedArray = Object.entries(obj);
//console.log(nestedArray);

const obj2 = {
    //index: value
    taille: "1m84",
    poids: "75kg"
}

//fusionner objects
const fusion = Object.assign({}, obj, obj2);
//console.log(fusion);

//empeche les modifs
//const newObj = Object.freeze(obj);
obj.pseudo = "test"

//empeche l'ajout de propriété
//const newObj = Object.seal(obj);
obj.addresse = "your home"
//console.log(obj);

/**
 * Construire des objects
 */

//fonction constructeur

    //methode 1
function User(pseudo, age) {
    this.pseudo = pseudo,
    this.age = age

    this.bienvenue = function() {
        return `salut ${this.pseudo}, tu as ${this.age} ans`
    }
}

const user1 = new User('codwerk', 25);

//console.log(user1.bienvenue());

    //methode 2 : Factory functions
function Perso(pseudo, force) {
    return {
        pseudo, //pseudo: pseudo
        force   //force: force
    }
}

const perso = Perso('chun-li', 200);
//console.log(perso);

    //methode 3 : Class
class Utilisateur {
    constructor(pseudo, age){
        this.pseudo = pseudo,
        this.age = age
    }

    bienvenue = function() {
        return `salut ${this.pseudo}, tu as ${this.age} ans`
    }
}


const user4 = new Utilisateur('boss', 25);
Utilisateur.prototype.bienvenue = function() {
    console.log(`salut ${this.pseudo}, tu as ${this.age} ans`);
}

//console.log(user4.bienvenue() , user4);

//Assigne des methodes a une class
Object.assign(Utilisateur, {
    methode1() {

    },
    methode2(){

    }
})

//L'héritage

class Animal {
    constructor(name, age) {
        this.name=name,
        this.age= age
    }

    salut = function() {
        return `salut ${this.name}, tu as ${this.age} ans`
    }
}

class Dog extends Animal {
    run(){
        console.log(`${this.name} court vite !!!`);
    }
}

const rex = new Dog('rex', 15);

console.log(rex);