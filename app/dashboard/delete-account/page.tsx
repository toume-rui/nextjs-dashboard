import AcmeLogo from '@/app/ui/acme-logo';

import { Metadata } from 'next';
import DeleteAccountForm from '../../ui/delete-account-form';

export const metadata: Metadata = {
  title: 'deleteAccount | Acme Dashboard',
};
export default function DeleteAccount() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <DeleteAccountForm />
      </div>
    </main>
  );
}
