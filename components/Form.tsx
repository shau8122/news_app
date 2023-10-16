import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Form = () => {
  const router= useRouter()
  const [data, setData] = useState({
    email: "",
    name: "",
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
      axios.post('/api/subscribe',data)
      .then(()=>{
        alert('registration successful');
        location.reload();
      })
      .catch(()=>{
        console.log("some error occured in post request for registeration")
        alert('some error occured');
      })
    
    console.log(data);
  };
  return (
    <div className="flex flex-1  justify-center items-center ">
      <div className="flex justify-center flex-col gap-2 items-center w-full  md:w-1/2 h-1/2">
        <h1 className="text-sm md:text-xl font-semibold text-slate-800">Subscribe to our Newsletter </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center items-center"
        >
          <div className="w-5/6 flex justify-center items-center">
            <input
              type="text"
              className="w-full p-2 m-2  text-rose-950 placeholder-slate-400 rounded-lg border-2 border-[#F0274F]
            focus:outline-none
            focus:invalid:bg-[#F1CAD2]
            focus:invalid:border-4"
              placeholder="Name"
              name="name"
              value={data.name}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  [e.target.name]: e.target.value,
                }))
              }
              required
            />
          </div>
          <div className="w-5/6 flex justify-center items-center">
            <input
              type="email"
              className="w-full p-2 m-2  text-rose-950 placeholder-slate-400 rounded-lg border-2 border-[#F0274F]
              focus:outline-none
              focus:invalid:bg-[#F1CAD2]
              focus:invalid:border-4
            "
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={(e) =>
                setData((prevData) => ({
                  ...prevData,
                  [e.target.name]: e.target.value,
                }))
              }
              required
            />
          </div>

          <div className="w-5/6  flex justify-between  items-center">
            <button
              type="submit"
              className="flex w-[96%] justify-center items-center px-8 py-2 m-2 bg-[#F0274F] text-white cursor-pointer font-bold text-lg rounded-lg"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
