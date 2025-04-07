/*import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

const BidForm = ({ projectId }) => {
  const [bidAmount, setBidAmount] = useState("");
  const [proposedTimeline, setProposedTimeline] = useState("");
  const [shortProposal, setShortProposal] = useState("");
  const [bidStatus, setBidStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    const bidDetails = {
      projectId,
      bidAmount,
      proposedTimeline,
      shortProposal,
      status: bidStatus,
    };
    localStorage.setItem(`bid_${projectId}`, JSON.stringify(bidDetails));
    alert("Bid submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <TextField
        label="Bid Amount (₹)"
        type="number"
        value={bidAmount}
        onChange={(e) => setBidAmount(e.target.value)}
        required
        className="mr-2 w-full"
        variant="outlined"
        InputProps={{
          className: "bg-white dark:bg-gray-700 text-black dark:text-white",
        }}
      />
      <TextField
        label="Proposed Timeline (days)"
        type="number"
        value={proposedTimeline}
        onChange={(e) => setProposedTimeline(e.target.value)}
        required
        className="mr-2 w-full"
        variant="outlined"
        InputProps={{
          className: "bg-white dark:bg-gray-700 text-black dark:text-white",
        }}
      />
      <TextField
        label="Short Proposal"
        value={shortProposal}
        onChange={(e) => setShortProposal(e.target.value)}
        required
        multiline
        rows={2}
        className="mr-2 w-full"
        variant="outlined"
        InputProps={{
          className: "bg-white dark:bg-gray-700 text-black dark:text-white",
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="mt-2"
      >
        Place Bid
      </Button>
    </form>
  );
};

export default BidForm;
*/

import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const BidForm = ({ projectId }) => {
  const [bidAmount, setBidAmount] = useState("");
  const [proposedTimeline, setProposedTimeline] = useState("");
  const [shortProposal, setShortProposal] = useState("");
  const [bidStatus, setBidStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    const bidDetails = {
      projectId,
      bidAmount,
      proposedTimeline,
      shortProposal,
      status: bidStatus,
    };
    localStorage.setItem(`bid_${projectId}`, JSON.stringify(bidDetails));
    alert("Bid submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <TextField
        label="Bid Amount (₹)"
        type="number"
        value={bidAmount}
        onChange={(e) => setBidAmount(e.target.value)}
        required
        className="mr-2 w-full"
        variant="outlined"
        sx={{
          backgroundColor: "background.paper",
          "&.Mui-focused": {
            backgroundColor: "background.paper",
          },
          "&.MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "text.primary",
            },
            "&:hover fieldset": {
              borderColor: "text.secondary",
            },
            "&.Mui-focused fieldset": {
              borderColor: "primary.main",
            },
          },
        }}
      />
      <TextField
        label="Proposed Timeline (days)"
        type="number"
        value={proposedTimeline}
        onChange={(e) => setProposedTimeline(e.target.value)}
        required
        className="mr-2 w-full"
        variant="outlined"
        sx={{
          backgroundColor: "background.paper",
          "&.Mui-focused": {
            backgroundColor: "background.paper",
          },
          "&.MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "text.primary",
            },
            "&:hover fieldset": {
              borderColor: "text.secondary",
            },
            "&.Mui-focused fieldset": {
              borderColor: "primary.main",
            },
          },
        }}
      />
      <TextField
        label="Short Proposal"
        value={shortProposal}
        onChange={(e) => setShortProposal(e.target.value)}
        required
        multiline
        rows={2}
        className="mr-2 w-full"
        variant="outlined"
        sx={{
          backgroundColor: "background.paper",
          "&.Mui-focused": {
            backgroundColor: "background.paper",
          },
          "&.MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "text.primary",
            },
            "&:hover fieldset": {
              borderColor: "text.secondary",
            },
            "&.Mui-focused fieldset": {
              borderColor: "primary.main",
            },
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="mt-2"
      >
        Place Bid
      </Button>
    </form>
  );
};

export default BidForm;
