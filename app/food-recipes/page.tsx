import type { Metadata } from "next";
import CategoryPage, { categoryMetadata } from "@/components/CategoryPage";
export const metadata: Metadata = categoryMetadata("food-recipes");
export default function Page() { return <CategoryPage slug="food-recipes" />; }
