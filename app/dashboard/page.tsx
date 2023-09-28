import { StorageType } from "@/globaltypes";
import Layout from "@components/Layout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import RestaurantCard from "@components/RestaurantCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchRestaurants = async () => {
  const restaurants = await prisma.products.findMany({
    select: {
      id: true,
      title: true,
      image: true,
      description: true,
    },
  });
  return restaurants;
};

const Dashboard = async () => {
  const cookieStore = cookies();
  if (!cookieStore.get(StorageType.TOKEN)) {
    redirect("/login");
  }
  const restaurants = await fetchRestaurants();

  return (
    <Layout>
      {
        <div className="mt-20">
          <div className="py-20 px-36 flex flex-wrap justify-center gap-5">
            {restaurants.map((item, i) => (
              <RestaurantCard item={item} key={i} />
            ))}
          </div>
        </div>
      }
    </Layout>
  );
};

export default Dashboard;
