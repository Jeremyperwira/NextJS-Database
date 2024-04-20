'use client';
// ditambah diakhir ini coy + import { usePathname } from 'next/navigation';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  ComputerDesktopIcon,
  GlobeAsiaAustraliaIcon,
  MapIcon,
  
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Beranda', 
    href: '/dashboard', 
  
    icon: HomeIcon },
  {
    name: 'Harga Provinsi',
    href: '/dashboard/invoices',
    icon: GlobeAsiaAustraliaIcon,
  },
  { name: 'Harga Wilayah', 
    href: '/dashboard/customers', 
    icon: MapIcon },
  {
    name: 'API Test',
    href: '/dashboard/testpage',
    icon: ComputerDesktopIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium text-black hover:bg-green-200 hover:text-green-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-green-900 text-white': pathname === link.href,
              },
            )}
            >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>

          // <a
          //   key={link.name}
          //   href={link.href}
          //   className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          // >
          //   <LinkIcon className="w-6" />
          //   <p className="hidden md:block">{link.name}</p>
          // </a>

          
        );
      })}
    </>
  );
}
