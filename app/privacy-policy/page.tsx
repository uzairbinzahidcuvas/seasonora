import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy", description: "How Seasonora collects, uses and protects information when you visit this website.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: { title: "Privacy Policy | Seasonora", description: "How Seasonora collects, uses and protects information when you visit this website.", url: "/privacy-policy", images: ["/logo.png"] },
};
export default function Page() {
  return (
    <div className="wrap">
      <div className="page-head"><h1>Privacy Policy</h1><p>How Seasonora collects, uses and protects information when you visit this website.</p></div>
      <div className="prose">
        <h2>Information we collect</h2>
        <p>We collect information you give us directly — for example, your email address when you subscribe to our newsletter or send a message through the contact form — and standard technical information your browser sends when you visit, such as pages viewed and approximate device type.</p>
        <h2>How we use information</h2>
        <p>We use your information to operate the website, send the newsletter you asked for, reply to messages and understand which content readers find useful so we can improve it. We do not sell your personal information.</p>
        <h2>Cookies and analytics</h2>
        <p>This website may use privacy-aware analytics to count visits and understand popular content. If advertising or affiliate tools are added in future, this policy will be updated to describe them before they are used, and any required consent tools will be provided.</p>
        <h2>Your choices</h2>
        <p>You may unsubscribe from the newsletter at any time using the link in any email, and you can contact us to ask what information we hold about you or to request its deletion.</p>
        <h2>Contact</h2>
        <p>Questions about this policy can be sent through our Contact page. We review this policy whenever the tools we use change.</p>
      </div>
    </div>
  );
}
