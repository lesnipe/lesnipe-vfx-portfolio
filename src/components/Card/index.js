import React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { BsFillPlayCircleFill } from "react-icons/bs";

const CustomCard = ({ data, portfolioModalToggleIsOpen, setVideoForModal }) => {
  const cardClickHandler = () => {
    setVideoForModal(data);
    portfolioModalToggleIsOpen();
  };

  return (
    <Card
      sx={{
        backgroundColor: "#f9f9f9",
        "&:hover": {
          color: "#ff7000",
          position: "relative",
          transform: "scale(1.02)",
          transition: "ease-out 1s",
        },
      }}
    >
      <CardActionArea onClick={cardClickHandler}>
        <CardMedia
          component="img"
          height="100%"
          image={data.thumbnail}
          alt={data.title}
        />
        <CardContent>
          <h1 style={{ textAlign: "center" }}>
            <BsFillPlayCircleFill style={{ color: "#ff7000" }} /> {data.title}
          </h1>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;
