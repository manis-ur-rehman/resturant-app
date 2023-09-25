import Link from "next/link";

const AuthLayout = ({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: "Login" | "Sign Up";
  description: string;
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">
          {title}
        </h1>
        {children}
        <p className="mt-4 text-sm text-center text-gray-700">
          {description}
          <Link
            href={
              title === "Sign Up"
                ? "/login"
                : title === "Login"
                ? "/signup"
                : "#"
            }
            className="font-medium text-blue-600 hover:underline"
          >
            {title === "Sign Up" ? "Login" : title === "Login" ? "Sign Up" : ""}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
