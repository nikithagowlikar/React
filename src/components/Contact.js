const Contact = () => {
  return (
    <div className="flex justify-center m-7">
      <h1 className="font-bold text-3xl">Contact Page!!!!!</h1>
      <div className="flex gap-3">
        <input
          className="p-3 border-2 border-gray-500 rounded-3xl"
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          className="p-3 border-2 border-gray-500 rounded-3xl"
          name="phoneNumber"
          type="text"
          placeholder="mobile"
        />
        <button className="px-3 bg-green-400 text-black rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};
export default Contact;
