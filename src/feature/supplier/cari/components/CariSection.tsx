import { Beef, Carrot, Citrus, ShoppingBag, Milk } from "lucide-react";
import { SupplierData } from "@/feature/supplier/cari/data/data";
import { Card, CardHeader } from "@/shared/component/ui/card";

const CariSection = () => {
  return (
    <div>
      <div className="mx-auto grid h-[50%] w-[70%] grid-cols-5 items-center justify-center">
        <div className="mx-auto flex h-[30%] w-[50%] flex-col items-center justify-center rounded-3xl border">
          <Beef />
          <p>Daging</p>
        </div>
        <div className="mx-auto flex h-[30%] w-[50%] flex-col items-center justify-center rounded-3xl border">
          <Carrot />
          <p>Sayur</p>
        </div>
        <div className="mx-auto flex h-[30%] w-[50%] flex-col items-center justify-center rounded-3xl border">
          <Citrus />
          <p>Buah</p>
        </div>
        <div className="mx-auto flex h-[30%] w-[50%] flex-col items-center justify-center rounded-3xl border">
          <ShoppingBag />
          <p>Sembako</p>
        </div>
        <div className="mx-auto flex h-[30%] w-[50%] flex-col items-center justify-center rounded-3xl border">
          <Milk />
          <p>Cemilan</p>
        </div>
      </div>

      <div className="w-full border py-20">
        <div className="mx-auto mb-20 w-[85%]">
          <p>Supplier Terpopuler</p>
        </div>
        <div className="mx-auto grid w-[85%] grid-cols-3 gap-12">
          {SupplierData.map((item) => (
            <Card className="" key={item.id}>
              <div className="w-full bg-blue-950"></div>
              <CardHeader>{item.title}</CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CariSection;
