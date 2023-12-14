
"use client"

import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';

const CircularProgressWithLabel = (props) => {

    
    
    return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          size={50}
          style={{ color: "#F7CB4B" }}
          variant="determinate"
          {...props}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            className="text-white"
            variant="caption"
            component="div"
            color="white"
          >
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
};

export default CircularProgressWithLabel;