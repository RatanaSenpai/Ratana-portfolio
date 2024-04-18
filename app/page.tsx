import { BentoGridSecondDemo } from "@/components/Bento";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";

export default function Home() {
  const cards = [
    {
      title: "Booki",
      description:
        "Projet 2 - OpenClassRooms : Intégration responsive d'après maquette, renforcement en HTML, CSS, et usage de Figma pour des fondations solides en web dev.",
      imgSrc: "/assets/images/Projet2.png",
      linkHref: "https://ratanasenpai.github.io/Booki/",
      stack: "HTML, CSS",
    },
    {
      title: "Oh my Food",
      description:
        "Projet 3 - OpenClassRooms : Focalisé sur les effets avancés CSS et la navigation web efficace. Compétences approfondies avec Git/GitHub, setup Front-End, et SASS",
      imgSrc: "/assets/images/Projet3.png",
      linkHref: "https://ratanasenpai.github.io/ohmyfood/",
      stack: "SASS, Git, Github",
    },
    {
      title: "Kanap",
      description:
        "Projet 5 - OpenClassRooms: Maîtrise de JavaScript via gestion d'événements, tests, validation de données et interaction avec services web. Compétences acquises en programmation JavaScript, débogage et script web.",
      imgSrc: "/assets/images/Projet5.png",
      linkHref: "https://github.com/RatanaSenpai/Kanap",
      stack: "Javascript",
    },
    {
      title: "Kasa",
      description:
        "Projet 7 - OpenClassRooms: Spécialisation en React, utilisation de React Router pour la navigation, création d'interfaces avec composants React. Création de projets via Create React App. .",
      imgSrc: "/assets/images/Projet7.png",
      linkHref: "https://kasa-ratanasenpais-projects.vercel.app/",
      stack: "React",
    },
    {
      title: "Crazee Burger",
      description:
        "Projet React Entreprise : Focus sur React en entreprise, axé sur les bonnes pratiques, composants fonctionnels scalables et réutilisables avec hooks, méthodologie Agile via système de tickets, utilisation de Git en contexte professionnel, et l'adoption de React moderne avec ViteJS, Context.",
      imgSrc: "/assets/images/CrazeeBurger.png",
      linkHref: "https://crazee-burger-jk2pc41zo-ratanasenpai.vercel.app/",
      stack: "React JS",
    },
    {
      title: "Show Seeker",
      description:
        "Projet ShowSeeker : Une appli dédiée aux fans de séries, offrant les infos les plus récentes grâce aux APIs. Apprentissage d'Axios pour les requêtes API, enrichi par l'ajout de fonctionnalités de recherche et filtrage. J'ai exploré les requêtes asynchrones et la manipulation de données d'APIs externes à travers ce projet.",
      imgSrc: "/assets/images/ShowSeeker.png",
      linkHref: "https://showseeker-three.vercel.app/",
      stack: "React, Axios",
    },
  ];

  return (
    <main>
      <BentoGridSecondDemo />
      <div className="mx-auto max-w-4xl pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-10 p-2 mt-5 mb-20">
          {cards.map((card, index) => (
            <ThreeDCardDemo key={index} {...card} />
          ))}
        </div>
      </div>
    </main>
  );
}
