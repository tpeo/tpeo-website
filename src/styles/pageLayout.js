/** Shared responsive layout tokens for desktop pages */

export const pageRootSx = {
  backgroundColor: "#101010",
  width: "100%",
  overflowX: "hidden",
  position: "relative",
};

export const sectionPx = { xs: "24px", sm: "32px", md: "48px", lg: "80px" };
export const sectionPy = { xs: "48px", sm: "64px", md: "100px" };
/** Figma desktop: 140px below nav (hero content y=281, nav h=141 on 1512px frames) */
export const heroPt = { xs: "56px", sm: "80px", md: "100px", lg: "140px" };
/** Figma: 24px between hero H1 and body copy */
export const heroContentGap = "24px";
export const heroTitleFont = { xs: "36px", sm: "44px", md: "52px", lg: "64px" };
export const sectionGap = { xs: "32px", sm: "40px", md: "60px" };

export const sectionContainerSx = {
  py: sectionPy,
  px: sectionPx,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: sectionGap,
  width: "100%",
  boxSizing: "border-box",
};

export const cardRowSx = {
  display: "flex",
  flexWrap: { xs: "wrap", md: "nowrap" },
  justifyContent: "center",
  alignItems: "stretch",
  gap: { xs: "24px", md: "24px", lg: "40px" },
  width: "100%",
};

/** Use on each card inside a 3-column row so columns stay in one row from md up */
export const threeColCardSx = {
  flex: { xs: "1 1 100%", md: "1 1 0" },
  minWidth: 0,
  width: { xs: "100%", md: "auto" },
  boxSizing: "border-box",
};

export const hideBelowLg = { display: { xs: "none", lg: "block" } };
export const hideBelowXl = { display: { xs: "none", xl: "block" } };

/** Figma nav bar height on 1512px frames — page graphics use y minus this value */
export const navHeightLg = 141;

/** Convert a Figma absolute Y (from page top) to `top` within `<main>` */
export const figmaTop = (y) => `${y - navHeightLg}px`;

export const decorativeBgSx = {
  position: "absolute",
  pointerEvents: "none",
  mixBlendMode: "lighten",
  zIndex: 0,
  display: { xs: "none", lg: "block" },
};
