import Image from "next/image";

const Stats = () => {
  return (
    <div className="mx-auto flex w-[85%] flex-col items-center justify-center pt-20">
      <div className="flex h-[214px] w-full items-center justify-around gap-2 rounded-b-[100px] bg-[#D0D0D0] py-2">
        <div className="mb-40 flex h-[237px] flex-col items-center justify-around rounded-b-2xl bg-[#E8E8E8] p-8">
          <h1 className="rounded-full bg-[#D9D9D9] p-2 px-6">
            Total Mitra Pemasok
          </h1>
          <h1 className="text-7xl">500+</h1>
        </div>
        <div className="mb-40 flex h-[237px] flex-col items-center justify-around rounded-b-2xl bg-[#E8E8E8] p-8">
          <h1 className="rounded-full bg-[#D9D9D9] p-2 px-6">
            Dapur MBG Aktif
          </h1>
          <h1 className="text-7xl">120+</h1>
        </div>
        <div className="mb-40 flex h-[237px] flex-col items-center justify-around rounded-b-2xl bg-[#E8E8E8] p-8">
          <h1 className="rounded-full bg-[#D9D9D9] p-2 px-6">
            Wilayah Jangkauan
          </h1>
          <h1 className="text-7xl">
            25 <span className="text-2xl">Provinsi</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Stats;
