import bg from "@/assets/bg/pattern-bg-desktop.png";
import { useLocation } from "@/hooks/context/location";
import { useRef } from "react";
import arrow from "@/assets/icons/icon-arrow.svg";
import useFetchLocation from "@/hooks/custom/useFetchLocation";

interface Props {
  error: string;
}

const Header: React.FC<Props> = ({ error }) => {
  const data = useLocation((state) => state);
  const { fetchData, isLoading } = useFetchLocation();
  const inputRef = useRef<HTMLInputElement>(null);

  const onInputButtonClickHandler = () => {
    const inputValue = inputRef.current!.value;

    fetchData(inputValue);
  };

  return (
    <div
      className="h-[35%] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="text-center flex flex-col gap-5 pt-8 m-auto">
        <h1 className="font-RubikMed lg:text-4xl text-2xl text-white ">
          IP Address Tracker
        </h1>
        <div className="flex justify-center">
          <input
            ref={inputRef}
            className="w-[300px] xs:w-[600px] lg:w-[700px] px-6 py-4 rounded-tl-xl rounded-bl-xl text-[18px] outline-none cursor-pointer"
            placeholder="Search for any IP address or domain"
          />
          <button
            onClick={onInputButtonClickHandler}
            className="bg-black rounded-tr-xl rounded-br-xl px-6 cursor-pointer hover:opacity-70"
          >
            <img src={arrow} className="min-w-[10px]" />
          </button>
        </div>
        {error && <p className="text-red-500 font-RubikMed">{error}</p>}
      </div>
      <ul
        className="bg-white rounded-xl p-8 shadow w-10/12 md:h-46 mx-auto grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-4 lg:text-left mt-10 relative"
        style={{
          zIndex: 10000,
        }}
      >
        {isLoading && (
          <p className="text-green-700 flex justify-center items-center">
            Loading...
          </p>
        )}
        {!isLoading && (
          <>
            <li className="lg:border-r lg:border-slate-400 md:p-6 p-2">
              <p className="font-RubikBold text-sm text-slate-500 tracking-widest">
                IP ADDRESS
              </p>
              <p className="font-RubikMed text-xl md:text-[28px]">{data.ip}</p>
            </li>
            <li className="lg:border-r lg:border-slate-400 md:p-6 p-2">
              <p className="font-RubikBold text-[13px] text-gray-400 tracking-widest">
                LOCATION
              </p>
              <p className="font-RubikMed text-xl md:text-[28px] leading-8 ">
                {data.location.city}, {data.location.region}
              </p>
            </li>
            <li className="lg:border-r lg:border-slate-400 md:p-6 p-2">
              <p className="font-RubikBold text-[13px] text-gray-400 tracking-widest">
                TIMEZONE
              </p>
              <p className="font-RubikMed text-xl md:text-[28px]">
                UTC {data.location.timezone}
              </p>
            </li>
            <li className="md:p-6 p-2">
              <p className="font-RubikBold text-[13px] text-gray-400 tracking-widest">
                ISP
              </p>
              <p className="font-RubikMed text-xl md:text-[28px] leading-8">{data.isp}</p>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Header;
