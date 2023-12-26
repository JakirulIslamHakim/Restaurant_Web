const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center w-1/2 md:w-1/3 mx-auto my-7">
      <p className="text-[#D99904] italic text-xl ">--- {heading} ---</p>
      <h3 className="uppercase text-3xl border-y-2 py-4 mt-2 ">{subHeading}</h3>
    </div>
  );
};

export default SectionTitle;
