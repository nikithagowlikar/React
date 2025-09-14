import AccordianList from "./AccordianList";

const Accordian = ({ data, show, setShowAccordian }) => {
  const handleOpen = () => {
    // setShow(!show);
    setShowAccordian();
  };
  const { title, itemCards } = data?.card?.card;
  console.log("data@@@@@@", data);
  return (
    <>
      {" "}
      {/* header */}
      <div
        className="mx-auto bg-gray-100 w-8/12 shadow-md"
        onClick={() => {
          handleOpen();
        }}
      >
        <div className="flex justify-between px-8 py-2">
          <div className="font-bold">
            {title} ({itemCards?.length})
          </div>
          <div>⬇️</div>
        </div>
        {show &&
          itemCards &&
          itemCards?.map((item, index) => {
            return (
              <div key={index}>
                <AccordianList listData={item} />
              </div>
            );
          })}
      </div>
      {/* container */}
    </>
  );
};
export default Accordian;
