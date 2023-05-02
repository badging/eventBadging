import React from "react";
import {
  Text,
  Checkbox,
  HStack,
  FormLabel,
  Textarea,
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EventDemographics = (props) => {
  // console.log(props.diversity_and_inclusion);
  const {
    speaker_diversity_and_inclusion,
    process_for_measuring_even_demographics,
    example_of_an_optOut_option,
    example_of_a_demographics_text,
  } = props.diversity_and_inclusion;

  return (
    <>
      <Text fontWeight={600} fontSize={"34px"} lineHeight="43.52px" mt={"48px"}>
        Event Demographics
      </Text>
      <FormControl
        isInvalid={
          props.error?.speaker_diversity_and_inclusion &&
          props.touched?.diversity_and_inclusion.speaker_diversity_and_inclusion
        }
      >
        <Checkbox
          value={speaker_diversity_and_inclusion}
          name="speaker_diversity_and_inclusion"
          onChange={props.handleChange}
          fontWeight={600}
          fontSize={"20px"}
          lineHeight="34px"
          mt={"24px"}
        >
          This event commits to speaker diversity and inclusion
        </Checkbox>
        <FormErrorMessage>
          {props.error?.speaker_diversity_and_inclusion}
        </FormErrorMessage>
      </FormControl>

      <Link>
        <Text
          as={"p"}
          color={"#199AD6"}
          fontWeight={400}
          fontSize={"16px"}
          lineHeight="32px"
          mt={"24px"}
        >
          References
        </Text>
      </Link>

      <FormLabel
        fontWeight={500}
        fontSize={"20px"}
        lineHeight="40px"
        mt={"24px"}
      >
        Detail the process for measuring even Demographics
      </FormLabel>
      <Textarea
        value={process_for_measuring_even_demographics}
        onChange={props.handleChange}
        size="lg"
        h={"189px"}
        background={"#ffffff"}
        border={"1px"}
        borderColor={"#cccccc"}
        borderRadius={"4px"}
      />
      <FormLabel
        fontWeight={500}
        fontSize={"20px"}
        lineHeight="26px"
        mt={"24px"}
      >
        Provide an example of an opt-out option on the Event registration page
        if available.
      </FormLabel>
      <Text
        as={"p"}
        fontWeight={400}
        fontSize={"16px"}
        lineHeight="32px"
        mt={"4px"}
      >
        (For example, the option of “Prefer not to answer”)
      </Text>
      <Textarea
        value={example_of_an_optOut_option}
        onChange={props.handleChange}
        size="lg"
        h={"189px"}
        background={"#ffffff"}
        border={"1px"}
        borderColor={"#cccccc"}
        borderRadius={"4px"}
      />
      <FormLabel
        fontWeight={500}
        fontSize={"20px"}
        lineHeight="26px"
        mt={"24px"}
      >
        Provide an example of a demographics text input box on the Event
        registration page if available.
      </FormLabel>
      <Text
        as={"p"}
        fontWeight={400}
        fontSize={"16px"}
        lineHeight="32px"
        mt={"4px"}
      >
        (For example, an alternative identity input for gender)
      </Text>
      <Textarea
        value={example_of_a_demographics_text}
        onChange={props.handleChange}
        size="lg"
        h={"189px"}
        background={"#ffffff"}
        border={"1px"}
        borderColor={"#cccccc"}
        borderRadius={"4px"}
      />
      <Text fontWeight={400} fontSize={"20px"} lineHeight="25px" mt={"24px"}>
        CRITERIA
      </Text>
      <HStack fontSize={"20px"} lineHeight="25px" mt={"4px"}>
        <Text fontWeight={600}>Measuring Demographics</Text>
        <Text as={"p"} fontWeight={400}>
          - The Event has a process for measuring speaker demographics
        </Text>
      </HStack>
      <HStack fontSize={"20px"} lineHeight="25px" mt={"4px"}>
        <Text fontWeight={600}>Opt-Out </Text>
        <Text as={"p"} fontWeight={400}>
          - The Event provides ann opportunity to opt-out ofproviding
          demogtaphic data
        </Text>
      </HStack>
      <HStack fontSize={"20px"} lineHeight="25px" mt={"4px"}>
        <Text fontWeight={600}>Text input</Text>
        <Text as={"p"} fontWeight={400}>
          - The Event provides a text box to input certain data such as Gender,
          Race, or Ethnicity
        </Text>
      </HStack>
      <ButtonGroup gap="4" mt={"96px"}>
        <Button
          leftIcon={<AiOutlineArrowLeft />}
          background={"#FFFFFF"}
          border={"1px"}
          borderColor={"#070010"}
          borderRadius={"4px"}
        >
          Previous
        </Button>
        <Button
          rightIcon={<AiOutlineArrowRight />}
          background={"#070010"}
          color={"#FFFFFF"}
          borderRadius={"4px"}
          p={4}
        >
          Next
        </Button>
      </ButtonGroup>
    </>
  );
};

EventDemographics.propTypes = {
  speaker_diversity_and_inclusion: PropTypes.bool.isRequired,
  process_for_measuring_even_demographics: PropTypes.string,
  example_of_an_optOut_option: PropTypes.string,
  example_of_a_demographics_text: PropTypes.string,
  diversity_and_inclusion: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  error: PropTypes.object,
  touched: PropTypes.object,
};

export default EventDemographics;
