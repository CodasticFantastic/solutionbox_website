import PageHeader from "@/components/admin/core/pageHeader/PageHeader";
import ProductForm from "../components/productForm/productForm";

export default function DodajProdukt() {
  return (
    <div>
      <PageHeader title="Dodaj Produkt" />
      <ProductForm variant="ADD" />
    </div>
  );
}
