import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Link,
  Rating,
} from "@mui/material";

const FreelancerProfile = () => {
  const [rating, setRating] = useState(0);
  const [ratings, setRatings] = useState([]);

  const freelancer = {
    name: "John Doe",
    skills: ["JavaScript", "React", "Node.js"],
    experience: "5 years of experience in web development.",
    portfolio: {
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      website: "https://johndoe.com",
    },
    completedProjects: [
      {
        name: "Project A",
        description: "Description of Project A",
        date: "2023-01-01",
      },
      {
        name: "Project B",
        description: "Description of Project B",
        date: "2023-02-01",
      },
    ],
  };

  useEffect(() => {
    const storedRatings = JSON.parse(localStorage.getItem("ratings")) || [];
    setRatings(storedRatings);
  }, []);

  const handleRating = (newRating) => {
    const updatedRatings = [...ratings, newRating];
    setRatings(updatedRatings);
    localStorage.setItem("ratings", JSON.stringify(updatedRatings));
    setRating(newRating);
  };

  const averageRating =
    ratings.length > 0
      ? (ratings.reduce((a, b) => a + b) / ratings.length).toFixed(1)
      : 0;

  return (
    <Container maxWidth="md" className="mt-10">
      <Typography variant="h4" component="h1" gutterBottom>
        {freelancer.name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {freelancer.experience}
      </Typography>
      <Box mt={2}>
        <Typography variant="h6">Skills</Typography>
        <List>
          {freelancer.skills.map((skill) => (
            <ListItem key={skill}>
              <ListItemText primary={skill} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box mt={2}>
        <Typography variant="h6">Portfolio</Typography>
        <List>
          <ListItem>
            <Link
              href={freelancer.portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href={freelancer.portfolio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href={freelancer.portfolio.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </Link>
          </ListItem>
        </List>
      </Box>
      <Box mt={2}>
        <Typography variant="h6">Completed Projects</Typography>
        <List>
          {freelancer.completedProjects.map((project) => (
            <ListItem key={project.name} className="border-b py-2">
              <ListItemText
                primary={project.name}
                secondary={`${project.description} - ${project.date}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box mt={2}>
        <Typography variant="h6">Rating</Typography>
        <Rating
          name="freelancer-rating"
          value={rating}
          onChange={(event, newValue) => {
            handleRating(newValue);
          }}
          precision={0.5}
        />
        <Typography variant="body2">
          Average Rating: {averageRating} ({ratings.length} ratings)
        </Typography>
      </Box>
    </Container>
  );
};

export default FreelancerProfile;
