import React from "react";
import { Container, Text } from "@react-email/components";
import { styles } from "../css/styles";

export const AgendaItem = ({ date, children }) => {
  return (
    <Container style={styles.agendaRow}>
      <Text style={styles.agendaDateText}>{date}</Text>
      <Text style={styles.agendaDescriptionText}>{children}</Text>
    </Container>
  );
};
