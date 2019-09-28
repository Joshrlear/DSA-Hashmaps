const HashMap = require('./hashMap')

function bestVideoGames() {
    const myFavVideoGames = new HashMap
    myFavVideoGames.MAX_LOAD_RATIO = .5
    myFavVideoGames.SIZE_RATIO = 3
    myFavVideoGames.set('Titanfall2', {notes: 'best multiplayer ever!', rating: '9/10'})
    myFavVideoGames.set('Dying Light', {notes: 'best movement mechanics', rating: '8/10'})
    myFavVideoGames.set('Halo 2', {notes: 'orignal king of multipayer and great story', rating: '8/10'})
    myFavVideoGames.set('Splinter Cell: Blacklist', {notes: 'super fun stealth with great gunplay', rating: '7/10'})
    myFavVideoGames.set('Far Cry 5', {notes: 'super addicting gameplay and fantastic story', rating: '7/10'})
    myFavVideoGames.set('Halo: Combat Evolved', {notes: 'The original king of story', rating: '8/10'})
    myFavVideoGames.set('Elders Scrolls: Morrowind', {notes: 'original and best RPG', rating: '7/10'})
    myFavVideoGames.set('Half Life 2', {notes: 'Still a great game almost 2 decades ago. physics are still great!', rating: '7/10'})
    myFavVideoGames.set('Halo Reach', {notes: 'great addidtion to the trilogy', rating: '6/10'})
    myFavVideoGames.set('Diablo 2', {notes: 'I sunk way too many hours into this game', rating: '7/10'})
    myFavVideoGames.set('Ninja Gaiden 2004', {notes: 'the original Dark Souls, but better!', rating: '7/10'})
    console.log('ninja!',myFavVideoGames.get('Ninja Gaiden 2004').rating)
    console.log('Goodnight and good luck',myFavVideoGames.get('Dying Light').rating)
    return myFavVideoGames
}
console.log(bestVideoGames())

function main() {
    const lor = new HashMap()
    lor.MAX_LOAD_RATIO = .5
    lor.SIZE_RATIO = 3
    console.log('LoadRatio Drills:',lor.MAX_LOAD_RATIO)
    lor.set('Hobbit', 'Bilbo')
    lor.set('Hobbit', 'Frodo')
    lor.set('Wizard', 'Gandolf')
    lor.set('Human', 'Aragorn')
    lor.set('Elf', 'Legolas')
    lor.set('Maiar', 'The Necromancer')
    lor.set('Maiar', 'Sauron')
    lor.set('RingBearer', 'Gollum')
    lor.set('LadyOfLight', 'Galadriel')
    lor.set('HalfElven', 'Arwen')
    lor.set('Ent', 'Treebeard')
    console.log('Maiar key:', lor.get('Maiar'))
    console.log('Hobbit key:', lor.get('Hobbit'))
  
    return lor
}
//console.log(main())  