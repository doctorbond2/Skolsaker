class Starwars {

  constructor(character,planet) {
    this.SWAPI = 'https://swapi.dev/api/';

  }

  async fetchOne(content, page) {
    
    if(!(
      content === 'vehicles' || 
      content === 'species' || 
      content === 'people' ||
      content === 'starships' ||
      content === 'planets')) {

      return console.log('Valid inputs:\n"vehicles"\n"people"\n"species"\n"planets"\n"starships"');
    }

    try {
      const response = await (await fetch(this.SWAPI+content+`/${page}`)).json();
      console.log(response);  
    } catch(error) {
      console.error('error', error)
    }

  }

}

const jabbaOne = new Starwars();

await jabbaOne.fetchOne('people',1);

export default Starwars;