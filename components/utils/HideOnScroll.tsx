import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

const HideOnScroll = (Props: any) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {Props.children}
    </Slide>
  );
};

export default HideOnScroll;
