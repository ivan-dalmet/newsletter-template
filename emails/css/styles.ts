import { CSSProperties } from "react";

import { theme } from "./theme";

export const styles = {
  main: {
    backgroundColor: theme.colors.white,
    fontFamily: theme.fontFamily.sans,
  },
  container: {
    margin: "0 auto",
    padding: "20px 0 48px",
  },
  section: {
    margin: "8px 0",
  },
  agendaContainer: {
    margin: "24px 0",
    background: "#fafafa",
    borderRadius: "8px",
  },
  agendaInner: {
    padding: "12px 20px",
  },
  agendaTitle: {
    color: theme.colors.brand,
    fontFamily: theme.fontFamily.sans,
    fontSize: "16px",
    fontWeight: "bold",
    margin: "8px 0 24px 0",
    padding: "0",
  },
  agendaRow: {
    margin: "0 0 24px",
  },
  agendaDateText: {
    color: theme.colors.text,
    fontFamily: theme.fontFamily.sans,
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "1.5",
    margin: "0",
  },
  agendaAction: {
    color: theme.colors.brand,
    fontFamily: theme.fontFamily.sans,
    fontSize: "12px",
    fontWeight: "bold",
    textDecoration: "underline",
    lineHeight: "1.5",
    margin: "0",
  },
  agendaDivider: {
    margin: "4px 0",
  },
  agendaDescriptionText: {
    color: theme.colors.text,
    fontFamily: theme.fontFamily.sans,
    fontSize: "14px",
    lineHeight: "1.5",
    margin: "0",
  },
  image: {
    maxWidth: "100%",
  },
  h1: {
    color: theme.colors.brand,
    fontFamily: theme.fontFamily.sans,
    fontSize: "20px",
    fontWeight: "bold",
    margin: "8px 0",
    padding: "0",
  },
  link: {
    color: theme.colors.brand,
    fontFamily: theme.fontFamily.sans,
    textDecoration: "underline",
  },
  button: {
    fontSize: "14px",
    backgroundColor: theme.colors.brand,
    color: theme.colors.white,
    lineHeight: 1.5,
    borderRadius: "0.5em",
    padding: "10px 20px",
  },
  text: {
    color: theme.colors.text,
    fontFamily: theme.fontFamily.sans,
    fontSize: "14px",
    margin: "8px 0",
    lineHeight: "1.5",
  },
  list: {
    margin: "0",
  },
  code: {
    display: "inline-block",
    padding: "12px 16px",
    width: "100%",
    wordBreak: "break-all",
    fontSize: "12px",
    backgroundColor: "#f4f4f4",
    borderRadius: "5px",
    border: "1px solid #eee",
    color: theme.colors.text,
  },
  footer: {
    color: "#898989",
    fontFamily: theme.fontFamily.sans,
    fontSize: "12px",
    lineHeight: "22px",
  },
} satisfies Record<string, CSSProperties>;
