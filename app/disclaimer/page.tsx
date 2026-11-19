import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Disclaimer", description: "Important limits on the information published by Seasonora.",
  alternates: { canonical: "/disclaimer" },
  openGraph: { title: "Disclaimer | Seasonora", description: "Important limits on the information published by Seasonora.", url: "/disclaimer", images: ["/logo.png"] },
};
export default function Page() {
  return (
    <div className="wrap">
      <div className="page-head"><h1>Disclaimer</h1><p>Important limits on the information published by Seasonora.</p></div>
      <div className="prose">
        <h2>General information</h2>
        <p>All content on Seasonora is published in good faith for general information and inspiration. It is not professional advice. Always follow manufacturer instructions and local safety guidance for any project, appliance or product.</p>
        <h2>Recipes and food safety</h2>
        <p>Recipe timings, temperatures and storage guidance are provided as general information. Check that food is cooked through, follow safe storage practice and consider allergies and dietary needs before serving.</p>
        <h2>DIY and home projects</h2>
        <p>DIY projects are undertaken at your own risk. Use appropriate protective equipment, keep paints and tools away from children unless a project is described as child-friendly with supervision, and never leave candles or lights unattended.</p>
        <h2>External links</h2>
        <p>Seasonora may link to external websites we do not control; we are not responsible for their content or availability.</p>
      </div>
    </div>
  );
}
