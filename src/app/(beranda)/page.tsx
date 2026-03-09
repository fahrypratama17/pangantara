import HeroContainer from "@/feature/beranda/hero/container/HeroContainer";
import TentangContainer from "@/feature/beranda/tentang/container/TentangContainer";

const page = () => {
  return (
    <main>
      <HeroContainer />
      <TentangContainer />
    </main>
  );
};

export default page;
