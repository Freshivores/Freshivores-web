import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact-us", label: "Contact Us" },
];

const socialLinks = [
  {
    href: "https://facebook.com/freshivores",
    icon: "/icons/facebook.svg",
    label: "Facebook",
  },
  {
    href: "https://instagram.com/freshivores",
    icon: "/icons/instagram.svg",
    label: "Instagram",
  },
  {
    href: "https://twitter.com/freshivores",
    icon: "/icons/twitter.svg",
    label: "Twitter",
  },
  {
    href: "https://linkedin.com/company/freshivores",
    icon: "/icons/linkedin.svg",
    label: "LinkedIn",
  },
  {
    href: "https://youtube.com/freshivores",
    icon: "/icons/youtube.svg",
    label: "YouTube",
  },
];

export default function Footer() {
  return (
    <footer className="border-t mt-16 px-5 md:px-0">
      <div className="container lg:mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-2 gap-8 mb-8">
          <div className="">
            <Link href="/" className="inline-block">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/freshivores-b3fd9.appspot.com/o/settings%2Ffav6270c4a4d2464.png?alt=media&token=08953ba9-fd51-4476-96d5-4ddd5d69e438"
                alt="Freshivores"
                width={50}
                height={50}
              />
            </Link>
            <div className="mb-4">
              <p>
                <span className="font-semibold text-green-900">
                  Freshivores
                </span>{" "}
                <span className="text-black text-xs">
                  © 2007-{new Date().getFullYear()}
                </span>
              </p>
              <p className="text-sm text-gray-600">Freshivores</p>
              <p className="text-sm text-gray-600">
                132, KCR Commercial Complex, Rayasandra,
              </p>
              <p className="text-sm text-gray-600">Huskur</p>
              <p className="text-sm text-gray-600">
                Bengaluru, Karnataka - 560099
              </p>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Image
                    src={link.icon}
                    alt={link.label}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6 col-span-2 2xl:col-span-1">
            <nav className="justify-start lg:justify-end flex">
              <ul className="flex lg:flex-row flex-col gap-4">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-600 text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex lg:justify-end justify-start">
              <Link
                href="/business-enquiry"
                className="inline-block bg-orange-400 text-white px-6 py-3 rounded-md hover:bg-orange-500 transition-colors"
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z" />
                  </svg>
                  <span className="ml-2">Business Enquiry</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <p className="text-xs text-gray-500 text-start">
            Freshivores® is a Spice, Flour & Oil Mill brand solely owned by
            &quot;Gastronomy Legacy Fresh Food Private Limited&quot;. Our motto
            is to deliver best quality, freshly produced, pure food at
            affordable prices. Our passion, commitment and industry knowledge
            help us to purchase superior quality produces, process it with
            utmost care and deliver it to you without losing its freshness or
            nutritional facts.
          </p>
        </div>
      </div>
    </footer>
  );
}
