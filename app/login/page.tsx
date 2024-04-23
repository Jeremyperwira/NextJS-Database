import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { lusitana } from '@/app/ui/fonts';
import { ClerkProvider } from '@clerk/nextjs'


export default function LoginPage() {
  return (
    
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-green-900 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            {/* <AcmeLogo /> */}
                <p className={`${lusitana.className} flex justify-center align-center font-bold text-xl text-white md:text-3xl md:leading-normal `}> PasarKu</p>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
    
  );
}