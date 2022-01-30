const array_products = [
  {
    id: '1',
    title: 'CONCEPT SERIES STORMTROOPER WITH SHIELD AND LIGHTSABER - STAR WARS',
    description:
      'This special series of Star Wars™ Pops! is based on the character concept art by Ralph McQuarrie. Bring home a piece of the stellar saga with the Funko exclusive Pop! Stormtrooper. Vinyl bobblehead is approximately 4.25-inches tall.',
    price: 11500,
    pictureUrl: 'https://picsum.photos/300/200',
  },
  {
    id: '2',
    title: 'TANJIRO KAMADO - DEMON SLAYER',
    description:
      'Only two of the Kamado family survived a demon attack, and now Tanjiro and Nezuko are out for revenge. Expand your Demon Slayer collection with Pop! Tanjiro Kamado. Vinyl figure is approximately 4.25-inches tall.',
    price: 9399,
    pictureUrl: 'https://picsum.photos/300/200',
  },
  {
    id: '3',
    title: 'ZENITSU AGATSUMA - DEMON SLAYER',
    description:
      'Only two of the Kamado family survived a demon attack, and now Tanjiro and Nezuko are out for revenge. Expand your Demon Slayer collection with Pop! Zenitsu Agatsuma. Vinyl figure is approximately 4-inches tall.',
    price: 9399,
    pictureUrl: 'https://picsum.photos/300/200',
  },
  {
    id: '4',
    title: 'SAITAMA - ONE PUNCH MAN',
    description:
      'He rigorously trained to be a great superhero, but the problem is…he s too good at fighting. His name is true, he can defeat any opponent in one punch, and, due to the lack of challenge, that s why Saitama struggles with depression. Collect Pop! Saitama for your One Punch Man collection to pit the superhero against worthy opponents. Vinyl figure is approximately 4-inches tall.',
    price: 10000,
    pictureUrl: 'https://picsum.photos/300/200',
  },
  {
    id: '5',
    title: 'WALL-E',
    description:
      'Bring home the adorable trash compacting robot from Disney Pixars Wall-E with Pop! Wall-E. He may not be able to clean your room for you but he is sure to make you smile when you see him. Collectible stands approximately 3.75-inches tall.',
    price: 7180,
    pictureUrl: 'https://picsum.photos/300/200',
  },
  {
    id: '6',
    title: 'BATMAN - THE BATMAN',
    description:
      'Join The Caped Crusader™, Batman, in his early years of fighting crime in Gotham City. Celebrate one of DC Comics most recognizable superheroes by adding Pop! Batman to your DC The Batman movie collection. Vinyl figure is approximately 4.25-inches tall.',
    price: 8290,
    pictureUrl: 'https://picsum.photos/300/200',
  },
  {
    id: '7',
    title: 'DARKSEID WITH STAFF - JUSTICE LEAGUE',
    description:
      'The fate of the world depends on the alliance of heroes and warriors in Zach Snyder s Justice League. Build a strong Justice League team, and collection, with the Pop! Darkseid. Vinyl figure is approximately 4.5-inches tall.',
    price: 9990,
    pictureUrl: 'https://picsum.photos/300/200',
  },
  {
    id: '8',
    title: 'LUKE SKYWALKER WITH GROGU - THE MANDALORIAN',
    description:
      'Celebrate the most stellar fandom of them all and the bounty hunting escapades of Star Wars™ The Mandalorian™ with Pop! Luke Skywalker with Grogu. Vinyl bobblehead is approximately 4.75-inches tall.',
    price: 11780,
    pictureUrl: 'https://picsum.photos/300/200',
  },
  {
    id: '9',
    title: 'DARTH MAUL WITH LIGHTSABER - STAR WARS',
    description:
      'Darth Sidious apprentice Darth Maul resurfaces to fight for a spot in you STAR WARS™ collection as Pop! Darth Maul. Vinyl bobblehead is approximately 4.25-inches tall.',
    price: 9420,
    pictureUrl: 'https://picsum.photos/300/200',
  },
  {
    id: '10',
    title: 'AHSOKA WITH SABERS - THE MANDALORIAN',
    description:
      'Once an eager padawan, Ahsoka Tano has proven to be a capable warrior through her victories in various battles throughout the Clone Wars. Celebrate the most stellar fandom of them all with the Star Wars™ The Manadolrian™ Pop! of Ahsoka Tano. Vinyl bobblehead is approximately 4.75-inches tall.',
    price: 9800,
    pictureUrl: 'https://picsum.photos/300/200',
  },
  {
    id: '11',
    title: 'GROGU USING THE FORCE LIGHTS & SOUND - THE MANDALORIAN',
    description:
      'Seated on a Seeing Stone, Grogu uses for the Force to reach out to other Jedi who can potentially sense the call and offer help. Complete your collection of Star Wars™ The Mandalorian™ with Pop! Deluxe Grogu Using the Force. This special figure also emits sounds and lights up when activated, adding to the atmosphere of your collections display! Two AA batteries are included with this collectible figure. Vinyl bobblehead is approximately 4.75-inches tall.',
    price: 15100,
    pictureUrl: 'https://picsum.photos/300/200',
  },
];

export const products = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (array_products.length === 0) {
      reject('Se ha producido un error! :(');
    } else {
      resolve(array_products);
    }
  }, 2000);
});
