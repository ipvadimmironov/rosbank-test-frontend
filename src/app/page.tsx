import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Test Page</div>
      <div className="flex gap-4 justify-center">
        <Link href="/todos">todos</Link>
        <Link href="/login">Login</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </>
  );
}
