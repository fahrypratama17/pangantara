const Mitra = () => {
  return (
    <div className="mx-auto mt-20 mb-20 flex w-[85%] items-center justify-center gap-6 rounded-tl-[100px] rounded-br-[100px] border">
      <div className="px-20 py-5">
        <div className="flex items-center justify-center">
          <p className="inline rounded-[100px] border px-12 text-[36px]">
            Alur untuk Mitra
          </p>
        </div>

        <div className="mt-20 flex w-full flex-col items-center justify-center gap-10">
          <div className="flex items-center justify-center">
            <div className="flex h-30 w-30 items-center justify-center rounded-full border">
              <p className="text-[72px]">01</p>
            </div>

            <div className="h-1 w-70 bg-[#000000]"></div>

            <div className="flex h-30 w-30 items-center justify-center rounded-full border">
              <p className="text-[72px]">02</p>
            </div>

            <div className="h-1 w-70 bg-[#000000]"></div>

            <div className="flex h-30 w-30 items-center justify-center rounded-full border">
              <p className="text-[72px]">03</p>
            </div>
          </div>
          <div className="flex items-start justify-center gap-20">
            <div className="flex w-80 flex-col items-center justify-center gap-6 rounded-2xl border p-4">
              <p className="text-center text-[30px]">
                Pendaftaran & Verifikasi Mitra
              </p>
              <p className="text-[20px]">
                Mitra mendaftar di platform Pangantara dan mengikuti sesi
                verifikasi online dengan tim untuk memastikan kelayakan serta
                standar kualitas.
              </p>
            </div>

            <div className="flex w-80 flex-col items-center justify-center gap-6 rounded-2xl border p-4">
              <p className="text-center text-[30px]">
                Kurasi dan Pendataan Produk
              </p>
              <p className="text-[20px]">
                Tim Pangantara membantu mendata jenis bahan dan kapasitas suplai
                mitra.
              </p>
            </div>

            <div className="flex w-80 flex-col items-center justify-center gap-6 rounded-2xl border p-4">
              <p className="text-center text-[30px]">Menerima Pesanan</p>
              <p className="text-[20px]">
                Mitra dapat menerima pesanan dari SPPG dan mengirimkan bahan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mitra;
