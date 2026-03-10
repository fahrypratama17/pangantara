import { ArrowLeft, ArrowRight } from "lucide-react";

const Tentang = () => {
  return (
    <div>
      <div className="mx-auto mt-20 w-[60%] rounded-[20px] border bg-[#FFFFFF] p-20 text-center">
        <div className="mb-5 flex justify-center gap-3">
          <div className="h-2 w-[53px] rounded-2xl bg-[#D9D9D9]"></div>
          <div className="h-2 w-[8px] rounded-2xl bg-[#D9D9D9]"></div>
          <div className="h-2 w-[8px] rounded-2xl bg-[#D9D9D9]"></div>
        </div>
        <p className="px-27">
          Pangantara adalah platform digital yang menghubungkan Satuan Pelayanan
          Pemenuhan Gizi (SPPG) dengan pedagang pasar dan supplier lokal untuk
          mendukung kelancaran distribusi bahan pangan dalam program Makan
          Bergizi Gratis (MBG).
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 py-10 pb-20">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border">
          <ArrowLeft width={30} height={30} />
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full border">
          <ArrowRight width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default Tentang;
