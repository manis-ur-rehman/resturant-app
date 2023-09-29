import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const UseAuthCheckHook = ({ statusReturn }: { statusReturn: boolean }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    (function () {
      setLoading(true);
      fetch("/api/auth")
        .then((res) => res.json())
        .then((data) => {
          if (statusReturn) {
            if (data.authStatus) {
              setToken(data.getToken);
              setLoading(false);
            } else {
              router.push("/login");
            }
          } else {
            if (data.authStatus) {
              setToken(data.getToken);
              router.push("/dashboard");
            } else {
              setLoading(false);
            }
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
    token,
  };
};

export default UseAuthCheckHook;
