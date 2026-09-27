import DirectionsIcon from "@mui/icons-material/Directions";
import { Button } from "@mui/material";

const officeCoordinates = "Praceta Quinta das Parreiras 16, 2840-416 Arrentela, Portugal";
const destination = encodeURIComponent(officeCoordinates);
const mapUrl = `https://www.google.com/maps?q=${destination}&z=12&hl=pt-PT&output=embed`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

export default function GoogleMap() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        gap: "8px",
      }}
    >
      <iframe
        title="Localização do consultório no Google Maps"
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0, flex: 1, minHeight: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <Button
        component="a"
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<DirectionsIcon />}
        sx={{ alignSelf: "flex-end" }}
        aria-label="Obter direções no Google Maps (abre num novo separador)"
      >
        Obter direções no Google Maps
      </Button>
    </div>
  );
}
