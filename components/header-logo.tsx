import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/logo.svg" alt="Logo" height={100} width={100} />
        <p className="font-semibold text-white text-2xl ">
          Expense
        </p>
      </div>
    </Link>
  );
}

