import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center space-y-4 mt-40">
      <Image
        src="/assets/images/profil.png"
        alt="photo de profil"
        width={300}
        height={300}
      />
      <div>
        <h1>Ratana Mey</h1>
        <h2>Développeur Front-End React JS</h2>
        <p>
          Salut 👋! Je suis Ratana, avec 20 ans d'expérience dans l'IT et une
          passion récente pour le développement web après avoir réussi avec
          succès une formation de 6 mois chez OpenClassrooms. Aujourd'hui, je me
          concentre sur le développement front-end, utilisant principalement
          React JS. Mon parcours diversifié dans l'IT enrichit ma compréhension
          des enjeux technologiques, me permettant d'aborder chaque projet web
          avec innovation et perspective.
        </p>
      </div>
      <div></div>
    </section>
  );
};
