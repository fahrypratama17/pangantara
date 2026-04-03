"use client";

import { createContext, type ReactNode } from "react";
import { useDetailSupplierSection } from "@/feature/supplier/detail/hooks/use-detail-supplier-section";

type DetailSupplierSectionState = ReturnType<typeof useDetailSupplierSection>;

const DetailSupplierSectionContext =
  createContext<DetailSupplierSectionState | null>(null);

type Props = {
  children: ReactNode;
};

const DetailSupplierSectionProvider = ({ children }: Props) => {
  const state = useDetailSupplierSection();

  return (
    <DetailSupplierSectionContext.Provider value={state}>
      {children}
    </DetailSupplierSectionContext.Provider>
  );
};

export default DetailSupplierSectionProvider;
