import Image from 'next/image';
import logo from './logo.svg';

export default function Logo() {
  return <Image src={logo} alt='Marvel logo' priority />;
}
