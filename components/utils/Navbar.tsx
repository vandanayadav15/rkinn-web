import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import MuiNextLink from "./MuiNextLink";

const Navbar = (Props: any) => {
  return (
    <Toolbar
      component="nav"
      sx={{
        display: { xs: `none`, md: `flex` },
      }}
    >
      <Stack direction="row" spacing={4}>
        {Props.navLinks.map((data: any, i: number) => (
          <MuiNextLink
            key={`${data.title}${i}`}
            href={data.path}
            variant="button"
            sx={{ opacity: 0.7, textDecoration: "none" }}
          >
            {data.title}
          </MuiNextLink>
        ))}
      </Stack>
    </Toolbar>
  );
};

export default Navbar;
