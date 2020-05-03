import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Copyright from '../src/Copyright';
import Grid from '../src/Grid.js';

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Grid />
        <Copyright />
      </Box>
    </Container>
  );
}
