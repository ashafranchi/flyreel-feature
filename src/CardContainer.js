import React, { useState, useEffect, useRef } from 'react';
import { Badge, Box, Grid, Heading } from "@chakra-ui/react";
import moment from 'moment'
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})

const CardContainer = ({ data }) => {

  return (
    <Grid templateColumns={{base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)"}} gap={6}>
      {data && data.map((e) => (
        <Box key={e.properties.ids} maxW="md" borderWidth="2px" borderRadius="lg" overflow="hidden">
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="blue">
                {moment(e.properties.time).format('LL')}
              </Badge>
            </Box>
          <Box mt="1" paddingTop="0.5em" fontSize="xl" fontWeight="semibold" as="h4" lineHeight="tight">
            {e.properties.title}
          </Box>
          <Box paddingTop="0.5em" fontSize="lg" d="flex" justifyContent="center" alignItems="flex-end">
            {e.properties.felt}
            <Box marginBottom="3px" marginLeft={{base: "3px", sm: "6px"}} as="span" fontSize={{base: "12px", sm: "md"}}>
              affected
            </Box>
          </Box>
        </Box>
      </Box>
      ))}
    </Grid>
  )
}

export default CardContainer;