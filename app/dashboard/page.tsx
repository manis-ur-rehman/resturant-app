import { StorageType } from "@/globaltypes";
import Layout from "@components/Layout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import RestaurantCard from "@components/RestaurantCard";

const Dashboard = () => {
  const cookieStore = cookies();
  if (!cookieStore.get(StorageType.TOKEN)) {
    redirect("/login");
  }
  return (
    <Layout>
      {
        <div className="mt-20">
          <div className="py-20 px-36 flex flex-wrap justify-center gap-5">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
              <>
                <RestaurantCard />
              </>
            ))}
          </div>
        </div>
      }
    </Layout>
  );
};

export default Dashboard;
