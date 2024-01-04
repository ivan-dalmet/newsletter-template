import React, { ReactNode } from "react";
import {
  Container,
  Text,
  Hr,
  Link,
  Row,
  Column,
} from "@react-email/components";
import { styles } from "../css/styles";

export const AgendaItem = ({
  date,
  link,
  linkText,
  children,
}: {
  date: string;
  link?: string;
  linkText?: string;
  children: ReactNode;
}) => {
  return (
    <Container style={styles.agendaRow}>
      <Row>
        <Column>
          <Text style={styles.agendaDateText}>{date}</Text>
        </Column>
        <Column style={{ textAlign: "right" }}>
          <Link href={link} style={styles.agendaAction}>
            {linkText}
          </Link>
        </Column>
      </Row>
      <Hr style={styles.agendaDivider} />
      <Text style={styles.agendaDescriptionText}>{children}</Text>
    </Container>
  );
};
