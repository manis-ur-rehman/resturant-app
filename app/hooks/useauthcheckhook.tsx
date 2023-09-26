import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const UseAuthCheckHook = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    (function () {
      setLoading(true);
      fetch("/api/auth")
        .then((res) => res.json())
        .then((data) => {
          if (data.authStatus) {
            router.push("/dashboard");
          } else {
            setLoading(false);
          }
        })
        .catch((err) => {
          setLoading(false);
        });
    })();
  }, []);
  return {
    loading,
    setLoading,
  };
};

export default UseAuthCheckHook;
