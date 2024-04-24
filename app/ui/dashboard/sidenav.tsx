import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { lusitana } from '@/app/ui/fonts';
/* Sign Out Build*/
import { UserButton } from '@clerk/nextjs';
/* Sign Out Custom*/
import { useClerk } from "@clerk/clerk-react";
import { useRouter } from 'next/navigation'


// const SignOutButton = () => {
//   const { signOut } = useClerk();
//   const router = useRouter()

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      
        <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-green-900 p-4 md:h-40 "
        href="/">
          <div className="w-48 text-white ">        
              <p className={`${lusitana.className} font-bold text-xl text-white md:text-3xl md:leading-normal `}> PasarKu</p>
              <h1 className='sm:w-48 lg:w-108 text-sm hover:text-green-100'> Selamat Datang, [user.name] Akses Informasi terbaru terkait harga secara langsung.</h1>
          </div>
        </Link>
      
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>

{/* Build In Signed Out */}
          <div className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-green-100 hover:text-green-600 md:flex-none md:justify-start md:p-2 md:px-3">
            {/* <PowerIcon className="w-6" /> */}
            <UserButton></UserButton>
            <div className="${lusitana.className} hidden md:block">Kelola Akun</div>
          </div>
{/* Build In Signed Out */}


{/* =================================================== */}
{/* Custom In Signed Out */}
{/* 
            <button onClick={() => signOut(() => router.push("/"))}>
             Sign out
            </button> */}


      </div>
    </div>
  );
}
