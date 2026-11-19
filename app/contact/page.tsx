import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact", description: "Contact Seasonora — send a message about articles, corrections, partnerships or general questions.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact | Seasonora", url: "/contact", images: ["/logo.png"] },
};
export default function Page() {
  return (
    <div className="wrap">
      <div className="page-head"><h1>Contact Seasonora</h1>
      <p>Questions about an article, a correction, or working with us? Send a message below and we will reply by email. Please note this form is a front-end contact form — for an urgent message, you can also reach us through our Pinterest profile.</p></div>
      <div className="prose">
        <form className="contact-form" action="#" method="post">
          <label>Your name<input name="name" required autoComplete="name" /></label>
          <label>Email address<input name="email" type="email" required autoComplete="email" /></label>
          <label>Subject<input name="subject" required /></label>
          <label>Message<textarea name="message" rows={6} required /></label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
