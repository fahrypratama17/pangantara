import { ArrowLeft, ArrowRight } from "lucide-react";

const Tentang = () => {
  return (
    <div>
      <div className="mx-auto mt-20 w-[60%] rounded-[20px] bg-linear-to-r from-green-900 to-green-400 p-1">
        <div className="rounded-[16px] bg-green-50 p-20 text-center">
          <div className="mb-5 flex justify-center gap-1">
            <div className="h-2.5 w-13.25 rounded-2xl bg-orange-500"></div>
            <div className="h-2.5 w-2.5 rounded-2xl bg-green-500"></div>
            <div className="h-2.5 w-2.5 rounded-2xl bg-green-500"></div>
          </div>
          <p className="text-xl-medium px-13">
            Pangantara adalah platform digital yang menghubungkan Satuan
            Pelayanan Pemenuhan Gizi (SPPG) dengan pedagang pasar dan supplier
            lokal untuk mendukung kelancaran distribusi bahan pangan dalam
            program Makan Bergizi Gratis (MBG).
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 py-18 pb-20">
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-green-900 bg-orange-50 text-green-900 shadow-[4px_4px_0px_0px_#0f301040] transition-all duration-150 hover:bg-green-900 hover:text-white active:translate-x-1 active:translate-y-1 active:shadow-none">
          <ArrowLeft size={30} />
        </div>
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-green-900 bg-orange-50 text-green-900 shadow-[4px_4px_0px_0px_#0f301040] transition-all duration-150 hover:bg-green-900 hover:text-white active:translate-x-1 active:translate-y-1 active:shadow-none">
          <ArrowRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default Tentang;
