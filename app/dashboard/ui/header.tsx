import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex flex-row items-center justify-between p-5 ">
            <div className="flex items-end px-5 ">
                <Image
                    src={'/customers/evil-rabbit.png'}
                    alt="Acme Logo"
                    width={50}
                    height={50}
                    className="rounded-full "
                />
            </div>

            <div className="flex justify-center flex-1">
                <div className=" flex space-x-5 text-lg gap-5 ">
                    <Link href={'/dashboard'}>Dashb oard</Link>
                    <Link href={'/dashboard/customers'}>Customers</Link>
                    <Link href={'/dashboard/invoices'}>Invoices</Link>
                    {/* <Link href={"/dashboard/settings"}>Settings</Link> */}
                </div>
            </div>
        </header>
    );
}
