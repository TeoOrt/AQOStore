const Styles = {
  navStyles: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
  },
  logoContainerStyles: {
    display: "flex",
    alignItems: "center",
  },
  logoStyles: {
    height: "150px",
    weight: "150px",
    marginRight: "20px",
  },
  logoTextStyles: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  navLinksStyles: {
    display: "flex",
    justifyContent: "center",
    flexGrow: 1,
    margin: "0 20px",
  },
  navLinkStyles: {
    fontSize: "1.2rem",
    margin: "0 10px",
    textDecoration: "none",
    color: "#333",
  },
  cartContainerStyles: {
    display: "flex",
    alignItems: "center",
  },
  cartLogoStyles: {
    height: "50px",
  },
  mobileStyles: {
    "@media (max-width: 768px)": {
      navLinksStyles: {
        display: "none",
      },
      logoTextStyles: {
        fontSize: "1.2rem",
      },
      cartLogoStyles: {
        height: "30px",
      },
      logoStyles: {
        height: "40px",
      },
      logoContainerStyles: {
        marginRight: "auto",
      },
    },
  },
};

export default Styles;
