import type { OfferPreviewProps } from "../../../registration";

export type Props = {
  values: {
    name: string;
    description: string;
    categoryId: number | null;
    subcategoryId: number | null;
  };
  errors: Partial<
    Record<"name" | "description" | "categoryId" | "subcategoryId", string>
  >;
  categories: CategoryWithSubs[];
  isLoading: boolean;
  images: string[];
  imagesError?: string;
  isSubmitting: boolean;
  previewOpen: boolean;
  setPreviewOpen: (open: boolean) => void;
  onFieldChange: (
    name: "name" | "description" | "categoryId" | "subcategoryId",
    value: string,
    validateNow?: boolean
  ) => void;
  onCategoryChange: (id: number) => void;
  onSubcategoryChange: (id: number) => void;
  onAddImage: (src: string) => void;
  onAddFile: (file: File) => void;
  onRemoveImage: (index: number) => void;
  onPreview: () => void;
  onConfirm: () => void;
  onBack: () => void;
  previewData: OfferPreviewProps | null;
};

export type CategoryWithSubs = {
  id: number;
  name: string;
  subcategories: {
    id: number;
    name: string;
  }[];
};
