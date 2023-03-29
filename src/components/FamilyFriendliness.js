import React from "react";
import {
  Text,
  Checkbox,
  HStack,
  FormLabel,
  Textarea,
  Button
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FamilyFriendliness = () => {
  return (
    <>
      <Text fontWeight={600} fontSize={"34px"} lineHeight="43.52px" mt={"48px"}>
        Family Friendliness
      </Text>
      <Checkbox
        //   value={inputValues.speaker_diversity_and_inclusion}
        name="family_friendliness"
        //   onChange={handleInputChange}
        fontWeight={600}
        fontSize={"20px"}
        lineHeight="34px"
        mt={"24px"}
      >
        This event commits to Family Friendliness
      </Checkbox>
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
        Does the Event provide childcare facilities for its attendees and
        speakers?
      </FormLabel>
      <Textarea
        //   value={inputValues.process_for_measuring_even_demographics}
        //   onChange={handleInputChange}
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
        What are the other ways that a family-firiendly environment is being
        created in the Event?
      </FormLabel>
      <Textarea
        //   value={inputValues.process_for_measuring_even_demographics}
        //   onChange={handleInputChange}
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
        Provide relevant links realted to family friendliness at the Event.
      </FormLabel>
      <Textarea
        //   value={inputValues.process_for_measuring_even_demographics}
        //   onChange={handleInputChange}
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
        <Text fontWeight={600}>Availability</Text>
        <Text as={"p"} fontWeight={400}>
          - The Event provides one or more services/facilities for families
        </Text>
      </HStack>
      <HStack fontSize={"20px"} lineHeight="25px" mt={"4px"}>
        <Text fontWeight={600}>Findability </Text>
        <Text as={"p"} fontWeight={400}>
          - The information about the family friendly services provided at the
          Event is easy to find on the website.
        </Text>
      </HStack>
      <Text as={"p"}>
        Please, note that once you click &quot;submit&quot;, you must use your
        GitHub account to finalize the issue on their Website by clicking
        &quot;Create New Issue&quot;.
      </Text>

      <Button>Submit</Button>
    </>
  );
};

export default FamilyFriendliness;
