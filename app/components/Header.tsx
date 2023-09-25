"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Loading from "@components/loading";

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
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="bg-red-200 absolute h-20 w-full flex justify-between items-center p-5">
      <p>Header start</p>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
