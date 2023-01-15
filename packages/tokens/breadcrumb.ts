import type { InjectionKey } from "vue";
import type { BreadcrumbProps } from "@voile-ui/components/breadcrumb";

export const breadcrumbKey: InjectionKey<BreadcrumbProps> =
  Symbol("breadcrumbKey");
