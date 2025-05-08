// src/components/BreadcrumbComponent.tsx
import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface BreadcrumbItem {
  label: string;
  href?: string; // Optional, for links
}

interface BreadcrumbComponentProps {
  items: BreadcrumbItem[];
}

const BreadcrumbComponent: React.FC<BreadcrumbComponentProps> = ({ items }) => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon sx={{ color: '#FFFFFF' }} />}
      aria-label="breadcrumb"
      sx={{ color: '#FFFFFF' }}
    >
      {items.map((item, index) => (
        item.href ? (
          <Link
            key={index}
            underline="hover"
            color="inherit"
            href={item.href}
            sx={{ color: '#FFFFFF' }}
          >
            {item.label}
          </Link>
        ) : (
          <Typography key={index} color="inherit">
            {item.label}
          </Typography>
        )
      ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbComponent;