const SPPG = () => {
  return (
    <div className="mx-auto mt-20 mb-20 flex w-[85%] items-center justify-center gap-6 rounded-tl-[100px] rounded-br-[100px] border">
      <div className="px-20 py-5">
        <div className="flex items-center justify-center">
          <p className="inline rounded-[100px] border px-12 text-[36px]">
            Alur untuk tim SPPG
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
              <p className="text-center text-[30px]">Identifikasi Kebutuhan</p>
              <p className="text-[20px]">
                Input daftar kebutuhan bahan pangan harian atau mingguan melalui
                dasbor manajemen stok SPPG.
              </p>
            </div>

            <div className="flex w-80 flex-col items-center justify-center gap-6 rounded-2xl border p-4">
              <p className="text-center text-[30px]">Pilih Supplier Terbaik</p>
              <p className="text-[20px]">
                Bandingkan harga dan kualitas dari ratusan mitra supplier
                terpercaya yang paling dekat dengan lokasi Anda,
              </p>
            </div>

            <div className="flex w-80 flex-col items-center justify-center gap-6 rounded-2xl border p-4">
              <p className="text-center text-[30px]">Terima & Verifikasi</p>
              <p className="text-[20px]">Barang dikirim langsung ke dapur.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SPPG;
