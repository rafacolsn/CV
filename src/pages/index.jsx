import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import Iframe from "react-iframe";
import { navigate } from '@reach/router';

// Components
import Layout from "../components/Layout";
import MyTimeline from "../views/MyTimeline";
import Menu from "../components/Menu";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle, CogTitle } from "../elements/Titles";
import { Badges } from "../elements/Badges";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import About from "../views/About";
import Contact from "../views/Contact";

import avatar from "../images/rafacolson.jpg";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);

    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

  

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Iframes = Badges.map((el, index) => {
  return (
    <Iframe
      key={"badge" + { index }}
      url={el.url}
      width="330px"
      height="200px"
      position="relative"
    />
  );
});


const Index = () => (
  <>
    <Layout />

    <Parallax pages={8}>
      <Menu bg="#222b2f">
        <li onClick={() => navigate('#about')}>about</li>
        <li>expérience</li>
        <li>aptitudes</li>
      </Menu>

      <Hero offset={0}>
        <BigTitle>
          Raphaël Colson, <br /> développeur web junior.
        </BigTitle>
        <Subtitle>
          Je recherche un poste dans un domaine qui ait du sens pour moi
          (environnement, économie sociale et solidaire, initiatives locales et
          citoyennes, startups innovantes...)
        </Subtitle>
      </Hero>
      <About  offset={1}>
        <Title id="about">Me, Myself and I</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Raph Colson" />
          <AboutSub>
            L'avenir n'est pas ce qui va arriver, mais ce que nous allons
            faire...
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Fort d'une expérience de plusieurs années dans l'animation de groupes,
          la formation, et les applications pratiques de la communication
          (vidéo, photo, sites web, radio, etc.), je suis à la recherche d'un
          poste de développeur web dans un domaine qui ait du sens pour moi
          (environnement, économie sociale et solidaire, initiatives locales et
          citoyennes, startups innovantes...).
        </AboutDesc>
      </About>
      <MyTimeline offset={2.5}>
        <Timeline lineColor={"#ddd"}>
          <TimelineItem
            key="001"
            dateText="10/2018 – Aujourd'hui"
            style={{ color: "#C12600" }}
            dateInnerStyle={{ background: "#C12600", color: "white" }}
          >
            <h3>Formation BeCode</h3>
            <h4>Développeur web junior</h4>
            <p>
              Formation de 6 mois en développement web à BeCode Liège. Workflow
              Git, Javascript, Database, Frameworks (Laravel, Gatsby),
              Responsiveness, Environnement Linux, Backend (NodeJs, PHP),
              Frontend (React). Présentation de groupes. Animation de workshops.
            </p>
          </TimelineItem>
          <TimelineItem
            key="002"
            dateText="2016-2018"
            dateInnerStyle={{ background: "#BF852E" }}
            style={{ color: "#BF852E" }}
            bodyContainerStyle={{
              background: "#ddd",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
            }}
          >
            <h3 style={{ color: "#BF852E" }}>ATELIERS DE LA COLLINE</h3>
            <h4 style={{ color: "#BF852E" }}>
              Compagnie de théâtre jeune public
            </h4>
            <p>
              Chargé de communication & gestion administrative. Gestion site web
              (Joomla). Réalisation tracts, affiches, mise en page. Bords de
              scène. Animations philo pour enfants.
            </p>
          </TimelineItem>
          <TimelineItem
            key="003"
            style={{ color: "#C12600" }}
            dateText="02/2016 - 11/2016"
            dateInnerStyle={{ background: "#C12600" }}
            bodyContainerStyle={{
              background: "#ddd",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
            }}
          >
            <h3 style={{ color: "#C12600" }}>EFDD</h3>
            <h4 style={{ color: "#C12600" }}>
              Education et formation au développement durable asbl - Cahiers du
              Développement Durable.
            </h4>
            <p>
              Chargé de communication. Gestion du site web (Wordpress).
              Réalisation logo, mise en page de brochures. Formateur en
              initiation au développement durable. Suivi et gestion de projets.
              Formations, animations de groupes.
            </p>
          </TimelineItem>
          <TimelineItem
            key="004"
            dateText="2008-2015"
            style={{ color: "#273238" }}
            dateInnerStyle={{ background: "#273238" }}
            bodyContainerStyle={{
              background: "#ddd",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
            }}
          >
            <h3 style={{ color: "#273238" }}>
              NOVA MJ, Maison des Jeunes de Chaudfontaine
            </h3>
            <h4 style={{ color: "#273238" }}>
              Chargé de communication - animateur - éducateur - formateur.
            </h4>
            <p>
              Mise sur pied d'un projet radio FM (technique, dossier, création &
              coordination d'équipes bénévoles). Création des sites web (HTML,
              CSS, Joomla, Wordpress). Réalisation de tracts, affiches,
              programmes. Animateur nombreux ateliers et stages médiatiques
              (radio, photo, vidéo, etc.). Formateur d’insertion
              socioprofessionnelle avec différents publics.
            </p>
          </TimelineItem>
          <TimelineItem
            key="005"
            dateText="2013"
            style={{ color: "#C12600" }}
            dateInnerStyle={{ background: "#C12600" }}
          >
            <h3>Formation CNV</h3>
            <h4>
              Gestion de conflit et gestion de groupes. Université de Paix
              Namur.
            </h4>
          </TimelineItem>
          <TimelineItem
            key="006"
            dateText="2006-2008"
            style={{ color: "#273238" }}
            dateInnerStyle={{ background: "#273238" }}
            bodyContainerStyle={{
              background: "#ddd",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
            }}
          >
            <h3 style={{ color: "#273238" }}>CENTRE CULTUREL DE SAMBREVILLE</h3>
            <h4 style={{ color: "#273238" }}>
              Responsable audiovisuel et vidéaste pour spectacle de théâtre.
            </h4>
          </TimelineItem>
          <TimelineItem
            key="007"
            dateText="2005"
            style={{ color: "#C12600" }}
            dateInnerStyle={{ background: "#C12600" }}
          >
            <h3 style={{ color: "#273238" }}>Service Volontaire Européen.</h3>
            <h4 style={{ color: "#273238" }}>Six mois, en Espagne.</h4>
          </TimelineItem>
          <TimelineItem
            key="008"
            dateText="1999-2004"
            style={{ color: "#BF852E" }}
            dateInnerStyle={{ background: "#BF852E" }}
            bodyContainerStyle={{
              background: "#ddd",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
            }}
          >
            <h3 style={{ color: "#BF852E" }}>
              Licence (Master) en communication appliquée
            </h3>
            <h4 style={{ color: "#BF852E" }}>IHECS, Bruxelles.</h4>
            <p>Section «animation socioculturelle et éducation permanente».</p>
          </TimelineItem>
        </Timeline>
      </MyTimeline>
      <Projects offset={4}>
        <CogTitle>Aptitudes</CogTitle>
        <ProjectsWrapper>{Iframes}</ProjectsWrapper>
      </Projects>

      <Contact offset={7}>
        <Inner>
          <Title>Contact</Title>
          <ContactText>
            Posez-<a href="mailto:raphcolson@gmail.com">moi</a> une question ou
            trouvez-moi sur d'autres plateformes :
            <br />
            <a href="https://www.linkedin.com/in/rapha%C3%ABl-colson">
              LinkedIn
            </a>{" "}
            & <a href="https://github.com/rafacolsn">GitHub</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 Raphaël Colson
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">
            Github Repository
          </a>
          . Made by <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
