import {
  Box,
  Img,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  goldBadgeSVG,
  silverBadgeSVG,
  passingBadgeSVG,
  pendingBadgeSVG,
} from "../assets/images";

const BadgeLevels = () => {
  return (
    <Box
      as="section"
      py={{ base: "27px", md: "72px" }}
      px={{ base: "15px", md: "100px" }}
      mx={{ base: "16px", md: "0" }}
      shadow={{ base: "md", md: "none" }}
      rounded={{ base: "2xl", md: "none" }}
    >
      <Box as="article" maxWidth={"1074px"}>
        <Text
          as={"h1"}
          fontSize={{ base: "24px", md: "48px" }}
          fontWeight={500}
        >
          Motivation to apply
        </Text>
        <Box as="section">
          <Text as={"p"} fontSize={{ base: "14px", md: "16px" }}>
            The primary motivation to apply for a CHAOSS D&I Badge is the badge
            itself! The awarded event can show the open source community that
            they foster healthy D&I practices with a CHAOSS badge.
          </Text>
          <Img
            src={passingBadgeSVG}
            alt="Passing Badge"
            width={"203px"}
            height={"40px"}
            my={"16px"}
          />
          <Text as={"p"} fontSize={{ base: "14px", md: "16px" }}>
            Applying for a badge supports D&I efforts within an open source
            community by expressing that your event is willing to improve the
            ways the work. These efforts can have affects to D&I practices in
            your event and even outside of your project space.
          </Text>
        </Box>
      </Box>
      <Box as="article" maxW={"1053px"} mt={{ base: "24px", md: "42px" }}>
        <Text
          as={"h1"}
          fontWeight={{ base: 500, md: 600 }}
          fontSize={{ base: "24px", md: "34px" }}
        >
          Badge Levels
        </Text>
        <Text as={"p"} fontSize={{ base: "14px", md: "16px" }}>
          Badges are assigned according to how the Reviewers mark out the review
          checklist according to the the information initially filled in by the
          Applicant. The percentages are calculated excluding the initial
          checks, based of the average of checklists of at least two reviewers.
        </Text>
      </Box>
      <TableContainer mt={{ base: "24px", md: "73px" }}>
        <Table
          variant={"unstyled"}
          size={{ base: "md", md: "lg" }}
          maxW={"1130px"}
        >
          <Thead>
            <Tr>
              <Th fontWeight={700}>Level</Th>
              <Th fontWeight={700}>Badge</Th>
              <Th fontWeight={700}>Percentage of Requirements Met</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Pending</Td>
              <Td>
                <Img
                  src={pendingBadgeSVG}
                  width={"162px"}
                  height={"32px"}
                  alt="Pending Badge"
                />
              </Td>
              <Td>Less than 40%</Td>
            </Tr>

            <Tr>
              <Td>Passing</Td>
              <Td>
                <Img
                  src={passingBadgeSVG}
                  width={"158px"}
                  height={"32px"}
                  alt="Passing Badge"
                />
              </Td>
              <Td>Greater than or equal to 40% and less than 60%</Td>
            </Tr>

            <Tr>
              <Td>Silver</Td>
              <Td>
                <Img
                  src={silverBadgeSVG}
                  width={"142px"}
                  height={"32px"}
                  alt="Silver Badge"
                />
              </Td>
              <Td>Greater than 60% or less than 80%</Td>
            </Tr>

            <Tr>
              <Td>Gold</Td>
              <Td>
                <Img
                  src={goldBadgeSVG}
                  width={"133px"}
                  height={"32px"}
                  alt="Gold Badge"
                />
              </Td>
              <Td>Greater than 80%</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BadgeLevels;
