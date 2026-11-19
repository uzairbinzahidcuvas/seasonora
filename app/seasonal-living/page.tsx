import type { Metadata } from "next";
import CategoryPage, { categoryMetadata } from "@/components/CategoryPage";
export const metadata: Metadata = categoryMetadata("seasonal-living");
export default function Page() { return <CategoryPage slug="seasonal-living" />; }
