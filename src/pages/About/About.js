import { BadgeLevels, Footer, Header, SubmitEvent } from "../../components";
import { Box, Flex, HStack, Text, Img } from "@chakra-ui/react";
import {
  alignIcon,
  connectIcon,
  establishIcon,
  openIcon,
  DEIMiniLogo,
  heroTwo,
} from "../../assets/images";

const About = () => {
  return (
    <>
      <Header pathName="About us" />
      <Box
        width={"100%"}
        backgroundImage={heroTwo}
        backgroundRepeat="no-repeat"
        backgroundSize={"cover"}
      >
        <Box
          px={{ base: "15px", md: "100px" }}
          py={{ base: "52px", md: "153.5px" }}
        >
          <HStack
            fontSize={{ base: "32px", md: "60px" }}
            fontWeight={600}
            color={"#fff"}
            gap={{ md: "27px" }}
          >
            
            <Img src={DEIMiniLogo} width={{ base: "120px", md: "166.91px" }} />
            <Text>Badging</Text>
          </HStack>
          <Text
            as={"p"}
            fontWeight={{ base: 400, md: 600 }}
            fontSize={{ base: "14px", lg: "20px" }}
            color="#fff"
            maxWidth={"1070px"}
            marginTop={{ base: "8px", md: "10px" }}
          >
            This program is a proud initiative of the CHAOSS project 
            and is closely associated with the CHAOSS DEI working group.{" "}
          </Text>
        </Box>
      </Box>
      <Box
        as={"section"}
        backgroundColor={"#fff"}
        px={{ base: "15px", md: "100px" }}
        mx={{ base: "16px", md: "0" }}
        mt={{ base: "23px", md: "0" }}
        mb={{ base: "12px", md: "0" }}
        py={{ base: "27px", md: "80px" }}
        shadow={{ base: "md", md: "none" }}
        rounded={{ base: "2xl", md: "none" }}
      >
        <Box as={"article"}>
          <Text
            as={"h3"}
            fontSize={{ base: "24px", md: "48px" }}
            fontWeight={600}
            color={"#000"}
          >
            Objective
          </Text>
          <Text
            as={"p"}
            maxWidth={"1074px"}
            fontSize={{ base: "14px", md: "16px" }}
            fontWeight={400}
            color={"#000"}
          >
            The DEI Event Badging initiative is an award system whereby open-source events 
            earn badges that acknowledge their ongoing commitment to improving and supporting diversity, 
            equity, and inclusion in open-source environments.

          </Text>
        </Box>
        <Box as={"article"} my={{ base: "32px", md: "48px" }}>
          <Text
            as={"h4"}
            fontSize={{ base: "22px", md: "34px" }}
            fontWeight={600}
            color={"#000"}
          >
            Problem Statement
          </Text>
          <Text
            as={"p"}
            maxWidth={"1074px"}
            fontSize={{ base: "14px", md: "16px" }}
            fontWeight={400}
            color={"#000"}
          >
           Diversity in open source is opaque to contributors (participants, newcomers, and stakeholders) 
           due to the fact that contributors are distributed, and in many cases are an agglomeration of individuals 
           in different locations. The existing longstanding practices hinder inclusivity in open-source initiatives
            with accompanying side effects that serve to perpetuate the current state of limited diversity.
          </Text>
        </Box>
        <Box as={"article"}>
          <Text
            as={"h4"}
            fontSize={{ base: "22px", md: "34px" }}
            fontWeight={600}
            color={"#000"}
          >
            Opportunity
          </Text>
          <Text
            as={"p"}
            maxWidth={"1074px"}
            fontSize={{ base: "14px", md: "16px" }}
            fontWeight={400}
            color={"#000"}
          >
            There is still much progress needed in the areas of diversity, equity, and inclusion in open source.
             Through this event badge application process, event organizers have an opportunity to not only look 
             inward and reflect on their current practices, they are able to identify potential areas for improvement.
          </Text>
        </Box>
      </Box>
      <Box
        as={"section"}
        bgColor={{ md: "#FAF9FC" }}
        px={{ base: "15px", md: "100px" }}
        py={{ base: "27px", md: "80px" }}
        mx={{ base: "16px", md: "0" }}
        shadow={{ base: "md", md: "none" }}
        rounded={{ base: "2xl", md: "none" }}
      >
        {/* <Box as={"article"}>
          <Text
            as={"h4"}
            fontSize={{ base: "24px", md: "48px" }}
            fontWeight={500}
            color={"#070010"}
          >
            Building the Internet as a social good.
          </Text>
          <Text
            as={"p"}
            maxWidth={"1074px"}
            fontSize={{ base: "14px", md: "16px" }}
            fontWeight={400}
            color={"#070010"}
            mt={{ base: "8px", md: "12px" }}
            mb={"48px"}
          >
            Creating open source communities and events that are welcoming and inclusive better 
            enables a diverse set of contributors and contributions. This strengthens the community, provides individual career and growth 
            opportunities on a global scale, and reinforces opportunities to use open source to solve a wider array of social issues.          
  
          </Text>
        </Box> */}
        <Flex
          gap={"24px"}
          justify={"space-between"}
          overflowX={"scroll"}
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Box
            width={"286px"}
            height={"336px"}
            bgColor={"#fff"}
            pt={"32px"}
            textAlign="center"
            borderRadius={"4px"}
          >
            <Img src={establishIcon} margin={"auto"} />
            <Text py={"12px"} color={"#070010"} fontSize={"20px"}>
              Establish
            </Text>
            <Text
              fontSize={"16px"}
              width={"246px"}
              height={"138px"}
              margin={"auto"}
              lineHeight={"200%"}
            >
              an environment where projects and events can engage in
              the badging program
            </Text>
          </Box>
          <Box
            width={"286px"}
            height={"336px"}
            bgColor={"#fff"}
            pt={"32px"}
            textAlign="center"
            borderRadius={"4px"}
          >
            <Img src={alignIcon} margin={"auto"} />
            <Text py={"12px"} color={"#070010"} fontSize={"20px"}>
              Align
            </Text>
            <Text
              fontSize={"16px"}
              width={"246px"}
              height={"138px"}
              margin={"auto"}
              lineHeight={"200%"}
            >
              best practices, guidelines, and recommendations from
              Diversity, Equity & Inclusion efforts on the CHAOSS project
            </Text>
          </Box>
          <Box
            width={"286px"}
            height={"336px"}
            bgColor={"#fff"}
            pt={"32px"}
            textAlign="center"
            borderRadius={"4px"}
          >
            <Img src={connectIcon} margin={"auto"} />
            <Text py={"12px"} color={"#070010"} fontSize={"20px"}>
              Connect
            </Text>
            <Text
              fontSize={"16px"}
              width={"246px"}
              height={"138px"}
              margin={"auto"}
              lineHeight={"200%"}
            >
              with existing badging standards of IMS Global including
            </Text>
          </Box>
          <Box
            width={"286px"}
            height={"336px"}
            bgColor={"#fff"}
            pt={"32px"}
            textAlign="center"
            borderRadius={"4px"}
          >
            <Img src={openIcon} margin={"auto"} />
            <Text py={"12px"} color={"#070010"} fontSize={"20px"}>
              Open
            </Text>
            <Text
              fontSize={"16px"}
              width={"246px"}
              height={"138px"}
              margin={"auto"}
              lineHeight={"200%"}
            >
              Building an open, peer-review system for the D&I Badging Program
            </Text>
          </Box>
        </Flex>
      </Box>
      <BadgeLevels />
      <SubmitEvent />

      <Footer />
    </>
  );
};

export default About;
