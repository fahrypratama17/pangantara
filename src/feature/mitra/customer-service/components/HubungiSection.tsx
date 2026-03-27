import ChatCard from "@/feature/mitra/customer-service/components/ChatCard";
import EmailCard from "@/feature/mitra/customer-service/components/EmailCard";

const CustomeServiceSection = () => {
  return (
    <section>
      <div className="shadow-[0_4px_2px_#0000000A]">
        <div className="flex w-[90%] items-center justify-between px-12 py-7">
          <h1 className="text-2xl-bold text-green-900">
            Ringkasan Dashboard Mitra
          </h1>
          <div className="flex items-center gap-4">
            <div className="h-13 w-13 rounded-full bg-orange-600"></div>
            <div>
              <p className="text-xl-bold text-green-800">Tani Jaya Makmur</p>
              <p className="text-sm-semibold text-green-400">Sup - 101</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[85%] flex-col items-start justify-between gap-12 px-12 py-7">
        <div className="flex flex-col gap-2 text-green-700">
          <h1 className="text-[20px] font-bold text-green-800 md:text-[36px]">
            Butuh Bantuan Lebih Lanjut?
          </h1>
          <p className="text-[10px] font-medium text-green-900 md:text-[18px]">
            Pilih metode komunikasi yang paling nyaman bagi Anda. Tim dukungan
            kami siap membantu operasional bisnis Anda.
          </p>
        </div>
        <div className="grid w-[90%] grid-cols-2 items-center justify-center gap-4 md:w-[80%] md:gap-6">
          <ChatCard />
          <EmailCard />
        </div>
      </div>
    </section>
  );
};

export default CustomeServiceSection;
