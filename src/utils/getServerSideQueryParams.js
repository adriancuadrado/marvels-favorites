import { createHash } from 'node:crypto';

let ts = 0;

// https://stackoverflow.com/a/74933512
const hash = () => {
  const hashFunc = createHash('md5');
  hashFunc.update(
    `${ts++}${process.env.PRIVATE_KEY}${process.env.NEXT_PUBLIC_KEY}`
  );
  return hashFunc.digest('hex');
};

// https://developer.marvel.com/documentation/authorization
// Cuando la request se hace desde el servidor hay que añadir
// la private key hasheada con el timestamp y la public key
const getServerSideQueryParams = () => ({
  ts,
  hash: hash(),
});

export default getServerSideQueryParams;
