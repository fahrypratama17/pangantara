import Image from "next/image";

const Banner = () => {
  return (
    <div className="mx-auto flex w-[75%] items-center justify-center py-7.5 pt-20">
      <div className="flex w-full items-center justify-center gap-2 rounded-3xl bg-[#FFFFFF] py-2">
        <h1>Bekerja Sama untuk Mendukung Program MBG oleh</h1>
        <Image
          src="/logo/bgn.png"
          alt="Logo Badan Gizi Nasional"
          width={143}
          height={60}
        />
      </div>
    </div>
  );
};

export default Banner;
