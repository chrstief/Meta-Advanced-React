import { Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
//import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg='white' borderRadius="md" align="left" >
      <Image borderRadius="md" src={imageSrc}/>
      <Heading padding={2} paddingLeft={3} size="md" fontWeight="bold" color="black">{title}</Heading>
      <Text padding={2} paddingLeft={3} color="black">{description}</Text>
      <HStack>
        <Text fontWeight="bold" padding={2} paddingLeft={3} color="black">See more</Text>
        <FontAwesomeIcon color="black" icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );

};

export default Card;
