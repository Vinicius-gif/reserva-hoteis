import Image from 'next/image';

import hoteis from '../data/hoteis.json';

export default function Home() {
  return (
    <main>
      Helo World!
      <Image src={hoteis[0].imagens[0]} alt="hotel" width={100} height={100} />
    </main>
  );
}
