import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import BidForm from "./BidForm";

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <Card key={project.id} className="mb-4 bg-white dark:bg-gray-800">
          <CardContent>
            <Typography variant="h5">{project.name}</Typography>
            <Typography>Budget: ₹{project.budget}</Typography>
            <Typography>Timeline: {project.timeline} days</Typography>
            <Typography>
              Required Skills: {project.skills.join(", ")}
            </Typography>
            <BidForm projectId={project.id} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProjectList;
