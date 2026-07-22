import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedPage from "../../components/AnimatedPage";
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
import imgRohanYelandur from "../../assets/teamMembers/rohan-yelandur.png";
import imgAdvaithNair from "../../assets/teamMembers/advaith-nair.png";
import imgKateLock from "../../assets/teamMembers/kate-lock.png";
import imgYasmineTsan from "../../assets/teamMembers/yasmine-tsan.png";
import imgNicoCampanell from "../../assets/teamMembers/nico-campanell.png";
import imgDrishtiGupta from "../../assets/MemberPictures/Drishti Gupta - Product Fellow.jpg";
import imgIyanSonesra from "../../assets/MemberPictures/Iyan Sonesra - Product Fellow.png";
import imgStephanieXia from "../../assets/MemberPictures/Stephanie Xia - Corporate Director, Product Lead.jpg";
import imgMyshaeAllen from "../../assets/MemberPictures/Myshae Allen - Finance Director, Engineering Fellow.JPG";
import imgRiannaSkaria from "../../assets/MemberPictures/Rianna Skaria - Engineering Fellow.jpg";
import imgHantaoJin from "../../assets/MemberPictures/Hantao Jin - Engineering Fellow.jpg";
import imgOliviaWang from "../../assets/MemberPictures/Olivia Wang - Social Co-Director, Engineering Fellow.jpg";
import imgMelissaHuang from "../../assets/MemberPictures/Melissa Huang - Events Co-Director, Engineering Fellow.jpeg";
import imgSarahDing from "../../assets/MemberPictures/Sarah Ding - Engineering Lead.jpg";
import imgRishindraDavuluri from "../../assets/MemberPictures/Rishindra Davuluri - Engineering Fellow.jpg";
import imgSahilChowdhury from "../../assets/MemberPictures/Sahil Chowdhury - Engineering Lead.jpg";
import imgShivanshNikhra from "../../assets/MemberPictures/Shivansh Nikhra - Engineering Fellow.PNG";
import imgRishiGandikota from "../../assets/MemberPictures/Rishi Gandikota - President, Engineering Fellow.jpeg";
import imgEvanKuo from "../../assets/MemberPictures/Evan Kuo - Engineering Fellow.png";
import imgYashKukrecha from "../../assets/MemberPictures/Yash Kukrecha - Engineering Director.jpg";
import imgAarushiLakhi from "../../assets/MemberPictures/Aarushi Lakhi - Projects Director, Engineering Fellow.jpg";
import imgAutumnYeats from "../../assets/MemberPictures/Autumn Yeats- Social Co-Director, Design Fellow.JPG";
import imgSophiaTran from "../../assets/MemberPictures/Sophia Tran - Design Lead.jpg";
import imgShriyaAtreya from "../../assets/MemberPictures/Shriya Atreya - Design Director.jpg";
import teamLinkedIn from "../../data/teamLinkedIn";
import {
  pageRootSx,
  sectionPx,
  heroPt,
  heroTitleFont,
  heroContentGap,
} from "../../styles/pageLayout";

const categories = ["Leadership", "Product", "Design", "Engineering"];

const teamData = {
  Leadership: [
    { name: "Vaishnuv Thiagarajan", role: "President", fellowship: "Product Fellow", image: imgVaishnuvThiagarajan },
    { name: "Vickie Hu", role: "Projects Director", fellowship: "Product Fellow", image: imgVickieHu },
    { name: "Venkat Sundaram", role: "Product Director", fellowship: "Product Fellow", image: imgVenkatSundaram },
    { name: "Krish Parkih", role: "Engineering Director", fellowship: "Engineering Fellow", image: imgKrishParkih },
    { name: "Isa Melendez", role: "Design Director", fellowship: "Design Fellow", image: imgIsaMelendez },
    { name: "Shruti Nair", role: "Design Co-director", fellowship: "Design Fellow", image: imgShrutiNair },
    { name: "Asha Kay Rountree", role: "Corporate Director", fellowship: "Design Fellow", image: imgAshaKayRountree },
    { name: "Nikitha Kumar", role: "Marketing Director", fellowship: "Design Fellow", image: imgNikithaKumar },
    { name: "Katie Vo", role: "Social Co-Director", fellowship: "Product Lead", image: imgKatieVo },
    { name: "Viet Dang", role: "Social Co-director", fellowship: "Engineering Fellow", image: imgVietDang },
    { name: "Shriyaa Balaji", role: "Events Co-director", fellowship: "Engineering Fellow", image: imgShriyaaBalaji },
    { name: "Archana Arangil", role: "Product Lead", image: imgArchanaArangil },
    { name: "Aayush Ishware", role: "Finance Director", fellowship: "Engineering Fellow", image: imgAayushIshware },
  ],
  Product: [
    { name: "Aadi Nair", role: "Product Fellow", image: imgAdvaithNair },
    { name: "Archana Arangil", role: "Product Lead", image: imgArchanaArangil },
    { name: "Drishti Gupta", role: "Product Fellow", image: imgDrishtiGupta },
    { name: "Iyan Sonesra", role: "Product Fellow", image: imgIyanSonesra },
    { name: "Kate Lock", role: "Product Fellow", image: imgKateLock },
    { name: "Katie Vo", role: "Social Co-Director", fellowship: "Product Lead", image: imgKatieVo },
    { name: "Rohan Yelandur", role: "Product Lead", image: imgRohanYelandur },
    { name: "Stephanie Xia", role: "Product Lead", image: imgStephanieXia, imagePosition: "center 65%" },
    { name: "Vaishnuv Thiagarajan", role: "President", fellowship: "Product Fellow", image: imgVaishnuvThiagarajan },
    { name: "Venkat Sundaram", role: "Product Director", fellowship: "Product Fellow", image: imgVenkatSundaram },
    { name: "Vickie Hu", role: "Projects Director", fellowship: "Product Fellow", image: imgVickieHu },
  ],
  Design: [
    { name: "Lotus Pascale", role: "Design Lead", image: imgDefaultProfile },
    { name: "Yasmine Tsan", role: "Design Lead", image: imgYasmineTsan },
    { name: "Sophia Tran", role: "Design Fellow", image: imgSophiaTran },
    { name: "Asha Kay Rountree", role: "Design Lead", image: imgAshaKayRountree },
    { name: "Shriya Atreya", role: "Design Director", fellowship: "Design Fellow", image: imgShriyaAtreya },
    { name: "Shruti Nair", role: "Design Co-director", fellowship: "Design Fellow", image: imgShrutiNair },
    { name: "Autumn Yeats", role: "Design Fellow", image: imgAutumnYeats, imagePosition: "center 35%" },
    { name: "Nikitha Kumar", role: "Marketing Director", fellowship: "Design Fellow", image: imgNikithaKumar },
    { name: "Nico Campanell", role: "Design Fellow", image: imgNicoCampanell },
  ],
  Engineering: [
    { name: "Jenna Lee", role: "Engineering Lead", image: imgJennaLee },
    { name: "Ryan Zhou", role: "Engineering Lead", image: imgRyanZhou },
    { name: "Nolan Yee", role: "Engineering Lead", image: imgNolanYee },
    { name: "Sarah Ding", role: "Engineering Fellow", image: imgSarahDing },
    { name: "Sahil Chowdhury", role: "Engineering Fellow", image: imgSahilChowdhury },
    { name: "Yash Kukrecha", role: "Engineering Fellow", image: imgYashKukrecha },
    { name: "Rishi Gandikota", role: "Engineering Fellow", image: imgRishiGandikota },
    { name: "Myshae Allen", role: "Engineering Fellow", image: imgMyshaeAllen },
    { name: "Olivia Wang", role: "Engineering Fellow", image: imgOliviaWang },
    { name: "Melissa Huang", role: "Engineering Fellow", image: imgMelissaHuang },
    { name: "Shriyaa Balaji", role: "Events Co-director", fellowship: "Engineering Fellow", image: imgShriyaaBalaji },
    { name: "Viet Dang", role: "Social Co-director", fellowship: "Engineering Fellow", image: imgVietDang },
    { name: "Aayush Ishware", role: "Finance Director", fellowship: "Engineering Fellow", image: imgAayushIshware },
    { name: "Ashwika Katiyar", role: "Engineering Fellow", image: imgAshwikaKatiyar },
    { name: "Krish Patel-Shah", role: "Engineering Fellow", image: imgKrishPatelShah },
    { name: "Mohammad Al Masalmeh", role: "Engineering Fellow", image: imgMohammadAlMasalmeh },
    { name: "Stella Li", role: "Engineering Fellow", image: imgStellaLi },
    { name: "Rianna Skaria", role: "Engineering Fellow", image: imgRiannaSkaria },
    { name: "Hantao Jin", role: "Engineering Fellow", image: imgHantaoJin },
    { name: "Rishindra Davuluri", role: "Engineering Fellow", image: imgRishindraDavuluri },
    { name: "Shivansh Nikhra", role: "Engineering Fellow", image: imgShivanshNikhra, imagePosition: "center 35%" },
    { name: "Evan Kuo", role: "Engineering Fellow", image: imgEvanKuo },
    { name: "Aarushi Lakhi", role: "Engineering Fellow", image: imgAarushiLakhi },
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

function MemberCard({ name, role, fellowship, image, imagePosition = "center top" }) {
  const showFellowship = fellowship && fellowship !== role;
  const linkedInUrl = teamLinkedIn[name];

  return (
    <Box
      component={motion.div}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      sx={{
        width: "100%",
        maxWidth: { xs: "180px", sm: "293px" },
        display: "flex",
        flexDirection: "column",
        mx: "auto",
        borderRadius: "20px",
        overflow: "hidden",
        backgroundColor: "#191919",
        border: "1px solid #444",
        position: "relative",
        transition: "box-shadow 0.3s ease",
        "&:hover": {
          boxShadow: "0 10px 38px rgba(243, 128, 26, 0.48)",
          "& .member-linkedin": {
            opacity: 1,
            pointerEvents: "auto",
          },
        },
      }}
    >
      <Box
        sx={{
          height: { xs: "160px", sm: "250px" },
          width: "100%",
          flexShrink: 0,
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
            objectPosition: imagePosition,
            display: "block",
          }}
        />
      </Box>
      <Box
        sx={{
          p: { xs: "12px 16px", md: "28px 32px" },
          pr: linkedInUrl ? { xs: "44px", md: "56px" } : undefined,
          pb: linkedInUrl ? { xs: "36px", md: "48px" } : undefined,
          display: "flex",
          flexDirection: "column",
          gap: { xs: "4px", md: "12px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "DM Sans, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "16px", md: "28px" },
            lineHeight: 1.2,
            color: "#FFFFFF",
          }}
        >
          {name}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "2px", md: "4px" } }}>
          <Typography
            sx={{
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "12px", md: "24px" },
              lineHeight: 1.4,
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
                fontSize: { xs: "12px", md: "24px" },
                lineHeight: 1.4,
                color: "#D7D7D7",
              }}
            >
              {fellowship}
            </Typography>
          )}
        </Box>
      </Box>
      {linkedInUrl && (
        <Box
          component="a"
          className="member-linkedin"
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} LinkedIn`}
          onClick={(e) => e.stopPropagation()}
          sx={{
            position: "absolute",
            right: { xs: "12px", md: "16px" },
            bottom: { xs: "12px", md: "16px" },
            width: { xs: "22px", md: "26px" },
            height: { xs: "22px", md: "26px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(255, 255, 255, 0.45)",
            backgroundColor: "transparent",
            opacity: 0,
            pointerEvents: "none",
            transition: "opacity 0.2s ease, color 0.2s ease, transform 0.2s ease",
            "&:hover": {
              color: "rgba(255, 255, 255, 0.85)",
              transform: "scale(1.08)",
            },
          }}
        >
          <Box
            component="svg"
            viewBox="0 0 24 24"
            aria-hidden
            sx={{ width: "100%", height: "100%", display: "block" }}
          >
            <path
              fill="currentColor"
              d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}

MemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  fellowship: PropTypes.string,
  image: PropTypes.string.isRequired,
  imagePosition: PropTypes.string,
};

function TeamPage() {
  const [selectedCategory, setSelectedCategory] = useState("Leadership");

  return (
    <AnimatedPage>
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
          pb: { xs: "40px", md: "47px" },
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
            display: { xs: "none", lg: "block" },
            top: { lg: "30px", xl: "42px" },
            left: { lg: "445px", xl: "525px" },
            width: { lg: "220px", xl: "256px" },
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
                fontSize: { xs: "18px", md: "24px" },
                lineHeight: { xs: "28px", md: "36px" },
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
      <Box sx={{ px: sectionPx, mb: { xs: "24px", md: "43px" }, position: "relative", zIndex: 1, overflowX: "auto", "&::-webkit-scrollbar": { display: "none" }, msOverflowStyle: "none", scrollbarWidth: "none" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", md: "space-between" },
            borderBottom: "1px solid #444",
            pb: "0px",
            minWidth: { xs: "400px", md: "auto" },
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
                  py: { xs: "10px", md: "15px" },
                  position: "relative",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                    fontWeight: isSelected ? 700 : 400,
                    fontSize: { xs: "14px", md: "28px" },
                    lineHeight: 1.2,
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
                {isSelected && (
                  <Box
                    component={motion.div}
                    layoutId="team-category-underline"
                    transition={{ type: "spring", stiffness: 420, damping: 38 }}
                    sx={{
                      position: "absolute",
                      bottom: "-1px",
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: "linear-gradient(90deg, #FB8C14 0%, #F6A606 100%)",
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* ========== MEMBERS GRID ========== */}
      <Box sx={{ px: sectionPx, pb: { xs: "60px", md: "128px" }, pt: "8px", minHeight: "400px", overflow: "visible" }}>
        <AnimatePresence mode="wait">
          <Box
            key={selectedCategory}
            component={motion.div}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(auto-fill, minmax(130px, 1fr))",
                sm: "repeat(auto-fill, minmax(260px, 293px))",
              },
              gap: { xs: "12px", md: "40px" },
              justifyContent: "center",
              overflow: "visible",
            }}
          >
            {getCategoryMembers(selectedCategory).map((member, index) => (
              <MemberCard key={`${member.name}-${index}`} {...member} />
            ))}
          </Box>
        </AnimatePresence>
      </Box>
    </Box>
    </AnimatedPage>
  );
}

export default TeamPage;
