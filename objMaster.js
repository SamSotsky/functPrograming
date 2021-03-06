const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

// For example we could create a list of pokémon that have names that start with the letter "B" by using the following code.
const bListPkmn = pokemon
.filter( p => p.name[0] === "B" );
console.log(bListPkmn)


// Or if we wanted to return an array of just the ids, we could use something like this.
const pkmnIds = pokemon
.map( p => p.id )
console.log(pkmnIds)


const idByThree = pokemon
.filter(lex => lex.id%3==0)
console.log(idByThree)


const fireBoys = pokemon
.filter(kyle => kyle.types.includes("fire"))
console.log(fireBoys)


const multiType = pokemon
.filter(munkie => munkie.types.length>1)
console.log(multiType)


const daNames = pokemon
.map(dawb => dawb.name)
console.log(daNames)


const highIds = pokemon
.filter( yo => yo.id>99 )
console.log(highIds)


const poiMon = pokemon
.filter(bob => bob.types.includes("poison")&&bob.types.length===1)
.map(bob => bob.name)
console.log(poiMon)


const flyBoi = pokemon
.filter(j => j.types.includes("flying"))
.map(j=> j.types[0])
console.log(flyBoi)


const norm = pokemon
.filter(gravy=> gravy.types.includes("normal")).length
console.log(norm)
