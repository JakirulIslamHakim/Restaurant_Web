const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center w-1/3 mx-auto">
      <p className="text-yellow-600 italic text-xl ">--- {heading} ---</p>
      <h3 className="uppercase text-3xl border-y-2 py-4 mt-2 ">{subHeading}</h3>
    </div>
  );
};

export default SectionTitle;
