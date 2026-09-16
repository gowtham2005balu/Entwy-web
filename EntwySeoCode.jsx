import { useState } from "react";
import { Copy, Check, ChevronDown } from "lucide-react";

const DATA = [
  {
    section: "Company",
    pages: [
      {
        name: "About Us",
        status: "existing",
        slug: "/about-us",
        title: "About Entwy | AI Systems & Digital Product Studio",
        desc: "Learn about Entwy, an AI and digital product studio in Chennai and New York building intelligent systems and platforms for ambitious businesses.",
        alt: "Entwy team collaborating on an AI product design session",
        note: "",
      },
      {
        name: "Research Insights",
        status: "new",
        slug: "/research-insights",
        title: "Research Insights | Entwy",
        desc: "Explore Entwy's research insights on AI systems, product design, and digital innovation trends shaping enterprise and consumer technology.",
        alt: "Entwy research insights and technology trend graphic",
        note: "No indexed slug found — confirm if this is a blog hub or single page before build.",
      },
      {
        name: "Careers",
        status: "existing",
        slug: "/careers",
        title: "Careers at Entwy | Join Our AI & Design Team",
        desc: "Explore open roles at Entwy and join a team building AI systems, digital products, and design experiences for ambitious businesses.",
        alt: "Entwy team members working together in the office",
        note: "",
      },
      {
        name: "FAQ",
        status: "new",
        slug: "/faq",
        title: "FAQ | Entwy AI & Digital Product Studio",
        desc: "Find answers to common questions about Entwy's AI systems, product design services, residencies, and how to get started working with us.",
        alt: "Entwy frequently asked questions icon",
        note: "",
      },
      {
        name: "Contact Us",
        status: "existing",
        slug: "/contact",
        title: "Contact Entwy | AI & Digital Product Studio",
        desc: "Get in touch with Entwy's South Asia HQ in Chennai or North America office in New York to discuss your AI and digital product needs.",
        alt: "Entwy office location and contact details",
        note: "",
      },
    ],
  },
  {
    section: "Products",
    pages: [
      {
        name: "Products (hub)",
        status: "existing",
        slug: "/products",
        title: "Products | Entwy Digital Product Portfolio",
        desc: "Discover Entwy's product portfolio, including Huzzler, Wiviy, Rentit, Mungo, Z01, and Zuca, built for ambitious businesses and consumers.",
        alt: "Entwy product portfolio showcase",
        note: "",
      },
      {
        name: "Huzzler",
        status: "existing",
        slug: "/products/huzzler",
        title: "Huzzler by Entwy | B2B SaaS Platform",
        desc: "Huzzler is Entwy's B2B SaaS product built to help teams work more efficiently. Explore what Huzzler offers and how it can support your business.",
        alt: "Huzzler B2B SaaS platform interface by Entwy",
        note: "Generic copy — tighten against Huzzler's current live feature set before publishing.",
      },
      {
        name: "Wiviy",
        status: "existing",
        slug: "/products/wiviy",
        title: "Wiviy by Entwy | Consumer App",
        desc: "Wiviy is Entwy's consumer app designed for everyday engagement. See what Wiviy offers and how it fits into your daily routine.",
        alt: "Wiviy consumer app interface by Entwy",
        note: "Avoids the word 'game' per brand guideline. Tighten against live feature set.",
      },
      {
        name: "Rentit",
        status: "existing",
        slug: "/products/rentit",
        title: "Rentit by Entwy | Rental Marketplace",
        desc: "Rentit is Entwy's rental marketplace platform connecting people directly to list and find items to rent. Explore how Rentit works.",
        alt: "Rentit rental marketplace app screens by Entwy",
        note: "Avoids 'broker/brokerage/middleman' per brand guideline.",
      },
      {
        name: "Mungo",
        status: "existing",
        slug: "/products/mungo",
        title: "Mungo by Entwy | Consumer App",
        desc: "Mungo is Entwy's consumer app built for a seamless everyday experience. Discover what Mungo offers and how to get started.",
        alt: "Mungo consumer app interface by Entwy",
        note: "Generic copy — tighten against Mungo's current live feature set before publishing.",
      },
      {
        name: "Z01",
        status: "existing",
        slug: "/products/z01crew",
        title: "Z01 by Entwy | Marketplace Platform",
        desc: "Z01 is Entwy's marketplace platform connecting crews and clients for on-demand work. Explore how Z01 supports your projects.",
        alt: "Z01 marketplace platform interface by Entwy",
        note: "Indexed slug is /products/z01crew (not /products/z01) — kept as-is.",
      },
      {
        name: "Zuca",
        status: "existing",
        slug: "/products/zuca",
        title: "Zuca by Entwy | Consumer App",
        desc: "Zuca is Entwy's consumer app designed for a simple, intuitive experience. Discover what Zuca offers today.",
        alt: "Zuca consumer app interface by Entwy",
        note: "Generic copy — tighten against Zuca's current live feature set before publishing.",
      },
    ],
  },
  {
    section: "Industries",
    pages: [
      {
        name: "Industries (hub)",
        status: "new",
        slug: "/industries",
        title: "Industries | Entwy AI & Digital Solutions",
        desc: "Entwy builds AI systems and digital products for industries including digital enterprise, education, retail, healthcare, banking, energy, and logistics.",
        alt: "Entwy industries served overview graphic",
        note: "No hub link shown in the footer screenshot — add only if a parent /industries page exists or is planned.",
      },
      {
        name: "Digital Enterprises & Scalable Platforms",
        status: "new",
        slug: "/industries/digital-enterprises-scalable-platforms",
        title: "Digital Enterprises & Scalable Platforms | Entwy",
        desc: "Entwy designs and builds scalable digital platforms for enterprises looking to modernize operations and grow with AI-driven systems.",
        alt: "Digital enterprise scalable platform illustration",
        note: "",
      },
      {
        name: "Education, Learning & Skill Development",
        status: "new",
        slug: "/industries/education-learning-skill-development",
        title: "Education & Skill Development Solutions | Entwy",
        desc: "Entwy builds AI-powered digital products for education, learning, and skill development, helping institutions and learners engage more effectively.",
        alt: "Education and skill development digital platform illustration",
        note: "",
      },
      {
        name: "Consumer Products & Retail Innovation",
        status: "new",
        slug: "/industries/consumer-products-retail-innovation",
        title: "Consumer Products & Retail Innovation | Entwy",
        desc: "Entwy partners with consumer and retail brands to build digital products and AI systems that improve customer experience and drive growth.",
        alt: "Consumer products and retail innovation illustration",
        note: "",
      },
      {
        name: "Lifestyle, Wellness & Personal Care",
        status: "new",
        slug: "/industries/lifestyle-wellness-personal-care",
        title: "Lifestyle, Wellness & Personal Care | Entwy",
        desc: "Entwy designs digital products and AI systems for lifestyle, wellness, and personal care brands looking to connect with their customers.",
        alt: "Lifestyle and wellness digital product illustration",
        note: "",
      },
      {
        name: "Healthcare, Insurance & Pharmaceutical",
        status: "new",
        slug: "/industries/healthcare-insurance-pharmaceutical",
        title: "Healthcare, Insurance & Pharma Solutions | Entwy",
        desc: "Entwy builds AI systems and digital platforms for healthcare, insurance, and pharmaceutical organizations focused on better outcomes.",
        alt: "Healthcare and pharmaceutical digital solution illustration",
        note: "",
      },
      {
        name: "Banking & Investment",
        status: "new",
        slug: "/industries/banking-investment",
        title: "Banking & Investment Solutions | Entwy",
        desc: "Entwy develops AI-driven digital platforms for banking and investment firms looking to streamline operations and enhance client experience.",
        alt: "Banking and investment digital platform illustration",
        note: "",
      },
      {
        name: "Energy, Commodities & Industrial Supply",
        status: "new",
        slug: "/industries/energy-commodities-industrial-supply",
        title: "Energy, Commodities & Industrial Supply | Entwy",
        desc: "Entwy builds digital platforms and AI systems for energy, commodities, and industrial supply businesses managing complex operations.",
        alt: "Energy and industrial supply digital platform illustration",
        note: "",
      },
      {
        name: "Supply Chain & Logistics",
        status: "new",
        slug: "/industries/supply-chain-logistics",
        title: "Supply Chain & Logistics Solutions | Entwy",
        desc: "Entwy designs AI systems and digital platforms for supply chain and logistics businesses looking to improve visibility and efficiency.",
        alt: "Supply chain and logistics digital platform illustration",
        note: "",
      },
    ],
  },
  {
    section: "Resources",
    pages: [
      {
        name: "Resources (hub)",
        status: "existing",
        slug: "/resources",
        title: "Resources | Entwy Design Residencies & Programs",
        desc: "Explore Entwy's resources, including design residencies, competitions, and programs for designers and product builders.",
        alt: "Entwy resources and programs overview graphic",
        note: "Indexed /resources kept as the hub page; sub-pages below are new.",
      },
      {
        name: "UI/UX Design Residency",
        status: "new",
        slug: "/resources/ui-ux-design-residency",
        title: "UI/UX Design Residency | Entwy",
        desc: "Join Entwy's UI/UX Design Residency to build real product design experience while working alongside our team on live projects.",
        alt: "Entwy UI/UX design residency program graphic",
        note: "",
      },
      {
        name: "Product Design Residency",
        status: "new",
        slug: "/resources/product-design-residency",
        title: "Product Design Residency | Entwy",
        desc: "Entwy's Product Design Residency gives designers hands-on experience building digital products alongside our team.",
        alt: "Entwy product design residency program graphic",
        note: "",
      },
      {
        name: "UI/UX 26 Competition",
        status: "new",
        slug: "/resources/ui-ux-26-competition",
        title: "UI/UX 26 Competition | Entwy",
        desc: "Enter Entwy's UI/UX 26 Competition and showcase your design skills for a chance to be recognized by our team.",
        alt: "Entwy UI/UX 26 design competition banner",
        note: "",
      },
      {
        name: "Privacy Policy",
        status: "new",
        slug: "/privacy-policy",
        title: "Privacy Policy | Entwy",
        desc: "Read Entwy's Privacy Policy to understand how we collect, use, and protect your personal information across our products and services.",
        alt: "Entwy privacy policy document icon",
        note: "",
      },
      {
        name: "Terms and Conditions",
        status: "new",
        slug: "/terms-and-conditions",
        title: "Terms and Conditions | Entwy",
        desc: "Read Entwy's Terms and Conditions governing the use of our website, products, and services.",
        alt: "Entwy terms and conditions document icon",
        note: "",
      },
    ],
  },
];

function buildCode(p) {
  return `<!-- Slug: ${p.slug} -->
<title>${p.title}</title>
<meta name="description" content="${p.desc}" />
<img src="..." alt="${p.alt}" />`;
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // no-op
    }
  };
  return (
    <button
      onClick={onCopy}
      className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 active:scale-95 transition"
    >
      {copied ? (
        <>
          <Check size={13} className="text-emerald-600" />
          Copied
        </>
      ) : (
        <>
          <Copy size={13} />
          Copy
        </>
      )}
    </button>
  );
}

function PageCard({ page }) {
  const [open, setOpen] = useState(true);
  const code = buildCode(page);
  return (
    <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-slate-50 transition text-left"
      >
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-semibold text-slate-800 truncate">{page.name}</span>
          <span
            className={`shrink-0 text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded ${
              page.status === "existing"
                ? "bg-indigo-100 text-indigo-700"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            {page.status === "existing" ? "indexed" : "new"}
          </span>
        </div>
        <ChevronDown
          size={16}
          className={`text-slate-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="px-4 pb-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">
              Code
            </span>
            <CopyButton text={code} />
          </div>
          <pre className="text-[12px] leading-relaxed bg-slate-900 text-slate-100 rounded-md p-3 overflow-x-auto whitespace-pre-wrap break-words font-mono">
{code}
          </pre>
          {page.note && (
            <p className="mt-2 text-xs text-slate-500 border-l-2 border-amber-300 pl-2">
              {page.note}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default function EntwySeoCode() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-xl font-bold text-slate-900">Entwy SEO Meta Code</h1>
        <p className="text-sm text-slate-500 mt-1 mb-6">
          Title, description, and alt text per page — ready to paste into the hardcoded site.
        </p>

        {DATA.map((section) => (
          <div key={section.section} className="mb-8">
            <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">
              {section.section}
            </h2>
            <div className="space-y-3">
              {section.pages.map((p) => (
                <PageCard key={p.slug} page={p} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
