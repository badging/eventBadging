import React from "react";
import { Header, Footer } from "../components";
import heroBackground from "../assets/images/others/hero_two.png";
import badgingLogo from "../assets/images/logos/DEI-mini-logo.png";
import EventDemographics from "../components/EventDemographics";
import {
  Box,
  HStack,
  Text,
  Img,
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  event_name: Yup.string().required("Event name is required"),
  event_website: Yup.string()
    .required("Event website is required")
    .url("Event website must be a valid url")
    .nullable(),
  event_organizer: Yup.string().required("Required"),
  diversity_and_inclusion: Yup.object().shape({
    speaker_diversity_and_inclusion: Yup.boolean()
      .equals([true])
      .required("Required"),
    process_for_measuring_even_demographics: Yup.string(),
    example_of_an_optOut_option: Yup.string(),
    example_of_a_demographics_text: Yup.string(),
  }),
  family_friendliness: Yup.object().shape({
    event_family_friendliness: Yup.boolean()
      .equals([true])
      .required("Please tick the family friendliness checkbox"),
    provide_childcare_facilities: Yup.string().required("Required"),
    ways_provided_for_family_friendly_environment: Yup.string(),
    relevant_links_related_to_family_friendliness: Yup.string(),
  }),
});

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
      <Box
        backgroundColor={"#F5F5F5"}
        height={"2093px"}
        w={["md", "6xl"]}
        p={0}
        mt={[20, "10vh"]}
        mb={"5rem"}
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
              click &quot;submit&quot;, you must use your GitHub account to
              finalize the issue on their Website by clicking&quot;Create New
              Issue&quot;.
            </Text>
          </VStack>
          <Formik
            initialValues={{
              event_name: "",
              event_website: "",
              event_organizer: "",
              diversity_and_inclusion: {
                speaker_diversity_and_inclusion: false,
                process_for_measuring_even_demographics: "",
                example_of_an_optOut_option: "",
                example_of_a_demographics_text: "",
              },
              family_friendliness: {
                event_family_friendliness: false,
                provide_childcare_facilities: "",
                ways_provided_for_family_friendly_environment: "",
                relevant_links_related_to_family_friendliness: "",
              },
            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              alert(JSON.stringify(values, null, 2));
              actions.resetForm();
            }}
          >
            {({ errors, touched, values, handleSubmit, handleChange }) => (
              <form onSubmit={handleSubmit}>
                <FormControl isInvalid={errors.event_name}>
                  <FormLabel
                    fontWeight={500}
                    fontSize={"20px"}
                    lineHeight="40px"
                    letterSpacing={"2%"}
                  >
                    Event Name
                  </FormLabel>
                  <Input
                    type="text"
                    value={values.event_name}
                    name="event_name"
                    onChange={handleChange}
                    size="lg"
                  />
                  <FormErrorMessage>{errors.event_name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.event_website}>
                  <FormLabel
                    fontWeight={500}
                    fontSize={"20px"}
                    lineHeight="40px"
                    letterSpacing={"2%"}
                    mt={"24px"}
                  >
                    Link to the Event Website
                  </FormLabel>
                  <Input
                    type="text"
                    value={values.event_website}
                    name="event_website"
                    onChange={handleChange}
                    size="lg"
                  />
                  <FormErrorMessage>{errors.event_website}</FormErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={errors.event_organizer && touched.event_organizer}
                >
                  <FormLabel
                    fontWeight={500}
                    fontSize={"20px"}
                    lineHeight="40px"
                    letterSpacing={"2%"}
                    mt={"24px"}
                  >
                    Are you an organizer of this event?
                  </FormLabel>
                  <Input
                    type="text"
                    value={values.event_organizer}
                    name="event_organizer"
                    onChange={handleChange}
                    size="lg"
                  />
                  <FormErrorMessage>{errors.event_organizer}</FormErrorMessage>
                </FormControl>

                <EventDemographics
                  diversity_and_inclusion={values.diversity_and_inclusion}
                  handleChange={handleChange}
                  error={errors}
                  touched={touched}
                />
              </form>
            )}
          </Formik>
        </VStack>
      </Box>
      <Footer />
    </>
  );
};

export default ApplyForBadging;
