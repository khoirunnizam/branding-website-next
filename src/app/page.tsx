import Beranda from "./Page/Beranda/page";
import Blog from "./Page/Blog/page";
import Kontak from "./Page/Kontak/page";
import Program from "./Page/Program/page";
import Tentang from "./Page/Tentang/page";

const Home = () => {
  return (
    <>
      <Beranda />
      <Tentang />
      <Program />
      <Blog />
      <Kontak />
    </>
  );
};

export default Home;
