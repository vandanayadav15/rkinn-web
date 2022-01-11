import { makeStyles } from "@mui/styles";
import React from "react";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";

export const BannerIntro = (props: any) => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          marginTop: "120px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "300px",
            margin: "0 auto",
          }}
        >
          <Image
            src={props.data.image}
            alt=""
            height="25px"
            width="100%"
            layout="responsive"
          />
        </Box>
      </Box>
    </div>
  );
};
export default BannerIntro;
