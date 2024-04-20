import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';

<div className={styles.shape} />;
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '/favicon.ico';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
        
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-white-50 px-6 py-10 md:w-2/5 md:px-20">
        <Image
        src="/header.png"
        width={1000}
        height={760}
        sizes='fill'
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
          {/* <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"/> */}
            <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`} >
            Selamat Datang di <strong>PasarKu.</strong> Pantau harga di seluruh pasar secara real time melalui{' '}
            <a href="https://panelharga.badanpangan.go.id/" className="text-green-900">
              Badan Pangan Nasional
            </a>
          </p>

          <Image
        src="/bpn.png"
        width={100}
        height={60}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
          />
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-green-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-yellow-500 md:text-base"
          >
            <span >Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
        src="/mobile-removebg-preview.png"
        width={1000}
        height={600}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
          />
          
        </div>
      </div>
    </main>
  );
}
