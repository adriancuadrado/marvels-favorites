import Image from 'next/image';

export default ({ empty, className }) => (
  <Image
    src={empty ? '/empty-heart.svg' : '/full-heart.svg'}
    alt='Heart icon'
    className={className}
    width={24}
    height={21.68}
    priority
  />
);
