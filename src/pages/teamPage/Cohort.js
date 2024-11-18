import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  useTheme,
  Fade,
} from "@mui/material";
import { motion } from "framer-motion";

// Component for individual member card
function CohortCard({ name, roles, tags, sourceImage }) {
  const theme = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={ {type: "spring", stiffness: 150 }}
      style={{ width: "100%" }}
    >
      <Box
        sx={{
          backgroundColor: "#202938",
          color: "#FFFFFF",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          transition: "transform 0.3s",
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            width: "100%",
            height: 0,
            paddingTop: "125%", // Creates a 4:5 aspect ratio (adjust as needed)
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src={sourceImage}
            alt={name}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
            }}
          />
        </Box>

        {/* Content Section */}
        <Box sx={{ padding: "2vh 2vw" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "700", marginBottom: "1vh", textAlign: "center" }}
          >
            {name}
          </Typography>
          {/* Display roles */}
          {roles.map((role, index) => (
            <Typography
              key={index}
              sx={{
                fontSize: "1em",
                marginBottom: "0.5vh",
                textAlign: "center",
                color: theme.palette.secondary.main,
              }}
            >
              {role}
            </Typography>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
}

function Cohort() {
  const theme = useTheme();
  const [activeTag, setActiveTag] = useState("Directors");
  const [cohortData, setCohortData] = useState([]);

  const tags = ["Directors", "Product", "Design", "Engineering"];

  // Function to parse filename and extract name and roles
  const parseMemberInfo = (fileName) => {
    // Remove file extension
    const baseName = fileName.replace(/\.(png|jpe?g|svg)$/i, "");

    // Split into name and roles
    const [namePart, rolesPart] = baseName.split(" - ");

    const name = namePart.trim();

    const roles = rolesPart
      ? rolesPart.split(",").map((role) => role.trim())
      : [];

    return { name, roles };
  };

  // Function to determine tags based on roles
  const determineTags = (roles) => {
    let tags = [];

    roles.forEach((role) => {
      const roleLower = role.toLowerCase();

      // Ignore roles that contain "former"
      if (roleLower.includes("former")) {
        return;
      }

      if (
        roleLower.includes("engineering director") ||
        roleLower.includes("design director") ||
        roleLower.includes("product director")
      ) {
        tags.push("Directors");

        if (roleLower.includes("engineering")) {
          tags.push("Engineering");
        } else if (roleLower.includes("design")) {
          tags.push("Design");
        } else if (roleLower.includes("product")) {
          tags.push("Product");
        }
      } else if (
        roleLower.includes("engineering") ||
        roleLower.includes("design") ||
        roleLower.includes("product")
      ) {
        if (roleLower.includes("engineering")) {
          tags.push("Engineering");
        }
        if (roleLower.includes("design")) {
          tags.push("Design");
        }
        if (roleLower.includes("product")) {
          tags.push("Product");
        }
      } else {
        // Roles that don't contain Engineering, Design, or Product are Directors
        tags.push("Directors");
      }
    });

    // Remove duplicate tags
    return [...new Set(tags)];
  };

  // Assign priority based on roles
  const assignPriority = (roles) => {
    let priority = 6; // Default priority for others

    roles.forEach((role) => {
      const roleLower = role.toLowerCase();

      if (roleLower.includes("president")) {
        priority = Math.min(priority, 1);
      } else if (roleLower.includes("engineering director")) {
        priority = Math.min(priority, 2);
      } else if (roleLower.includes("product director")) {
        priority = Math.min(priority, 3);
      } else if (roleLower.includes("design director")) {
        priority = Math.min(priority, 4);
      } else if (roleLower.includes("director")) {
        priority = Math.min(priority, 5);
      }
    });

    return priority;
  };

  useEffect(() => {
    // Import all images from the MemberPictures directory
    const imagesContext = require.context(
      "../../assets/MemberPictures",
      false,
      /\.(png|jpe?g|svg)$/i
    );

    const imagesPaths = imagesContext.keys();

    // Generate cohortData
    const data = imagesPaths.map((imagePath) => {
      // Get the image module
      const imageModule = imagesContext(imagePath);

      // Extract filename
      const fileName = imagePath.replace("./", "");

      // Parse member info
      const { name, roles } = parseMemberInfo(fileName);

      // Determine tags
      const memberTags = determineTags(roles);

      // Assign priority
      const priority = assignPriority(roles);

      return {
        name,
        roles,
        tags: memberTags,
        sourceImage: imageModule.default || imageModule,
        priority
      };
    });

    setCohortData(data);
  }, []);

  // Filter and sort members
  const sortedMembers = cohortData
    .filter((member) => member.tags.includes(activeTag))
    .sort((a, b) => a.priority - b.priority);

  return (
    <Box sx={{ padding: 3, backgroundColor: theme.palette.background.default }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "DM Sans",
          fontWeight: 700,
          color: theme.palette.primary.main,
          marginBottom: 2,
          textAlign: "center",
          fontSize: "3vw",
          marginTop: "5vh",
        }}
      >
        Cohorts
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 5,
          marginTop: 3,
          gap: "1vw",
          flexWrap: "wrap",
        }}
      >
        {tags.map((tag) => (
          <Button
            key={tag}
            onClick={() => setActiveTag(tag)}
            variant="contained"
            sx={{
              borderRadius: "15px",
              fontSize: "1.3vw",
              padding: "1vh 2vw",
              backgroundColor:
                activeTag === tag
                  ? "rgba(236, 145, 62, 0.8)"
                  : "rgba(236, 145, 62, 0.2)",
              fontWeight: activeTag === tag ? "bold" : "normal",
              color: "white",
              transition:
                "background-color 0.3s ease, letter-spacing 0.3s ease, font-weight 0.3s ease",
              "&:hover": {
                letterSpacing: "0.03em",
                background: "rgba(236, 145, 62, 0.4)",
                transition:
                  "background-color 0.3s ease, letter-spacing 0.3s ease, font-weight 0.3s ease",
              },
            }}
          >
            {tag}
          </Button>
        ))}
      </Box>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", paddingX: "5vw" }}
      >
        {sortedMembers
          .filter((member) => member.tags.includes(activeTag))
          .map((member, index) => (
            <Fade
              key={member.name}
              in={true}
              timeout={(index + 1) * 300} // Delay each card appearance slightly for a staggered effect
            >
              <Grid
                item
                xs={6}
                sm={4}
                md={3}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <CohortCard {...member} />
              </Grid>
            </Fade>
          ))}
      </Grid>
    </Box>
  );
}

export default Cohort;
