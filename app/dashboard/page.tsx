import { StorageType } from "@/globaltypes";
import Layout from "@components/Layout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import RestaurantCard from "@components/RestaurantCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchRestaurants = async () => {
  try {
    const restaurants = await prisma.products.findMany({
      select: {
        id: true,
        title: true,
        image: true,
        description: true,
      },
    });
    return restaurants;
  } catch (error) {
    return [];
  }
};

const Dashboard = async () => {
  const restaurants = await fetchRestaurants();

  const cookieStore = cookies();
  if (!cookieStore.get(StorageType.TOKEN)) {
    redirect("/login");
  }
  return (
    <Layout>
      {
        <div className="mt-20">
          <div className="py-20 px-36 flex flex-wrap justify-center gap-5">
            {restaurants.length > 0 &&
              restaurants.map((item, i) => (
                <RestaurantCard item={item} key={i} />
              ))}
          </div>
        </div>
      }
    </Layout>
  );
};

export default Dashboard;
