import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import FeaturedImg from "../../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <section className={`featured-container my-10 text-white bg-fixed  `}>
      <div className="bg-black bg-opacity-55 h-full">
        <div className="pt-10">
          <SectionTitle
            heading={"Check it out"}
            subHeading={"FROM OUR MENU"}
          ></SectionTitle>
        </div>
        <div className="grid grid-cols-2 justify-center items-center gap-8 py-16 px-40">
          <img className="rounded-lg" src={FeaturedImg} alt="" />
          <div className="leading-6">
            <p className="text-xl"> 20 June 2024 </p>
            <h6 className="text-xl">WHERE CAN I GET SOME?</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline text-white outline-none border-0 uppercase border-b-2 border-white">
              Read More
            </button>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Featured;
