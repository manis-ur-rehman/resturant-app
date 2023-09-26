"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Loading from "@/app/loading";

const Header = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const handleLogout = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/auth/logout");
      await res.json();
      router.push("/login");
    } catch (error) {
      setLoading(false);
    }
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 absolute h-20 w-full flex justify-between items-center p-5">
      <h1 className="font-bold text-xl text-center">Restaurant Application</h1>
      <div>
        <button
          className="bg-transparent hover:bg-blue-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
