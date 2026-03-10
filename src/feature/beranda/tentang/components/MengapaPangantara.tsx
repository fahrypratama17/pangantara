import { MengapaPangantaraData } from "@/feature/beranda/tentang/data/data";
import Image from "next/image";

const MengapaPangantara = () => {
  return (
    <div className="mx-auto flex w-[85%] flex-col items-center justify-center py-7.5">
      <div className="mb-20 flex w-[75%] items-center justify-center gap-2 rounded-3xl bg-[#FFFFFF] py-2">
        <h1 className="text-[48px] text-blue-900">
          Mengapa harus PANGAN<span className="text-blue-600">TARA</span> ?
        </h1>
      </div>
      <div className="flex gap-10">
        {MengapaPangantaraData.map((item) => (
          <div
            className="flex flex-col items-center justify-center gap-10 rounded-2xl border px-10 py-10"
            key={item.id}
          >
            <Image src={item.icon} alt="icon" width={70} height={70} />
            <div className="text-center">{item.title}</div>
            <div className="rounded-2xl border bg-[#FFFFFF] p-8 text-center">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20 flex w-[85%] items-center justify-center gap-6">
        <div className="rounded-tl-[100px] rounded-br-[100px] border px-20 py-5">
          <p className="text-center text-[24px]">
            Distribusi pangan yang baik bukan hanya tentang makanan sampai ke
            penerima, tapi juga tentang memberdayakan supplier lokal, memperkuat
            pasar tradisional, dan memastikan rantai pasok berjalan lebih
            efisien.
          </p>
        </div>

        <Image src={"logo/logo.svg"} alt={"logo"} width={200} height={200} />
      </div>
    </div>
  );
};

export default MengapaPangantara;
