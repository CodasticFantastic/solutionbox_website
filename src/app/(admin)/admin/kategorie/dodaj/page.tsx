import PageHeader from "@/components/admin/core/pageHeader/PageHeader";
import CategoryForm from "../components/categoryForm/CategoryForm";

export default function DodajKategorie() {
  return (
    <div>
      <PageHeader title="Dodaj Kategorie" />
      <CategoryForm variant="ADD" />
    </div>
  );
}
