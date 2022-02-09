import saitama from './assets/img/saitama_funko.png';
import stormtrooper from './assets/img/stormtrooper.png';
import tanjiro from './assets/img/tanjiro.png';
import zenitsu from './assets/img/zenitsu.png';
import walle from './assets/img/wall-e.png';
import skywalker from './assets/img/luke_skywalker_grogu.png';
import grogu from './assets/img/grogu_using_force.png';
import darthMaul from './assets/img/darth_maul.png';
import darkseid from './assets/img/darkseid.png';
import batman from './assets/img/batman.png';
import ahsoka from './assets/img/ashoka.png';
import levi from './assets/img/levi.png';
import dexter from './assets/img/dexter.png'
import deadpool from './assets/img/deadpool.png'
import duncan from './assets/img/duncan.png'
import emmet from './assets/img/emmet.png'

const array_products = [
  {
    id: '1',
    title: 'CONCEPT SERIES STORMTROOPER WITH SHIELD AND LIGHTSABER - STAR WARS',
    description:
      'This special series of Star Wars™ Pops! is based on the character concept art by Ralph McQuarrie. Bring home a piece of the stellar saga with the Funko exclusive Pop! Stormtrooper. Vinyl bobblehead is approximately 4.25-inches tall.',
    price: 11500,
    pictureUrl: stormtrooper,
    stock: 5
  },
  {
    id: '2',
    title: 'TANJIRO KAMADO - DEMON SLAYER',
    description:
      'Only two of the Kamado family survived a demon attack, and now Tanjiro and Nezuko are out for revenge. Expand your Demon Slayer collection with Pop! Tanjiro Kamado. Vinyl figure is approximately 4.25-inches tall.',
    price: 9399,
    pictureUrl: tanjiro,
    stock: 11
  },
  {
    id: '3',
    title: 'ZENITSU AGATSUMA - DEMON SLAYER',
    description:
      'Only two of the Kamado family survived a demon attack, and now Tanjiro and Nezuko are out for revenge. Expand your Demon Slayer collection with Pop! Zenitsu Agatsuma. Vinyl figure is approximately 4-inches tall.',
    price: 9399,
    pictureUrl: zenitsu,
    stock: 10
  },
  {
    id: '4',
    title: 'SAITAMA - ONE PUNCH MAN',
    description:
      'He rigorously trained to be a great superhero, but the problem is…he s too good at fighting. His name is true, he can defeat any opponent in one punch, and, due to the lack of challenge, that s why Saitama struggles with depression. Collect Pop! Saitama for your One Punch Man collection to pit the superhero against worthy opponents. Vinyl figure is approximately 4-inches tall.',
    price: 10000,
    pictureUrl: saitama,
    stock: 1
  },
  {
    id: '5',
    title: 'WALL-E',
    description:
      'Bring home the adorable trash compacting robot from Disney Pixars Wall-E with Pop! Wall-E. He may not be able to clean your room for you but he is sure to make you smile when you see him. Collectible stands approximately 3.75-inches tall.',
    price: 7180,
    pictureUrl: walle,
    stock: 6
  },
  {
    id: '6',
    title: 'BATMAN - THE BATMAN',
    description:
      'Join The Caped Crusader™, Batman, in his early years of fighting crime in Gotham City. Celebrate one of DC Comics most recognizable superheroes by adding Pop! Batman to your DC The Batman movie collection. Vinyl figure is approximately 4.25-inches tall.',
    price: 8290,
    pictureUrl: batman,
    stock: 5
  },
  {
    id: '7',
    title: 'DARKSEID WITH STAFF - JUSTICE LEAGUE',
    description:
      'The fate of the world depends on the alliance of heroes and warriors in Zach Snyder s Justice League. Build a strong Justice League team, and collection, with the Pop! Darkseid. Vinyl figure is approximately 4.5-inches tall.',
    price: 9990,
    pictureUrl: darkseid,
    stock: 2
  },
  {
    id: '8',
    title: 'LUKE SKYWALKER WITH GROGU - THE MANDALORIAN',
    description:
      'Celebrate the most stellar fandom of them all and the bounty hunting escapades of Star Wars™ The Mandalorian™ with Pop! Luke Skywalker with Grogu. Vinyl bobblehead is approximately 4.75-inches tall.',
    price: 11780,
    pictureUrl: skywalker,
    stock: 1
  },
  {
    id: '9',
    title: 'DARTH MAUL WITH LIGHTSABER - STAR WARS',
    description:
      'Darth Sidious apprentice Darth Maul resurfaces to fight for a spot in you STAR WARS™ collection as Pop! Darth Maul. Vinyl bobblehead is approximately 4.25-inches tall.',
    price: 9420,
    pictureUrl: darthMaul,
    stock: 3
  },
  {
    id: '10',
    title: 'AHSOKA WITH SABERS - THE MANDALORIAN',
    description:
      'Once an eager padawan, Ahsoka Tano has proven to be a capable warrior through her victories in various battles throughout the Clone Wars. Celebrate the most stellar fandom of them all with the Star Wars™ The Manadolrian™ Pop! of Ahsoka Tano. Vinyl bobblehead is approximately 4.75-inches tall.',
    price: 9800,
    pictureUrl: ahsoka,
    stock: 0
  },
  {
    id: '11',
    title: 'GROGU USING THE FORCE LIGHTS & SOUND - THE MANDALORIAN',
    description:
      'Seated on a Seeing Stone, Grogu uses for the Force to reach out to other Jedi who can potentially sense the call and offer help. Complete your collection of Star Wars™ The Mandalorian™ with Pop! Deluxe Grogu Using the Force. This special figure also emits sounds and lights up when activated, adding to the atmosphere of your collections display! Two AA batteries are included with this collectible figure. Vinyl bobblehead is approximately 4.75-inches tall.',
    price: 15100,
    pictureUrl: grogu,
    stock: 7
  },
  {
    id: '12',
    title: 'LEVI - ATTACK ON TITAN',
    description:
      'Pop! Levi is armed and ready to lead the next mission in your Attack on Titan collection. Levi Ackerman is a skilled soldier and dedicated to ending the reign of terror the Titans unleash upon the world. Vinyl figure is approximately 4.15-inches tall.',
    price: 10750,
    pictureUrl: levi,
    stock: 3
  },
  {
    id: '13',
    title: 'DEXTER WITH REMOTE - DEXTER S LABORATORY',
    description:
      'The USAs fate is in, kid-genius, Dexter s hands in this 90s Cartoon Network show. Bring Pop! Dexter with Remote into your Dexter s Laboratory collection and he will create all kinds of experiments and gadgets when you are not looking. Vinyl figure is approximately 3.25-inches tall.',
    price: 7540,
    pictureUrl: dexter,
    stock: 5
  },
  {
    id: '14',
    title: 'SHERIFF DEADPOOL RIDING HORSEY',
    description:
      'Giddy up! Just when you thought the merc with the mouth coul not get any cooler he rides in on a horse. (At least a coin operated one.) This Funko exclusive Pop! Ride Sheriff Deadpool Riding Horsey is irresistible to your Marvel collection. Vinyl bobblehead is approximately 4.75-inches tall.',
    price: 7999,
    pictureUrl: deadpool,
    stock: 2
  },
  {
    id: '15',
    title: 'DUNCAN IDAHO - DUNE',
    description:
      'The swordmaster, Duncan Idaho, is searching to protect Duke Atreides son, Paul. Help Pop! Duncan Idaho find Paul in your Dune collection so that he may teach him the art of war. Vinyl figure is approximately 4.25-inches tall.',
    price: 8200,
    pictureUrl: duncan,
    stock: 6
  },
  {
    id: '16',
    title: 'DOC WITH HELMET - BACK TO THE FUTURE',
    description:
      'Back to the Future celebrates its 35th anniversary, Doc Brown and Marty McFly come together for the festivities as a collection of Pop! Vinyls. Bring back one of the best parts of the past with Pop! Doc Brown with helmet. Collectible is approximately 4.75-inches tall',
    price: 6899,
    pictureUrl: emmet,
    stock: 12
  },
];

export const products = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (array_products.length === 0) {
      reject('Se ha producido un error! :(');
    } else {
      resolve(array_products);
      console.log(array_products);
    }
  }, 3000);
});
