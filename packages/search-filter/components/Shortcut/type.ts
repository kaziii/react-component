import { IOptions } from "../../search-filter-types";
export interface ShortcutProps {
  options?: Array<IOptions>;
  value?: string | number;
  onChange?: (value: any) => void;
  label: string;
}
