import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const QRCodeCard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        minHeight: '100vh',
        bgcolor: 'hsl(212, 45%, 89%)',
      }}
    >
      <Card
        sx={{
          width: 320,
          borderRadius: '1.25em',
          // boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
          margin: 'auto',
          height: 499,
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 3,
            }}
          >
            <Image
              src={'/assets/image-qr-code.png'}
              alt="QR Code"
              style={{
                borderRadius: '0.75em',
                // width: '288px',
                // height: '288px',
              }}
              width={288}
              height={288}
            />
          </Box>
          <Typography
            variant="h6"
            component={'h1'}
            sx={{
              fontFamily:'Outfit, sans-serif',
              fontSize: '22px',
              fontWeight: 700,
              color: 'hsl(218, 44%, 22%)',
              textAlign: 'center',
              marginBottom: '16px',
              lineHeight: '28px',
              // mb: 1,
            }}
          >
            Improve your front-end skills by building projects
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily:'Outfit, sans-serif',
              fontSize:'15px',
              fontWeight: 400,
              color: 'hsl(216, 15%, 48%)',
              textAlign: 'center',
              // marginBottom: '26px',
              lineHeight: '18px',
              marginLeft: '16px',
              marginRight: '16px',
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
