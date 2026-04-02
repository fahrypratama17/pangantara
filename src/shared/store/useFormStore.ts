import { create } from "zustand";

type Identitas = {
  nama: string;
  pemilik: string;
  alamat: string;
  telepon: string;
};

type Answers = {
  daging?: {
    jenisDaging?: "ayam" | "sapi" | "ikan";

    RPH?: "ya" | "tidak";
    namaRPH?: string;
    NKV?: "ya" | "tidak";
    nomorNKV?: string;
    uploadBukti?: ("NKV" | "invoice" | "sks" | "fotlab")[];
    dagingSegar?: "ya" | "tidak";
    dagingAman?: "ya" | "tidak";

    ciriIkan?: "ya" | "tidak";
  };

  sayur?: {
    asalSayur?: "petani" | "distributor" | "kebun";
    sayurSegar?: "ya" | "tidak";
  };

  buah?: {
    asalBuah?: "petani" | "distributor" | "kebun";
    buahSegar?: "ya" | "tidak";
  };

  ternak?: {
    jenisTernak?: "susu" | "telur";

    sumberTelur?: "sendiri" | "lokal" | "distributor";
    namaPeternakan?: string;
    telurAman?: "ya" | "tidak";

    jenisSusu?: "segar" | "pasteurisasi" | "uht";
    asalSusu?: "sapi" | "koperasi" | "distributor";
    usahaSusu?: string;
    susuAman?: "ya" | "tidak";

    NKV?: "ya" | "tidak";
    nomorNKV?: string;
    uploadBukti?: ("NKV" | "invoice" | "sks" | "fotlab")[];
  };
};

type FormStore = {
  step: number;
  category: string | null;
  identitas: Identitas;
  answers: Answers;
  isQuestionOpen: boolean;

  setStep: (step: number) => void;
  setCategory: (category: string) => void;
  setIdentitasField: <K extends keyof Identitas>(
    field: K,
    value: Identitas[K],
  ) => void;
  resetIdentitas: () => void;
  resetAnswers: () => void;
  setAnswers: <
    C extends keyof Answers,
    K extends keyof NonNullable<Answers[C]>,
  >(
    category: C,
    key: K,
    value: NonNullable<Answers[C]>[K],
  ) => void;
};

export const useFormStore = create<FormStore>((set) => ({
  step: 1,
  category: null,
  identitas: {
    nama: "",
    pemilik: "",
    alamat: "",
    telepon: "",
  },
  answers: {},
  isQuestionOpen: false,

  setStep: (step) => set({ step }),

  setCategory: (category) =>
    set({ category, answers: {}, isQuestionOpen: true }),

  setIdentitasField: (field, value) =>
    set((state) => ({
      identitas: {
        ...state.identitas,
        [field]: value,
      },
    })),

  resetIdentitas: () =>
    set({ identitas: { nama: "", pemilik: "", alamat: "", telepon: "" } }),

  resetAnswers: () => set({ answers: {} }),

  setAnswers: (category, key, value) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [category]: { ...(state.answers[category] ?? {}), [key]: value },
      },
    })),
}));
