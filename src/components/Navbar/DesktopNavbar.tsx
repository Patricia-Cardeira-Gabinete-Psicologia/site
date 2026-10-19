import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { NavbarProps } from ".";

export default function DesktopNavbar({
  menuOptions,
  selectedSectionId,
  onOptionClick,
}: NavbarProps) {
  return (
    <AppBar
      component="nav"
      aria-label="Navegação principal"
      elevation={0}
      sx={{
        bgcolor: "rgba(244, 245, 241, 0.97)",
        color: "text.primary",
        borderBottom: "1px solid #d6e0dc",
        backdropFilter: "blur(12px)",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          maxWidth: 1280,
          minHeight: "76px !important",
          px: { md: 3, lg: 5 },
          mx: "auto",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Link
          aria-label="Patrícia Cardeira — início"
          href="/#home"
          onClick={() => onOptionClick("")}
          style={{ textDecoration: "none", color: "inherit", flexShrink: 0, display: "flex", minHeight: 48, alignItems: "center" }}
        >
          <Stack direction="row" alignItems="center" spacing={1.25}>
            <Image
              src="/static/logo-monogram.png"
              alt=""
              aria-hidden="true"
              width={48}
              height={48}
              priority
              style={{ display: "block", flexShrink: 0, objectFit: "contain" }}
            />
            <Stack spacing={0}>
              <Typography sx={{ fontWeight: 600, fontSize: 16, lineHeight: 1.25 }}>
                Patrícia Cardeira
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: 12, lineHeight: 1.3 }}>
                Psicóloga
              </Typography>
            </Stack>
          </Stack>
        </Link>

        <Box sx={{ display: "flex", alignItems: "center", gap: { md: 0, lg: 0.25 } }}>
          {menuOptions.map((item) => (
            <Button
              key={item.routePath}
              component={Link}
              href={`/#${item.routePath}`}
              aria-label={item.label}
              aria-current={selectedSectionId === item.routePath ? "location" : undefined}
              onClick={() => onOptionClick(item.routePath)}
              sx={{
                position: "relative",
                minWidth: 0,
                px: { md: 0.75, lg: 1 },
                py: 1.5,
                color: selectedSectionId === item.routePath ? "primary.main" : "text.secondary",
                fontSize: { md: 12, lg: 13 },
                fontWeight: selectedSectionId === item.routePath ? 600 : 500,
                textTransform: "none",
                whiteSpace: "nowrap",
                borderRadius: 0,
                "&::after": {
                  content: '""',
                  position: "absolute",
                  height: 2,
                  left: 8,
                  right: 8,
                  bottom: 8,
                  borderRadius: 2,
                  bgcolor: "primary.main",
                  transform: selectedSectionId === item.routePath ? "scaleX(1)" : "scaleX(0)",
                  transition: "transform 180ms ease",
                },
                "&:hover": { bgcolor: "transparent", color: "primary.main" },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
