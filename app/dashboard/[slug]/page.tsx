import Title from "@components/Title";
import Images from "@components/Images";
import Layout from "@components/Layout";
import Rating from "@components/Rating";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <Layout>
      <div className="flex m-auto w-full justify-between items-start 0 mt-20">
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <Title />
          <Rating />
          <div className="mt-4">
            <p className="text-lg font-light">
              The classics you love prepared with a perfect twist, all served up
              in an atmosphere that feels just right. That’s the Milestones
              promise. So, whether you’re celebrating a milestone, making the
              most of Happy Hour or enjoying brunch with friends, you can be
              sure that every Milestones experience is a simple and perfectly
              memorable one.
            </p>
          </div>
          <Images />
        </div>
      </div>
    </Layout>
  );
}
