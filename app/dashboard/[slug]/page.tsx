import Title from "@components/Title";
import Images from "@components/Images";
import Layout from "@components/Layout";
import Rating from "@components/Rating";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchRestaurantItems = async (productId: number) => {
  try {
    const restaurantItems = await prisma.items.findFirst({
      where: {
        product_id: productId,
      },
      select: {
        id: true,
        title: true,
        images: true,
        description: true,
        product_id: true,
      },
    });
    return restaurantItems;
  } catch (error) {
    return null;
  }
};

export default async function Page({ params }: { params: { slug: string } }) {
  const items = await fetchRestaurantItems(Number(params.slug));

  return (
    <Layout>
      <div className="flex m-auto w-full justify-between items-start 0 mt-20">
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <Title title={items?.title} />
          <Rating />
          <div className="mt-4">
            <p className="text-lg font-light">{items?.description}</p>
          </div>
          {items?.images && <Images images={items.images} />}
        </div>
      </div>
    </Layout>
  );
}
