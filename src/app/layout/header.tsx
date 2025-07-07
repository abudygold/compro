'use client'; // This directive must be at the very top

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import Link from 'next/link';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <>
          <Link href="/">
            <ListItem disablePadding>
              <ListItemButton>
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Product" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/terms-of-use">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Terms of Use" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href="/privacy-note">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Privacy Note" />
              </ListItemButton>
            </ListItem>
          </Link>
        </>
      </List>
    </Box>
  );

  const styleNavbar = {
    position: 'relative',
    minWidth: 150,
    color: '#73757A',
    cursor: 'pointer',
    '&.active': {
      padding: '8px 16px',
      backgroundColor: '#FFFFFF',
      color: '#2D3032',
      borderRadius: '87px',
      '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        left: '50%',
        bottom: 0,
        transform: 'translateX(-50%)',
        width: 20,
        height: 3,
        backgroundColor: '#48A6A7',
        borderRadius: 41,
      },
    },
  };

  return (
    <>
      <div className="flex items-center w-full md:lg:px-60">
        <IconButton
          size="medium"
          edge="end"
          color="inherit"
          aria-label="menu"
          className="block md:lg:hidden!"
          sx={{
            mr: 2,
            backgroundColor: 'ButtonHighlight',
            ':hover': { backgroundColor: 'ButtonHighlight' },
          }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        <div className="flex items-center justify-between min-h-16 bg-[#171717] rounded-full w-full p-3">
          <Image
            src="/images/company-logo.svg"
            alt="Company Logo"
            width={138}
            height={32}
          />

          <div className="hidden md:lg:flex">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Link href="/">
                <Typography className="active" sx={styleNavbar}>
                  Home
                </Typography>
              </Link>

              <Link href="/">
                <Typography sx={styleNavbar}>Product</Typography>
              </Link>

              <Link href="/terms-of-use">
                <Typography sx={styleNavbar}>Terms of Use</Typography>
              </Link>

              <Link href="/privacy-note">
                <Typography sx={styleNavbar}>Privacy Note</Typography>
              </Link>
            </Box>
          </div>
        </div>
      </div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};
