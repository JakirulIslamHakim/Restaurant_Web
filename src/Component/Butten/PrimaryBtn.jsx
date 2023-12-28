const PrimaryBtn = ({ btnText }) => {
  return (
    <div className="text-center">
      <button className="btn btn-outline mt-2 font-semibold outline-none border-0 uppercase border-b-4 border-black">
        {btnText}
      </button>
    </div>
  );
};

export default PrimaryBtn;
