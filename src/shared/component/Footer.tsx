import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 pb-10">
      <div className="mx-auto grid h-[200px] w-[70%] grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
        <div className="flex flex-col justify-center gap-8">
          <div className="flex items-center">
            <Image src={"logo/logo.svg"} alt={"logo"} width={40} height={40} />
            <p>PANGANTARA</p>
          </div>
          <p className="w-[60%]">
            Solusi pengadaan bahan pangan terintegrasi untuk SPPG di seluruh
            Indonesia
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-bold">Layanan</p>

          <div className="flex flex-col gap-4">
            <p>Cari Suplier</p>
            <p>FAQ</p>
            <p>Customer Service</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-bold">Informasi</p>

          <div className="flex flex-col gap-4">
            <p>Tentang Kami</p>
            <p>Alur Penggunaan</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-bold">Hubungi Kami</p>

          <div className="flex flex-col gap-4">
            <div className="flex gap-6">
              <MapPin width={60} height={25} />
              <p>
                Jl. Veteran, Ketawanggede, Lowokwaru, Kota Malang, Jawa Timur,
                Indonesia - 65145
              </p>
            </div>
            <div className="flex gap-6">
              <Mail width={20} height={20} />
              <p>FAQ</p>
            </div>
            <div className="flex gap-6">
              <Phone width={20} height={20} />
              <p>Customer Service</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-30 w-[70%]">
        <p>© 2026 Pangantara. Seluruh hak cipta dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;
