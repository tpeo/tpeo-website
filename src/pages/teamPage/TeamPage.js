import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import imgTeamDoodle1 from "../../assets/aboutIcons/team-doodle-1.svg";
import imgTeamDoodle2 from "../../assets/aboutIcons/team-doodle-2.svg";
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
    { name: "Katie Vo", role: "Social Co-Director", fellowship: "Product Fellow", image: imgKatieVo },
    { name: "Viet Dang", role: "Social Co-director", fellowship: "Engineering Fellow", image: imgVietDang },
    { name: "Shriyaa Balaji", role: "Events Co-director", fellowship: "Engineering Fellow", image: imgShriyaaBalaji },
    { name: "Archana Arangil", role: "Events Co-director", fellowship: "Product Fellow", image: imgArchanaArangil },
    { name: "Aayush Ishware", role: "Finance Director", fellowship: "Engineering Fellow", image: imgAayushIshware },
  ],
  Product: [
    { name: "Member Name", role: "Product Manager", fellowship: "Product Fellow", image: imgDefaultProfile },
  ],
  Design: [
    { name: "Member Name", role: "Lead Designer", fellowship: "Design Fellow", image: imgDefaultProfile },
  ],
  Engineering: [
    { name: "Member Name", role: "Full Stack Engineer", fellowship: "Engineering Fellow", image: imgDefaultProfile },
  ],
  Alumni: [
    { name: "Alumni Name", role: "Past President", fellowship: "Alumni", image: imgDefaultProfile },
  ],
};

function MemberCard({ name, role, fellowship, image }) {
  return (
    <Box sx={{ width: "293px", display: "flex", flexDirection: "column", gap: "1px" }}>
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
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
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
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 700,
            fontSize: "28px",
            lineHeight: "39px",
            color: "#FFFFFF",
          }}
        >
          {name}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "32px",
              color: "#D7D7D7",
            }}
          >
            {role}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "32px",
              color: "#D7D7D7",
            }}
          >
            {fellowship}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

MemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  fellowship: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

function TeamPage() {
  const [selectedCategory, setSelectedCategory] = useState("Leadership");

  return (
    <Box
      sx={{
        backgroundColor: "#101010",
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* Background Doodles */}
      <Box
        component="img"
        src={imgTeamDoodle1}
        alt=""
        sx={{
          position: "absolute",
          top: "266px",
          right: "-50px",
          width: "262px",
          height: "262px",
          pointerEvents: "none",
          mixBlendMode: "lighten",
          zIndex: 0,
        }}
      />
      <Box
        component="img"
        src={imgTeamDoodle2}
        alt=""
        sx={{
          position: "absolute",
          top: "152px",
          left: "560px",
          width: "256px",
          height: "257px",
          pointerEvents: "none",
          mixBlendMode: "lighten",
          zIndex: 0,
        }}
      />

      {/* ========== HERO SECTION ========== */}
      <Box
        sx={{
          pt: "257px",
          px: "79px",
          pb: "47px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "40.32px" }}>
          <Typography
            sx={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: "64px",
              lineHeight: "normal",
              color: "#FFFFFF",
            }}
          >
            meet team <span style={{ color: "#F3801A" }}>TPEO</span>.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: "24px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
                fontSize: "28px",
                lineHeight: "39.06px",
                color: "#D7D7D7",
                maxWidth: "770px",
                flex: "0 1 770px",
              }}
            >
              We’re a passionate group of students building real world projects, learning, and growing together.
            </Typography>
            <Box
              component="img"
              src={imgTeamSquiggle}
              alt=""
              sx={{
                flex: "1 1 auto",
                width: "100%",
                maxWidth: "420px",
                minWidth: "220px",
                height: "auto",
                ml: "auto",
                mr: "-60px",
                pointerEvents: "none",
                alignSelf: "center",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* ========== CATEGORY SELECTOR ========== */}
      <Box sx={{ px: "77px", mb: "43px", position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #444",
            pb: "0px",
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
                    fontWeight: isSelected ? 700 : 500,
                    fontSize: "28px",
                    lineHeight: "36px",
                    color: isSelected ? "transparent" : "#FFFFFF",
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
          px: "79px",
          pb: "128px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 293px)",
          gap: "40px",
          justifyContent: "center",
          minHeight: "400px",
        }}
      >
        {teamData[selectedCategory].map((member, index) => (
          <MemberCard key={`${member.name}-${index}`} {...member} />
        ))}
      </Box>
    </Box>
  );
}

export default TeamPage;
