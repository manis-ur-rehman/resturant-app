"use client";

import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const handleLogout = () => {
    fetch("/api/auth/logout")
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        alert(data);
        router.push("/login");
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };
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
