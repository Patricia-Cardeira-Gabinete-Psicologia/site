import Typography from "@mui/material/Typography";

interface SectionHeadingProps {
  id: string;
  children: React.ReactNode;
}

export default function SectionHeading({ id, children }: SectionHeadingProps) {
  return (
    <Typography id={id} component="h2" className="section-heading">
      {children}
    </Typography>
  );
}
