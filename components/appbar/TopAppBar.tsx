import * as React from "react";
import packageJSON from "../../package.json";
import {
  Search,
  Add,
  AccountCircle,
  Menu as MenuIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  MenuItem,
  Avatar,
} from "@mui/material";
import { noop } from "@components/utils/dummy";
import { BLOCK_CLASS } from "@components/recorder/config";

type TopAppBarProps = {};

const PRIMARY_COLOR = "#800020";
// Make palette from https://color.adobe.com/create/color-wheel - Triad
const Colors = {
  A: PRIMARY_COLOR,
  B: "#E0D416",
  C: "#E00038",
  D: "#16ADE0",
  E: "#077094",
} as const;

const TopAppBar: React.FunctionComponent<TopAppBarProps> = ({}) => {
  return (
    <AppBar
      position="static"
      style={{ position: "fixed", zIndex: 2, background: PRIMARY_COLOR }}
      className={BLOCK_CLASS}
    >
      <Toolbar className={BLOCK_CLASS}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          {packageJSON.name}
        </Typography>
        <Search>
          {/* <SearchIconWrapper> */}
          <SearchIcon />
          {/* </SearchIconWrapper> */}
          {/* <StyledInputBase
            placeholder="Filter...…"
            inputProps={{ "aria-label": "filter" }}
            onChange={onFilter}
          /> */}
        </Search>
        <Box sx={{ flexGrow: 1 }}>
          <MenuItem>
            <IconButton size="large" color="inherit" onClick={noop}>
              <Add />
            </IconButton>
          </MenuItem>
        </Box>
        <Box sx={{ display: "flex" }}>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="menuId"
            aria-haspopup="true"
            onClick={noop}
            color="inherit"
          >
            <AccountCircle />
            {/* {isAuthenticated ? (
              <Avatar variant="circular" src={user.picture} />
            ) : (
              <AccountCircle />
            )} */}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

TopAppBar.displayName = "TopAppBar";

export { TopAppBar };
