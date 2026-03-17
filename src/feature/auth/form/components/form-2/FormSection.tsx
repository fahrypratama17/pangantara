"use client";
import { useFormStore } from "@/shared/store/useFormStore";
import Progress from "@/feature/auth/form/components/Progress";
import Kategori from "@/feature/auth/form/components/form-2/Kategori";
import ButtonNext from "@/feature/auth/form/components/ButtonNext";
import PertanyaanSayur from "@/feature/auth/form/components/form-2/sayur/PertanyaanSayur";

const FormSection = () => {
  const setStep = useFormStore((state) => state.setStep);
  const { category } = useFormStore();

  return (
    <>
      <div className="mx-auto w-[90%] pt-20">
        <Progress />
        <p className="text-2xl-semibold py-8 text-green-900">
          Calon mitra memilih kategori yang sesuai dengan yang dijual
        </p>

        <Kategori />

        {category === "Sayur" && <PertanyaanSayur />}

        <div className="flex origin-right items-center justify-end">
          <ButtonNext onClick={() => setStep(2)} href="/form-2">
            Lanjutkan
          </ButtonNext>
        </div>
      </div>
    </>
  );
};

export default FormSection;
