import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="w-full">
        <img
          src="https://picsum.photos/seed/store-hero1/1600/300"
          alt="New Collection — Up to 20% off"
          className="h-auto w-full object-cover"
        />
      </div>

      <Navbar />
    </>
  );
};

export default Header;
