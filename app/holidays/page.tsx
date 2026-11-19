import type { Metadata } from "next";
import CategoryPage, { categoryMetadata } from "@/components/CategoryPage";
export const metadata: Metadata = categoryMetadata("holidays");
export default function Page() { return <CategoryPage slug="holidays" />; }
