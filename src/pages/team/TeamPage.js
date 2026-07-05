import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import imgTeamStar from "../../assets/aboutIcons/team-doodle-2.png";
import imgTeamSquiggle from "../../assets/aboutIcons/team-squiggle.png";
import imgDefaultProfile from "../../assets/aboutIcons/megaphone.png"; // Placeholder
import imgVaishnuvThiagarajan from "../../assets/teamMembers/vaishnuv-thiagarajan.png";
import imgVickieHu from "../../assets/teamMembers/vickie-hu.png";
import imgVenkatSundaram from "../../assets/teamMembers/venkat-sundaram.png";
import imgKrishParkih from "../../assets/teamMembers/krish-parkih.png";
import imgIsaMelendez from "../../assets/teamMembers/isa-melendez.png";
import imgShrutiNair from "../../assets/teamMembers/shruti-nair.png";
import imgAshaKayRountree from "../../assets/teamMembers/asha-kay-rountree.png";
import imgNikithaKumar from "../../assets/teamMembers/nikitha-kumar.png";
import imgKatieVo from "../../assets/teamMembers/katie-vo.png";
import imgVietDang from "../../assets/teamMembers/viet-dang.png";
import imgShriyaaBalaji from "../../assets/teamMembers/shriyaa-balaji.png";
import imgArchanaArangil from "../../assets/teamMembers/archana-arangil.png";
import imgAayushIshware from "../../assets/teamMembers/aayush-ishware.png";
import imgJennaLee from "../../assets/teamMembers/jenna-lee.png";
import imgRyanZhou from "../../assets/teamMembers/ryan-zhou.png";
import imgNolanYee from "../../assets/teamMembers/nolan-yee.png";
import imgAshwikaKatiyar from "../../assets/teamMembers/ashwika-katiyar.png";
import imgKrishPatelShah from "../../assets/teamMembers/krish-patel-shah.png";
import imgMohammadAlMasalmeh from "../../assets/teamMembers/mohammad-al-masalmeh.png";
import imgStellaLi from "../../assets/teamMembers/stella-li.png";
import {
  pageRootSx,
  sectionPx,
  heroPt,
  heroTitleFont,
  heroContentGap,
} from "../../styles/pageLayout";

const categories = ["Leadership", "Product", "Design", "Engineering", "Alumni"];

const teamData = {
  Leadership: [
    { name: "Vaishnuv Thiagarajan", role: "President", fellowship: "Product Fellow", image: imgVaishnuvThiagarajan },
    { name: "Vickie Hu", role: "Projects Director", fellowship: "Product Fellow", image: imgVickieHu },
    { name: "Venkat Sundaram", role: "Product Director", fellowship: "Product Fellow", image: imgVenkatSundaram },
    { name: "Krish Parkih", role: "Engineering Director", fellowship: "Engineering Fellow", image: imgKrishParkih },
    { name: "Isa Melendez", role: "Design Director", fellowship: "Design Fellow", image: imgIsaMelendez },
    { name: "Shruti Nair", role: "Design Senior Lead", fellowship: "Design Fellow", image: imgShrutiNair },
    { name: "Asha Kay Rountree", role: "Corporate Director", fellowship: "Design Fellow", image: imgAshaKayRountree },
    { name: "Nikitha Kumar", role: "Marketing Director", fellowship: "Design Fellow", image: imgNikithaKumar },
    { name: "Katie Vo", role: "Social Co-Director", fellowship: "Product Lead", image: imgKatieVo },
    { name: "Viet Dang", role: "Social Co-director", fellowship: "Engineering Fellow", image: imgVietDang },
    { name: "Shriyaa Balaji", role: "Events Co-director", fellowship: "Engineering Fellow", image: imgShriyaaBalaji },
    { name: "Archana Arangil", role: "Product Lead", image: imgArchanaArangil },
    { name: "Aayush Ishware", role: "Finance Director", fellowship: "Engineering Fellow", image: imgAayushIshware },
  ],
  Product: [
    { name: "Rohan Yelandur", role: "Product Lead", image: imgDefaultProfile },
    { name: "Katie Vo", role: "Social Co-Director", fellowship: "Product Lead", image: imgKatieVo },
    { name: "Archana Arangil", role: "Product Lead", image: imgArchanaArangil },
    { name: "Advaith Nair", role: "Product Fellow", image: imgDefaultProfile },
    { name: "Kate Lock", role: "Product Fellow", image: imgDefaultProfile },
  ],
  Design: [
    { name: "Lotus Pascale", role: "Design Lead", image: imgDefaultProfile },
    { name: "Yasmine Tsan", role: "Design Lead", image: imgDefaultProfile },
    { name: "Asha Kay Rountree", role: "Design Lead", image: imgAshaKayRountree },
    { name: "Nico Campanell", role: "Design Member", image: imgDefaultProfile },
  ],
  Engineering: [
    { name: "Jenna Lee", role: "Engineering Lead", image: imgJennaLee },
    { name: "Ryan Zhou", role: "Engineering Lead", image: imgRyanZhou },
    { name: "Nolan Yee", role: "Engineering Lead", image: imgNolanYee },
    { name: "Shriyaa Balaji", role: "Events Co-director", fellowship: "Engineering Fellow", image: imgShriyaaBalaji },
    { name: "Viet Dang", role: "Social Co-director", fellowship: "Engineering Fellow", image: imgVietDang },
    { name: "Aayush Ishware", role: "Finance Director", fellowship: "Engineering Fellow", image: imgAayushIshware },
    { name: "Ashwika Katiyar", role: "Engineering Fellow", image: imgAshwikaKatiyar },
    { name: "Krish Patel-Shah", role: "Engineering Fellow", image: imgKrishPatelShah },
    { name: "Mohammad Al Masalmeh", role: "Engineering Fellow", image: imgMohammadAlMasalmeh },
    { name: "Stella Li", role: "Engineering Fellow", image: imgStellaLi },
  ],
  Alumni: [
    { name: "Alumni Name", role: "Past President", fellowship: "Alumni", image: imgDefaultProfile },
  ],
};

function getCategoryMembers(category) {
  const members = teamData[category] || [];
  if (category === "Leadership") {
    return members;
  }

  const categoryLower = category.toLowerCase();
  const leadershipDirectors = teamData.Leadership.filter(
    (member) =>
      /director/i.test(member.role) &&
      member.role.toLowerCase().includes(categoryLower)
  );

  const existingNames = new Set(members.map((member) => member.name));
  const additionalDirectors = leadershipDirectors.filter(
    (member) => !existingNames.has(member.name)
  );

  const allMembers = [...members, ...additionalDirectors];

  return allMembers.sort((a, b) => {
    const aIsDirector = /director/i.test(a.role);
    const bIsDirector = /director/i.test(b.role);
    if (aIsDirector === bIsDirector) return 0;
    return aIsDirector ? -1 : 1;
  });
}

function MemberCard({ name, role, fellowship, image }) {
  const showFellowship = fellowship && fellowship !== role;

  return (
    <Box sx={{ width: { xs: "100%", sm: "293px" }, maxWidth: "293px", display: "flex", flexDirection: "column", gap: "1px" }}>
      <Box
        sx={{
          height: "250px",
          width: "293px",
          borderRadius: "20px 20px 0 0",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={image}
          alt={name}
          width={586}
          height={500}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: "#191919",
          border: "1px solid #444",
          borderRadius: "0 0 20px 20px",
          p: "28px 32px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 700,
            fontSize: "28px",
            lineHeight: "36px",
            color: "#FFFFFF",
          }}
        >
          {name}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "36px",
              color: "#D7D7D7",
            }}
          >
            {role}
          </Typography>
          {showFellowship && (
            <Typography
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "36px",
                color: "#D7D7D7",
              }}
            >
              {fellowship}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}

MemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  fellowship: PropTypes.string,
  image: PropTypes.string.isRequired,
};

function TeamPage() {
  const [selectedCategory, setSelectedCategory] = useState("Leadership");

  return (
    <Box sx={{ ...pageRootSx, overflowX: { xs: "hidden", md: "visible" } }}>
      {/* Background Doodles */}
      <Box
        component="img"
        src={imgTeamSquiggle}
        alt=""
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          pointerEvents: "none",
          mixBlendMode: "lighten",
          zIndex: 2,
          right: { md: "-16px", lg: "-24px" },
          top: { md: "235px", lg: "255px" },
          width: { md: "320px", lg: "420px" },
          height: "auto",
        }}
      />

      {/* ========== HERO SECTION ========== */}
      <Box
        sx={{
          pt: heroPt,
          px: sectionPx,
          pb: "47px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Star beside title — Figma 38:141 (website-05) */}
        <Box
          component="img"
          src={imgTeamStar}
          alt=""
          sx={{
            position: "absolute",
            pointerEvents: "none",
            mixBlendMode: "lighten",
            display: { xs: "none", md: "block" },
            top: { md: "18px", lg: "30px", xl: "42px" },
            left: { md: "385px", lg: "445px", xl: "525px" },
            width: { md: "180px", lg: "220px", xl: "256px" },
            height: "auto",
            zIndex: 2,
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", gap: heroContentGap }}>
          <Typography
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: heroTitleFont,
              lineHeight: "normal",
              color: "#FFFFFF",
            }}
          >
            Meet Team <span style={{ color: "#F3801A" }}>TPEO</span>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "flex-start" },
              width: "100%",
              gap: "24px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "20px", md: "24px" },
                lineHeight: "36px",
                color: "#D7D7D7",
                maxWidth: "770px",
                flex: "1 1 auto",
              }}
            >
              We’re a passionate group of students building real world projects, learning, and growing together.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ========== CATEGORY SELECTOR ========== */}
      <Box sx={{ px: sectionPx, mb: "43px", position: "relative", zIndex: 1, overflowX: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", md: "space-between" },
            borderBottom: "1px solid #444",
            pb: "0px",
            minWidth: { xs: "600px", md: "auto" },
          }}
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <Box
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                sx={{
                  flex: 1,
                  textAlign: "center",
                  cursor: "pointer",
                  py: "15px",
                  position: "relative",
                  "&::after": isSelected
                    ? {
                        content: '""',
                        position: "absolute",
                        bottom: "-1px",
                        left: 0,
                        right: 0,
                        height: "3px",
                        background: "linear-gradient(90deg, #FB8C14 0%, #F6A606 100%)",
                      }
                    : {},
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                    fontWeight: isSelected ? 700 : 400,
                    fontSize: "28px",
                    lineHeight: "36px",
                    color: isSelected ? "transparent" : "#D7D7D7",
                    ...(isSelected && {
                      backgroundImage: "linear-gradient(90deg, #FB8C14 0%, #F6A606 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }),
                  }}
                >
                  {cat}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* ========== MEMBERS GRID ========== */}
      <Box
        sx={{
          px: sectionPx,
          pb: "128px",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(auto-fill, minmax(260px, 293px))",
          },
          gap: "40px",
          justifyContent: "center",
          minHeight: "400px",
        }}
      >
        {getCategoryMembers(selectedCategory).map((member, index) => (
          <MemberCard key={`${member.name}-${index}`} {...member} />
        ))}
      </Box>
    </Box>
  );
}

export default TeamPage;
