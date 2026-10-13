import SectionTitle from "./SectionTitle";
import WebCard from "./WebCard";

const projects = [
  {
    inProgress: false,
    project: "Élysium",
    title: "Spotify Billions Club",
    stack: [
      "React18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Router",
      "Axios",
      "Jest",
    ],
    links: [
      { label: "voir le code", link: "https://elysium-code.olympe.center" },
      { label: "voir le site", link: "https://elysium.olympe.center" },
    ],
    metrics: [
      { value: "+ 1400", label: "musiques" },
      { value: "+ 850", label: "artistes" },
      { value: "+ 1100", label: "albums" },
    ],
    images: [
      { label: "Page d'accueil", image: "/images/elysium-preview-home.webp" },
      {
        label: "Toutes les musiques",
        image: "/images/elysium-preview-titles.webp",
      },
      {
        label: "Tous les artistes",
        image: "/images/elysium-preview-artists.webp",
      },
      {
        label: "Un artiste sélectionné",
        image: "/images/elysium-preview-artist.webp",
      },
      { label: "Tous les albums", image: "/images/elysium-preview-albums.webp" },
      {
        label: "Un album sélectionné",
        image: "/images/elysium-preview-album.webp",
      },
    ],
  },
  {
    inProgress: true,
    project: "Héphaïstos",
    title: "Studio de création vidéo",
    stack: [
      "React19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Router",
      "Axios",
      "Shadcn/UI",
      "Qrcode.React",
    ],
    links: [
      { label: "voir le code", link: "https://hephaistos-code.olympe.center" },
      { label: "voir le site", link: "https://hephaistos.olympe.center" },
    ],
    metrics: [
      { value: "+ 150", label: "vidéos créées" },
      { value: "+ 240", label: "clips utilisés" },
      { value: "+ 2h", label: "de contenu" },
      { value: "+ 1750€", label: "générés" },
    ],
    images: [
      {
        label: "Section d'accueil",
        image: "/images/hephaistos-preview-home.webp",
      },
      {
        label: "Sélectionner un template et un mode",
        image: "/images/hephaistos-preview-templates.webp",
      },
      {
        label: "Configuration",
        image: "/images/hephaistos-preview-configuration.webp",
      },
      {
        label: "Sélectionner une source vidéo",
        image: "/images/hephaistos-preview-youtube.webp",
      },
      {
        label: "Paramètres de la vidéo",
        image: "/images/hephaistos-preview-video-settings.webp",
      },
      {
        label: "Suivi de la création de la vidéo",
        image: "/images/hephaistos-preview-download.webp",
      },
      {
        label: "Email de fin de rendu",
        image: "/images/hephaistos-preview-email.webp",
      },
      {
        label: "Partage du rendu",
        image: "/images/hephaistos-preview-share-link.webp",
      },
      {
        label: "Page utilisateur",
        image: "/images/hephaistos-preview-user-page.webp",
      },
    ],
  },
];

export default function FrontendSection() {
  return (
    <section
      className="py-30 px-11 max-[900px]:py-16 max-[900px]:px-7.5"
      id="interfaces"
    >
      <SectionTitle
        eyebrow="Frontend"
        title="Interfaces"
      />
      <div className="flex flex-col gap-4 mt-16">
        {projects.map((project) => (
          <WebCard
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}
