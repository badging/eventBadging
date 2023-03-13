import React from "react";
import { Header, Footer } from "../layouts";
import heroBackground from "../assets/images/hero-bg.png";
import badgingLogo from "../assets/images/about/icons/dei-logo.png";
import { Box, HStack, Text, Img, Container, VStack } from "@chakra-ui/react";
// import "../assets/styles/global.css";
import { Link } from "react-router-dom";

const ApplyForBadging = () => {
  return (
    <>
      <Header />
      <Box
        height={"478px"}
        width={"100%"}
        backgroundImage={heroBackground}
        backgroundRepeat="no-repeat"
        backgroundSize={"cover"}
      >
        <Box pl={"100px"} pt={"153.5px"}>
          <HStack
            fontSize={"60px"}
            fontWeight={500}
            color={"#fff"}
            gap={"27px"}
          >
            <Text>Apply for a</Text>
            <Img src={badgingLogo} width={"166.91px"} height={"65.01px"} />
            <Text>Badge</Text>
          </HStack>
          <Text
            as={"p"}
            fontWeight={600}
            fontSize={"20px"}
            color="#fff"
            width={"1070px"}
          >
            Before you start, ensure that you understand{" "}
            <Link to={"#"}> the submission requirements</Link>.{" "}
          </Text>
        </Box>
      </Box>
      <Container
        backgroundColor={"#F5F5F5"}
        height={"2093px"}
        maxW={"container.xl"}
        p={0}
        mt={[20, "10vh"]}
        borderRadius={"20px"}
      >
        <VStack spacing={4} align={"flex-start"} w={'full'} p={"27px"}>
          <HStack 
          fontWeight={700}
          fontSize={"20px"}
          lineHeight='200%'
          letterSpacing={'2%'}
          spacing='30px'>
            <Text color={"#070010"}
            borderBottom={'0.771199px'}
            borderStyle='solid'
            borderBottomColor={'#D61B5E'}>In-Person Event</Text>
            <Text color={"#B0ADB3"}
            >Virtual Event</Text>
          </HStack>
          <Text
            as={"p"}
            fontWeight={400}
          fontSize={"16px"}
          lineHeight='32px'
          letterSpacing={'2%'}
          color="#000"
          >
            Make sure to fill out all the fields. Please, note that once you click "submit", you must use your GitHub account to finalize the issue on their Website by clicking&quot;Create New Issue&quot;.
          </Text>
        </VStack>
      </Container>
      <Footer />
    </>
  );
};

export default ApplyForBadging;
