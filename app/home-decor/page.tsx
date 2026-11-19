import type { Metadata } from "next";
import CategoryPage, { categoryMetadata } from "@/components/CategoryPage";
export const metadata: Metadata = categoryMetadata("home-decor");
export default function Page() { return <CategoryPage slug="home-decor" />; }
