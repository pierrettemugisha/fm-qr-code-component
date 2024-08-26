import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const QRCodeCard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        bgcolor: 'hsl(212, 45%, 89%)',
      }}
    >
      <Card
        sx={{
          maxWidth: 320,
          borderRadius: '16px',
          boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Image
              src={'/assets/image-qr-code.png'}
              alt="QR Code"
              style={{ borderRadius: '8px', width: '100%', height:'100%' }}
              width={160}
              height={160}
            />
          </Box>
          <Typography
            variant="h6"
            component={'h1'}
            sx={{
              fontFamily: 'Outfit',
              fontSize: '24px',
              fontWeight: 700,
              color: 'hsl(218, 44%, 22%)',
              textAlign: 'center',
              marginBottom: '30px',
              lineHeight: '28px',
              mb: 1,
            }}
          >
            Improve your front-end skills by building projects
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'Outfit',
              fontWeight: 400,
              color: 'hsl(216, 15%, 48%)',
              textAlign: 'center',
              marginBottom: '42px',
              lineHeight: '18px',
            }}
          >
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default QRCodeCard;
