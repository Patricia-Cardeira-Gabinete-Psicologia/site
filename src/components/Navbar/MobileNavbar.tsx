import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useCallback, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import Image from "next/image";
import { NavbarProps } from ".";

export default function MobileNavbar({ menuOptions, selectedSectionId, onOptionClick }: NavbarProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = useCallback(() => {
    setIsDrawerOpen((open) => !open);
  }, []);

  const container = typeof window !== "undefined" ? () => window.document.body : undefined;

  const logo = (
    <Link
      aria-label="Patrícia Cardeira — início"
      href="/#home"
      onClick={() => onOptionClick("")}
      style={{ color: "inherit", textDecoration: "none", display: "flex", minHeight: 48, alignItems: "center" }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <Image
          src="/static/logo-monogram.png"
          alt=""
          aria-hidden="true"
          width={44}
          height={44}
          priority
          style={{ display: "block", flexShrink: 0, objectFit: "contain" }}
        />
        <Stack spacing={0}>
          <Typography sx={{ fontWeight: 600, fontSize: 16, lineHeight: 1.25 }}>
            Patrícia Cardeira
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: 11, lineHeight: 1.3 }}>
            Psicóloga
          </Typography>
        </Stack>
      </Stack>
    </Link>
  );

  return (
    <>
      <AppBar
        component="nav"
        aria-label="Navegação principal"
        elevation={0}
        sx={{ bgcolor: "rgba(244, 245, 241, 0.97)", color: "text.primary", borderBottom: "1px solid #d6e0dc", backdropFilter: "blur(12px)" }}
      >
        <Toolbar sx={{ minHeight: "68px !important", px: "20px !important", justifyContent: "space-between" }}>
          {logo}
          <IconButton
            aria-label={isDrawerOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isDrawerOpen}
            aria-controls="mobile-navigation"
            onClick={handleDrawerToggle}
            sx={{ width: 44, height: 44, color: "primary.main", border: "1px solid #d6e0dc", borderRadius: "4px" }}
          >
            {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        container={container}
        variant="temporary"
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "min(320px, calc(100vw - 40px))",
            bgcolor: "background.default",
          },
        }}
      >
        <Box id="mobile-navigation" sx={{ p: 2.5 }}>
          <Box sx={{ py: 1.5 }}>{logo}</Box>
          <Divider sx={{ my: 2, borderColor: "#d6e0dc" }} />
          <List disablePadding>
            {menuOptions.map((item) => (
              <ListItemButton
                key={item.routePath}
                component={Link}
                href={`/#${item.routePath}`}
                selected={selectedSectionId === item.routePath}
                onClick={() => {
                  onOptionClick(item.routePath);
                  setIsDrawerOpen(false);
                }}
                sx={{
                  minHeight: 48,
                  mb: 0.5,
                  px: 1.5,
                  borderRadius: "4px",
                  color: selectedSectionId === item.routePath ? "primary.main" : "text.primary",
                  "&.Mui-selected": { bgcolor: "primary.light" },
                  "&.Mui-selected:hover": { bgcolor: "primary.light" },
                  "&:hover": { bgcolor: "rgba(23, 107, 110, 0.06)" },
                }}
              >
                <Typography sx={{ fontWeight: selectedSectionId === item.routePath ? 600 : 500 }}>
                  {item.label}
                </Typography>
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
