import type { Metadata } from "next";
import CategoryPage, { categoryMetadata } from "@/components/CategoryPage";
export const metadata: Metadata = categoryMetadata("diy-crafts");
export default function Page() { return <CategoryPage slug="diy-crafts" />; }
