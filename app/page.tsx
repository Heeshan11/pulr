import Image from "next/image";
import logo from "@/public/assets/LogoTagline.svg";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-custom dark:bg-gradient-custom-dark">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-16">

        {/* Logo */}
        <Image
          src={logo}
          alt="Logo"
          width={220} // adjust size as needed
          height={80}
          priority
        />
        
      </main>
    </div>
  );
}
