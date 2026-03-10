import Mitra from "@/feature/beranda/penggunaan/components/Mitra";
import SPPG from "@/feature/beranda/penggunaan/components/SPPG";

const PenggunaanSection = () => {
  return (
    <div className="rounded-t-[100px] bg-[#FFFFFF]">
      <div className="flex items-center gap-4 pt-20">
        <div className="h-4 w-full rounded-r-2xl bg-[#D9D9D9]"></div>
        <div className="w-[1000px] text-center text-7xl font-bold">
          Alur <span className="text-6xl">Penggunaan</span>
        </div>
        <div className="h-4 w-[86px] rounded-l-2xl bg-[#D9D9D9]"></div>
      </div>
      <Mitra />
      <SPPG />
    </div>
  );
};

export default PenggunaanSection;
