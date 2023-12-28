import { Parallax } from "react-parallax";

const SectionCover = ({ img, heading, subHeading }) => {
  return (
    <Parallax
      blur={{ min: -20, max: 20 }}
      bgImage={img}
      bgImageAlt={heading}
      strength={-400}
    >
      <div
        className="hero h-[600px]"
        style={
          {
            //   backgroundImage: `url(${img})`,
          }
        }
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content rounded-lg py-20 px-60 bg-black bg-opacity-30">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{heading} </h1>
            <p className="mb-5"> {subHeading} </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default SectionCover;
