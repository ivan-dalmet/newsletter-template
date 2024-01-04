import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import React from "react";
import { styles } from "./css/styles";
import { AgendaItem } from "./components/Agenda";

export const Newsletter = () => {
  return (
    <Html>
      <Head />
      <Preview>Yelp recent login</Preview>
      <Body style={styles.main}>
        <Container style={styles.container}>
          <Section style={{ ...styles.section, marginBottom: "20px" }}>
            <Img
              width={620}
              style={styles.image}
              src="https://ensa-normandie.fr/wp-content/uploads/2023/10/actus-club-des-pro-de-lensan-scaled.jpg"
              alt="Club des professionnels de l'ENSA Normandie"
            />
          </Section>

          <Section style={styles.section}>
            <Heading style={styles.h1}>
              Taxe d'apprentissage : dernière ligne droite
            </Heading>
            <Text style={styles.text}>
              Toute entreprise soumise à l’impôt sur le revenu ou sur les
              sociétés peut choisir d’affecter une part de sa taxe
              d’apprentissage à l’établissement de formation de son choix. Cette
              part représente 0,09 % de la masse salariale de l’année 2022.
              Chaque contribution est l’occasion pour l’ENSA Normandie de
              rayonner et de se développer.
            </Text>
            <Text style={styles.text}>
              Comment faire ? Une plateforme dédiée a été mise en place par la
              Caisse des Dépôts. Il suffit donc de se rendre sur SOLTéA avant
              fin septembre. Vous pouvez nous retrouver via : SIRET :
              19760164400028, UAI : 0760164R ou tout simplement en tapant École
              nationale supérieure d’architecture de Normandie dans le moteur de
              recherche.
            </Text>
          </Section>

          <Section style={styles.section}>
            <Heading style={styles.h1}>
              Journées Européennes du Patrimoine et du Matrimoine 2023
            </Heading>
            <Text style={styles.text}>
              L’École nationale supérieure d’architecture de Normandie ouvre ses
              portes au public le samedi 16 septembre 2023 à l’occasion des
              Journées européennes du patrimoine :
            </Text>
            <ul style={styles.list}>
              <li>
                <Text style={styles.text}>
                  Visite libre du Parc et de certains espaces du bâtiment (Rdc
                  et 1er étage)
                </Text>
              </li>
              <li>
                <Text style={styles.text}>
                  Présentation d’ouvrages du fonds ancien au sein du pôle
                  documentaire, situé au premier étage
                </Text>
              </li>
            </ul>
            <Text style={styles.text}>
              Conférence de 15h à 16h : « Explorer de nouveaux lieux de
              l’architecture : une pratique féminine ? » par Armelle Le Mouëllic
              et Claire Rosset, docteures en architecture.
            </Text>
            <Button
              style={styles.button}
              href="https://ensa-normandie.fr/conference-explorer-de-nouveaux-lieux-de-larchitecture-une-pratique-feminine/"
            >
              Plus d’infos
            </Button>
            <Text style={styles.text}>Entrée libre (sans inscription)</Text>
          </Section>

          <Section style={styles.agendaContainer}>
            <Container style={styles.agendaInner}>
              <Heading style={styles.agendaTitle}>Agenda</Heading>

              <AgendaItem date="11 sept. 2023">
                Conférence – Matériaux, déchets, expérimentation : Par Alphonse
                Sarthout (Cigüe)
              </AgendaItem>

              <AgendaItem
                date="06 Déc. 2023"
                link="https://www.union-habitat.org/evenements/ensemble-relevons-les-defis-du-logement-dans-les-petites-villes"
                linkText="S'inscrire"
              >
                Conférence nationale de Barentin « Ensemble, relevons les défis
                du logement dans les petites villes
              </AgendaItem>
            </Container>
          </Section>

          <Section style={styles.footer}>© ENSA Rouen</Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Newsletter;
