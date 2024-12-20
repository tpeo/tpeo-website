import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  Grid,
  Fade,
  Modal,
  IconButton,
} from "@mui/material";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import LockIcon from "@mui/icons-material/Lock";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FAQ from "./sponsorsPage/FAQ";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leaf from "../assets/vectorImages/leaf.png";
import ProjectCard from "../components/ProjectCard";
import CloseIcon from "@mui/icons-material/Close";
import Hively from "../assets/projectImages/Hively.png";
import Thoughtless from "../assets/projectImages/Thoughtless.png";
import TPEOProcess from "../assets/vectorImages/TPEOProcess.png";
import notionLogo from '../assets/iconImages/notion_logo.png';
import githubLogo from '../assets/iconImages/github_logo.png';
import slackLogo from '../assets/iconImages/slack_logo.png';

function NewFellowPage() {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  // Dynamically import all images from the specified directory
  const importAll = (r) =>
    r.keys().map((key, index) => ({
      id: index + 1,
      url: r(key),
      alt: `Carousel Slide ${index + 1}`,
    }));

  const images = importAll(
    require.context(
      "../assets/socialImages",
      false,
      /\.(png|jpg|jpeg|svg|JPG|JPEG)$/
    )
  );

  const settings = {
    dots: false,
    infinite: true, // Consider keeping infinite regardless of image count for a continuous feel
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          background: `linear-gradient(to right, rgba(26, 32, 44, 1) 40%, rgba(236, 145, 62, 0.5) 100%)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          paddingLeft: "4vw",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Fade in={true} timeout={600}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "DM Sans",
              fontWeight: 700,
              fontSize: "4vw",
              color: theme.palette.text.primary,
              marginBottom: "2vh",
              marginTop: "30vh",
              textAlign: "left",
              width: "100%",
              maxWidth: "1200px",
            }}
          >
            new fellows
          </Typography>
        </Fade>

        <Fade in={true} timeout={800}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              fontSize: "2vw",
              color: theme.palette.text.primary,
              marginBottom: "0vh",
              textAlign: "left",
              width: "50vw",
            }}
          >
            Teach full-stack engineering, UI/UX design, and product management
            in semester-long courses to UT Austin students of all majors!
          </Typography>
        </Fade>

        <Grid container spacing={4} sx={{ width: "85vw", paddingTop: "12vh" }}>
          <Fade in={true} timeout={1000}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ color: theme.palette.text.primary, width: "16vw" }}>
                <EnergySavingsLeafIcon
                  sx={{ fontSize: "2vw", marginBottom: 2 }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, fontSize: "1.25vw" }}
                >
                  Tangible Skills
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 400, fontSize: "0.95vw" }}
                >
                  Learn Figma, product lifecycle, React and more that can be
                  used in industry!
                </Typography>
              </Box>
            </Grid>
          </Fade>
          <Fade in={true} timeout={1100}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ color: theme.palette.text.primary, width: "16vw" }}>
                <AdsClickIcon sx={{ fontSize: "2vw", marginBottom: 2 }} />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, fontSize: "1.25vw" }}
                >
                  Learn from Experienced Directors & Leads
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 400, fontSize: "0.95vw" }}
                >
                  Our curriculum will be taught by those who have interned at
                  top programs in their respective fields
                </Typography>
              </Box>
            </Grid>
          </Fade>
          <Fade in={true} timeout={1200}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ color: theme.palette.text.primary, width: "16vw" }}>
                <LockIcon sx={{ fontSize: "2vw", marginBottom: 2 }} />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, fontSize: "1.25vw" }}
                >
                  Direct Application
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 400, fontSize: "0.95vw" }}
                >
                  Build production-ready projects for Austin-area nonprofit
                  organizations
                </Typography>
              </Box>
            </Grid>
          </Fade>
          <Fade in={true} timeout={1300}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ color: theme.palette.text.primary, width: "16vw" }}>
                <NotificationsIcon sx={{ fontSize: "2vw", marginBottom: 2 }} />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, fontSize: "1.25vw" }}
                >
                  Cross-Collaboration
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 400, fontSize: "0.95vw" }}
                >
                  Work with other fellows outside of your respective discipline
                </Typography>
              </Box>
            </Grid>
          </Fade>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          height: "auto",
          paddingX: "3vw", // Add padding here instead of on the Grid
        }}
      >
        {/* How TPEO works section */}
        <Box
          sx={{
            textAlign: "center",
            width: "40%",
            marginTop: "10vh",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "DM Sans",
              fontWeight: 700,
              fontSize: "3.8vw",
              color: theme.palette.secondary.main,
              marginBottom: "20px",
            }}
          >
            How TPEO fellowship works
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              fontSize: "1.3vw",
              color: theme.palette.text.primary,
            }}
          >
            Our process. We only do Fall Recruitment!
          </Typography>
          
        </Box>
        <Box
            component="img"
            src={TPEOProcess}
            alt="Our Process"
            sx={{
              width: "100%",
              marginTop: "5vh",
            }}
          />
        {/* Socials carousel section */}
        <Box
          sx={{
            textAlign: "center",
            width: "40%",
            marginTop: "10vh",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "DM Sans",
              fontWeight: 700,
              fontSize: "3.8vw",
              color: theme.palette.secondary.main,
              marginBottom: "20px",
            }}
          >
            Socials
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              fontSize: "1.3vw",
              color: theme.palette.text.primary,
            }}
          >
            Apart from the innovation we incubate, we also have fun!
          </Typography>
        </Box>
        <Box
          sx={{
            width: "95%",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mt: "5vh",
            marginBottom: "10vh",
          }}
        >
          <Slider {...settings}>
            {images.map((image) => (
              <div key={image.id} onClick={() => handleOpen(image.url)}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "26vw",
                    height: "26vw",
                    backgroundColor: "#D9D9D9",
                    borderRadius: "15px",
                    overflow: "hidden",
                    margin: "auto",
                  }}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </div>
            ))}
          </Slider>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            width: "80%",
            marginTop: "10vh",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "DM Sans",
              fontWeight: 700,
              fontSize: "3.8vw",
              color: theme.palette.secondary.main,
              marginBottom: "20px",
            }}
          >
            Past New Fellow Projects
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              fontSize: "1.3vw",
              color: theme.palette.text.primary,
            }}
          >
            Here's some cool things that our new fellows have built in the past!
          </Typography>
        </Box>
        <Box
          sx={{
            width: "95%",
            mx: "auto",
            mt: "5vh",
            marginBottom: "10vh",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <ProjectCard
            name="Hively"
            imageLink={Hively}
            brief="Hively is a collaborative platform designed to simplify the college housing search. 
            It empowers students to sign up, form groups, and create research cards that make comparing and contrasting housing options a breeze. 
            With features tailored for collaborative decision-making, Hively turns the daunting task of finding the perfect home into an organized 
            and streamlined experience, helping students discover their ideal living arrangements with ease."
            iconImage={leaf}
            height="43" // Height in vh
            width="40" // Width in vw
            link="https://hively.vercel.app/"
          />
          <ProjectCard
            name="Thoughtless"
            imageLink={Thoughtless}
            brief="Thoughtless is a site that reimagines the way student organizations can grade applications. It comes with a built-in spreadsheet 
            crawler to process information from third-party application platforms and organizes applicant data in an aesthetic, easy-to-read format. 
            With integrated scoring and comments, graders can easily provide accurate scores and thoughtful feedback. Thoughtless is how we will make 
            the application review process a whole lot easier."
            iconImage={leaf}
            height="43" // Height in vh
            width="40" // Width in vw
            link="https://thoughtless-teal.vercel.app/"
          />
        </Box>
        <Box
          sx={{
            textAlign: "center",
            width: "80%",
            marginTop: "10vh",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "DM Sans",
              fontWeight: 700,
              fontSize: "3.8vw",
              color: theme.palette.secondary.main,
              marginBottom: "20px",
            }}
          >
            Our Engineering Curriculum
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              fontSize: "1.3vw",
              color: theme.palette.text.primary,
            }}
          >
            Get a taste of how it is to be a new fellow!
          </Typography>
        </Box>
        <Box
          sx={{
            width: "95%",
            mx: "auto",
            mt: "5vh",
            marginBottom: "10vh",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <ProjectCard
            name="Notion"
            imageLink={notionLogo}
            brief="All of this semester's current slides and recordings"
            iconImage={leaf}
            height="35" // Height in vh
            width="25" // Width in vw
            link="https://amber-toad-552.notion.site/Full-stack-Curriculum-c8ca7a55be514fa78606c55565a1cd82"
          />
          <ProjectCard
            name="GitHub"
            imageLink={githubLogo}
            brief="Our previous recordings from years past!"
            iconImage={leaf}
            height="35" // Height in vh
            width="25" // Width in vw
            link='https://github.com/tpeo/full-stack-curriculum-2024'
          />
          <ProjectCard
            name="Slack"
            imageLink={slackLogo}
            brief="Join #tpeo-engineering-curriculum-2024 for any and all updates!"
            iconImage={leaf}
            height="35" // Height in vh
            width="25" // Width in vw
            link="https://join.slack.com/t/txproduct/shared_invite/zt-2p5x3m8xd-0C8RxZDrqw6intMXII6aug"
          />
        </Box>
      </Box>

      <FAQ type="NewFellow"></FAQ>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "transparent",
          backdropFilter: "none",
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                bgcolor: "rgba(0, 0, 0, 0.7)", // Slightly darker background for visibility
                color: "#fff",
                borderRadius: "50%",
                p: 1,
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.7)", // Keep the background solid on hover
                },
              }}
            >
              <CloseIcon />
            </IconButton>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected"
                style={{
                  width: "auto",
                  height: "90vh", // Height fits within the viewport height
                  maxWidth: "100%", // Ensure width fits within the viewport width
                  objectFit: "contain",
                  display: "block",
                  margin: "auto",
                  borderRadius: "12px",
                }}
              />
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default NewFellowPage;
