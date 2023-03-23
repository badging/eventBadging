import React, { useState } from "react";
import { Header, Footer } from "../layouts";
import heroBackground from "../assets/images/hero-bg.png";
import badgingLogo from "../assets/images/about/icons/dei-logo.png";
import {
  Box,
  HStack,
  Text,
  Img,
  Checkbox,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button
} from "@chakra-ui/react";
// import "../assets/styles/global.css";
import { Link } from "react-router-dom";

const ApplyForBadging = () => {
  const initialValues = {
    event_name: "",
    event_website: "",
    event_organizer: "",
    speaker_diversity_and_inclusion: "",
    process_for_measuring_even_demographics: ""
  };
  const [inputValues, setInputValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputValues({
      ...inputValues,
      [name]: value
    });
  };
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
      <Box
        backgroundColor={"#F5F5F5"}
        height={"2093px"}
        w={["md", "6xl"]}
        p={0}
        mt={[20, "10vh"]}
        mx={"auto"}
        borderRadius={"20px"}
      >
        <VStack spacing={10} align={"flex-start"} w={"full"} p={10}>
          <VStack spacing={6} alignItems={"flex-start"}>
            <HStack
              fontWeight={700}
              fontSize={"20px"}
              lineHeight="200%"
              letterSpacing={"2%"}
              spacing="30px"
            >
              <Text
                color={"#070010"}
                borderBottom={"0.771199px"}
                borderStyle="solid"
                borderBottomColor={"#D61B5E"}
              >
                In-Person Event
              </Text>
              <Text color={"#B0ADB3"}>Virtual Event</Text>
            </HStack>
            <Text
              as={"p"}
              fontWeight={400}
              fontSize={"16px"}
              lineHeight="32px"
              letterSpacing={"2%"}
              color="#000"
            >
              Make sure to fill out all the fields. Please, note that once you
              click "submit", you must use your GitHub account to finalize the
              issue on their Website by clicking&quot;Create New Issue&quot;.
            </Text>
          </VStack>
         
            <FormControl>
              <FormLabel>Event Name</FormLabel>
              <Input
                type="text"
                value={inputValues.event_name}
                name="event_name"
                onChange={handleInputChange}
                size='lg'

              />
              <FormLabel>Link to the Event Website</FormLabel>
              <Input
                type="text"
                value={inputValues.event_website}
                name="event_website"
                onChange={handleInputChange}
                size='lg'
              />
              <FormLabel>Are you an organizer of this event?</FormLabel>
              <Input
                type="text"
                value={inputValues.event_organizer}
                name="event_organizer"
                onChange={handleInputChange}
                size='lg'
              />
              <Text>Event Demographics</Text>
              <Checkbox
                value={inputValues.speaker_diversity_and_inclusion}
                name="speaker_diversity_and_inclusion"
                onChange={handleInputChange}
              >
                This event commits to speaker diversity and inclusion
              </Checkbox>
              <FormLabel>Detail the process for measuring even Demographics</FormLabel>
              <Textarea 
                value={inputValues.process_for_measuring_even_demographics}
                onChange={handleInputChange}
                size='lg' />
                <FormLabel>Provide an example of an opt-out option on the Event registration page if available.</FormLabel>
              <Textarea 
                value={inputValues.process_for_measuring_even_demographics}
                onChange={handleInputChange}
                size='lg' />
                <FormLabel>Provide an example of a demographics text input box on the Event registration page if available.
</FormLabel>
              <Textarea 
                value={inputValues.process_for_measuring_even_demographics}
                onChange={handleInputChange}
                size='lg' />

            </FormControl>
          
        </VStack>
      </Box>
      <Footer />
    </>
  );
};

export default ApplyForBadging;
