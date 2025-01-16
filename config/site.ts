export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "FASE#7",
  description:
    "Festival Anak Sholeh (FASE) merupakan sebuah kegiatan tahunan yang diselenggarakan oleh Organisasi Rohis Al-Hadiid. Acara ini dirancang khusus untuk siswa SMP dan MTs sederajat dengan menghadirkan berbagai perlombaan yang bernuansa islami. FASE hadir sebagai wadah untuk memperdalam ilmu agama, menyalurkan bakat, serta mengembangkan potensi anak-anak dalam bidang keagamaan.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
