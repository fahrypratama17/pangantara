import Banner from "@/feature/beranda/tentang/components/Banner";
import Stats from "@/feature/beranda/tentang/components/Stats";
import Tentang from "@/feature/beranda/tentang/components/Tentang";
import MengapaPangantara from "@/feature/beranda/tentang/components/MengapaPangantara";

const TentangSection = () => {
  return (
    <div className="bg-[#E8E8E8]">
      <Banner />
      <Stats />
      <div className="flex items-center gap-4 pt-20">
        <div className="h-4 w-[86px] rounded-r-2xl bg-[#D9D9D9]"></div>
        <div className="w-[700px] text-7xl font-bold">
          Tentang <span className="text-6xl">Kami</span>
        </div>
        <div className="h-4 w-full rounded-l-2xl bg-[#D9D9D9]"></div>
      </div>
      <Tentang />
      <MengapaPangantara />
    </div>
  );
};

export default TentangSection;
