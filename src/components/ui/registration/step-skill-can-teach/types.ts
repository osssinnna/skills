export type Props = {
  values: {
    name: string;
    description: string;
    categoryId: string;
    subcategoryId: string;
  };
  errors: Partial<
    Record<"name" | "description" | "categoryId" | "subcategoryId", string>
  >;
  categories: CategoryWithSubs[];
  isLoading: boolean;
  images: string[];
  isSubmitting: boolean;
  previewOpen: boolean;
  onFieldChange: (
    name: "name" | "description" | "categoryId" | "subcategoryId",
    value: string,
    validateNow?: boolean
  ) => void;
  onCategoryChange: (id: string) => void;
  onSubcategoryChange: (id: string) => void;
  onAddImage: (src: string) => void;
  onAddFile: (file: File) => void;
  onRemoveImage: (index: number) => void;
  onPreview: () => void;
  onConfirm: () => void;
  onBack: () => void;
};

export type CategoryWithSubs = {
  id: string;
  name: string;
  subcategories: {
    id: string;
    name: string;
  }[];
};
