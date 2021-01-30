import { useRouter } from "next/router";

export default function Polaroid({ rotate, route, scale, image, children }) {
  const router = useRouter();

  const handleClick = () => {
    if (route) {
      router.push(route);
    }
  };

  return (
    <div
      className={`mx-auto transition-transform transform bg-white p-2.5 lg:p-5 w-48 lg:w-96 ${
        route ? "hover:cursor-pointer" : ""
      } ${rotate} ${scale}`}
      onClick={handleClick}
    >
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className={`h-36 lg:h-72 w-full bg-cover bg-no-repeat bg-center ${scale}`}
      ></div>

      <div className="text-black h-20 lg:h-24 flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
}
