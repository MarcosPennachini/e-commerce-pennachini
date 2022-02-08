import saitama from './assets/img/saitama_funko.png';

const item = [
  {
    id: '4',
    title: 'SAITAMA - ONE PUNCH MAN',
    description:
      'He rigorously trained to be a great superhero, but the problem is…he s too good at fighting. His name is true, he can defeat any opponent in one punch, and, due to the lack of challenge, that s why Saitama struggles with depression. Collect Pop! Saitama for your One Punch Man collection to pit the superhero against worthy opponents. Vinyl figure is approximately 4-inches tall.',
    price: 10000,
    pictureUrl: saitama,
    stock: 1,
  },
];

export const getItem = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (item.length === 0) {
      reject('Se ha producido un error en la promesa');
    } else {
      resolve(item);
    }
  }, 2000);
});
