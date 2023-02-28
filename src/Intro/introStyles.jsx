const introStyles = {
  QuotesPage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100%",
  },
  EscapeFromReality: {
    maxWidth: "100%",
    height: "550pt",
    paddingTop: "10pt",
  },
  "@media only screen and (max-width: 768px)": {
    QuotesPage: {
      height: "50vh",
    },
    card: {
      flexDirection: "column",
    },
  },
};

export default introStyles;
