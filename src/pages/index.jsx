import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import {Parallax} from "react-spring/renderprops-addons.cjs";
import {Timeline, TimelineItem} from "vertical-timeline-component-for-react";
import SVG from "../components/SVG";
import {colors} from "../../tailwind";

// Components
import Layout from "../components/Layout";
import MyTimeline from "../views/MyTimeline";
import Menu from "../components/Menu";

// Elements
import Inner from "../elements/Inner";
import {
    Title,
    BigTitle,
    Subtitle,
    CogTitle,
    LgTitle
} from "../elements/Titles";
import {Badges, badges, badgesId, getBadgeById} from "../elements/Badges";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import About from "../views/About";
import Contact from "../views/Contact";

import avatar from "../images/rafacolson.jpg";
import ProjectCard from "../components/ProjectCard";
import Languages from "../views/Languages";
export const BadgesWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  .badges {
    padding: 1.5rem;
  }
  .badges-img {
    width: 10rem;
    float: left;
    padding-right: 1rem;
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;
export const ProjectsWrapper = styled.div`
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
  @media (max-width: 400px) {
    .badges {
      margin-left: -1.95rem;
    }
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
  ${tw`text-grey-darkest font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-20 font-sans text-md lg:text-lg`};
`;
export let smOffset = [8, 0, 1, 2.7, 4, 6, 7];

if (typeof window !== `undefined`) {
    if (window.matchMedia("(max-width: 400px)").matches) {
        smOffset = [13, 0, 1.5, 4.5, 8, 11, 12];
    }
}

const Index = () => (
    <>
        <Layout/>
        <Parallax pages={smOffset[0]}>
            <Menu bg="#273238">
                <li id="li-1">
                    <i id="phone" className="fas fa-phone-volume"/> 0476 48 37 10
                </li>
                <li id="li-2">
                    <a href="mailto:raphcolson@gmail.com">raphcolson@gmail.com</a>
                </li>
                <li id="li-3">
                    <a
                        href="https://www.linkedin.com/in/rapha%C3%ABl-colson/"
                        target="blank"
                    >
                        <i className="fab fa-linkedin-in"/>
                    </a>
                    <a href="https://github.com/rafacolsn" target="blank">
                        <i className="fab fa-github"/>
                    </a>
                </li>
            </Menu>
            <Hero offset={smOffset[1]}>
                <BigTitle>
                    Raphaël Colson, <br/> développeur web.
                </BigTitle>
                <Subtitle>
                    Actuellement en stage dans le développement web chez <a href="https://mega.be/"> Mega</a> après une
                    formation intensive de 6 mois donnée par
                    <a href="https://www.becode.org/"> BeCode</a>, je suis à la recherche
                    d'un poste de développeur web junior.
                </Subtitle>
            </Hero>
            <About offset={smOffset[2]}>
                <Title>Me, Myself and I</Title>
                <AboutHero>
                    <Avatar src={avatar} alt="Raph Colson"/>
                    <AboutSub>
                        L'avenir n'est pas ce qui va arriver, mais ce que nous allons en
                        faire... (Henri Bergson)
                    </AboutSub>
                </AboutHero>
                <AboutDesc>
                    Diplômé d'une Licence (Master) en communication et fort d'une
                    expérience de plusieurs années dans l'associatif, l'animation de
                    groupes, la formation, et les applications pratiques de la
                    communication, j'ai aussi travaillé comme freelance dans la création
                    de sites web avec Wordpress, la réalisation de vidéos et de reportages
                    photo.
                </AboutDesc>
            </About>
            <MyTimeline offset={smOffset[3]}>
                <Timeline lineColor={"#ddd"}>
                    <TimelineItem
                        key="001"
                        dateText="10/2018 – Aujourd'hui"
                        style={{color: "#C12600"}}
                        dateInnerStyle={{background: "#C12600", color: "white"}}
                    >
                        <h3>
                            <i className="fas fa-graduation-cap"/> Formation BeCode
                        </h3>
                        <h4>Développeur web junior</h4>
                        <p>
                            Formation de 6 mois en développement web à BeCode Liège. Workflow
                            Git, Javascript, Database, Frameworks (Laravel, Gatsby),
                            Responsiveness, Environnement Linux, Backend (NodeJs, PHP),
                            Frontend (React, Vue). Présentation de groupes. Animation de
                            workshops.
                        </p>
                    </TimelineItem>
                    <TimelineItem
                        key="002"
                        dateText={"2016-2018"}
                        dateInnerStyle={{background: "#BF852E"}}
                        style={{color: "#BF852E"}}
                        bodyContainerStyle={{
                            background: "#ddd",
                            padding: "20px",
                            borderRadius: "8px",
                            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
                        }}
                    >
                        <h3 style={{color: "#BF852E"}}>
                            <i className="fas fa-briefcase"/> ATELIERS DE LA COLLINE
                        </h3>
                        <h4 style={{color: "#BF852E"}}>
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
                        style={{color: "#C12600"}}
                        dateText="02/2016 - 11/2016"
                        dateInnerStyle={{background: "#C12600"}}
                        bodyContainerStyle={{
                            background: "#ddd",
                            padding: "20px",
                            borderRadius: "8px",
                            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
                        }}
                    >
                        <h3 style={{color: "#C12600"}}>
                            <i className="fas fa-briefcase"/> EFDD
                        </h3>
                        <h4 style={{color: "#C12600"}}>
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
                        style={{color: "#273238"}}
                        dateInnerStyle={{background: "#273238"}}
                        bodyContainerStyle={{
                            background: "#ddd",
                            padding: "20px",
                            borderRadius: "8px",
                            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
                        }}
                    >
                        <h3 style={{color: "#273238"}}>
                            <i className="fas fa-briefcase"/> NOVA MJ, Maison des Jeunes de
                            Chaudfontaine
                        </h3>
                        <h4 style={{color: "#273238"}}>
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
                        style={{color: "#C12600"}}
                        dateInnerStyle={{background: "#C12600"}}
                    >
                        <h3>
                            <i className="fas fa-graduation-cap"/> Formation CNV
                        </h3>
                        <h4>
                            Gestion de conflit et gestion de groupes. Université de Paix
                            Namur.
                        </h4>
                    </TimelineItem>
                    <TimelineItem
                        key="006"
                        dateText="2006-2008"
                        style={{color: "#273238"}}
                        dateInnerStyle={{background: "#273238"}}
                        bodyContainerStyle={{
                            background: "#ddd",
                            padding: "20px",
                            borderRadius: "8px",
                            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
                        }}
                    >
                        <h3 style={{color: "#273238"}}>
                            <i className="fas fa-briefcase"/> CENTRE CULTUREL DE SAMBREVILLE
                        </h3>
                        <h4 style={{color: "#273238"}}>
                            Responsable audiovisuel et vidéaste pour spectacle de théâtre.
                        </h4>
                    </TimelineItem>
                    <TimelineItem
                        key="007"
                        dateText="2005"
                        style={{color: "#C12600"}}
                        dateInnerStyle={{background: "#C12600"}}
                    >
                        <h3 style={{color: "#273238"}}>
                            <i className="fas fa-graduation-cap"/> Service Volontaire
                            Européen.
                        </h3>
                        <h4 style={{color: "#273238"}}>Six mois, en Espagne.</h4>
                    </TimelineItem>
                    <TimelineItem
                        key="008"
                        dateText="1999-2004"
                        style={{color: "#BF852E"}}
                        dateInnerStyle={{background: "#BF852E"}}
                        bodyContainerStyle={{
                            background: "#ddd",
                            padding: "20px",
                            borderRadius: "8px",
                            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)"
                        }}
                    >
                        <h3 style={{color: "#BF852E"}}>
                            <i className="fas fa-graduation-cap"/> Licence (Master) en
                            communication appliquée
                        </h3>
                        <h4 style={{color: "#BF852E"}}>IHECS, Bruxelles.</h4>
                        <p>Section «animation socioculturelle et éducation permanente».</p>
                    </TimelineItem>
                </Timeline>
            </MyTimeline>
            <Projects offset={smOffset[4]}>
                <CogTitle>Aptitudes</CogTitle>
                <BadgesWrapper><Badges/></BadgesWrapper>
            </Projects>
            <Languages offset={smOffset[5]}>
                <LgTitle>Langues</LgTitle>
                <ProjectsWrapper>
                    <ProjectCard title="Français" bg={colors.orange}>
                        <SVG
                            icon="brain"
                            width={16}
                            stroke={colors.red}
                            left="75%"
                            top="15%"
                        />
                        <p>Langue dans laquelle j'ai été programmé... </p>
                    </ProjectCard>
                    <ProjectCard title="English" bg={"orange"}>
                        <SVG
                            icon="thumb"
                            width={16}
                            stroke={colors.red}
                            left="65%"
                            top="50%"
                        />
                        <p>Yes, we can !</p>
                    </ProjectCard>
                    <ProjectCard title="Español" bg={colors.orange}>
                        <SVG icon="toro" width={24} fill={colors.red} left="70%" top="65%"/>
                        <p>Me recuerdo bastante bien, tio.</p>
                    </ProjectCard>
                </ProjectsWrapper>
            </Languages>
            <Contact offset={smOffset[6]}>
                <Inner>
                    <Title>Contact</Title>
                    <ContactText>
                        Posez-<a href="mailto:raphcolson@gmail.com">moi</a> une question ou
                        trouvez-moi sur d'autres plateformes :
                        <br/>
                        <a href="https://www.linkedin.com/in/rapha%C3%ABl-colson">
                            LinkedIn
                        </a>{" "}
                        & <a href="https://github.com/rafacolsn">GitHub</a>
                    </ContactText>
                </Inner>
                <Footer>
                    &copy; 2019 Raphaël Colson | raphcolson@gmail.com | 0476 48 37 10
                </Footer>
            </Contact>
        </Parallax>
    </>
);

export default Index;
