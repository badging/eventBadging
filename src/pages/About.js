import { BadgeLevels } from '../components';
import Frame68 from '../assets/logos/Frame68.png';
import ChaossWhite from '../assets/logos/chaoss-white.png';
import LinuxFoundation from '../assets/logos/linuxfoundation-logo.png';
import aboutHeroBackground from '../assets/images/about/bg/about-hero-bg.png';
import OsSustainAfrica from '../assets/logos/os+sustainAfrica.png';
import SheCodeAfrica from '../assets/logos/shecodeafrica-logo.png';
import badgingLogo from '../assets/images/about/icons/dei-logo.png';
import establishIcon from '../assets/images/about/icons/establish-icon.png';
import connectIcon from '../assets/images/about/icons/connect-icon.png';
import openIcon from '../assets/images/about/icons/open-icon.png';
import alignIcon from '../assets/images/about/icons/align-icon.png';
import { Footer, Header } from '../layouts';
import { Box, Grid, Flex, HStack, Text, Img } from '@chakra-ui/react';

const About = () => {
	return (
		<>
			<Header />
			<Box
				height={'478px'}
				width={'100%'}
				backgroundImage={aboutHeroBackground}
				backgroundRepeat='no-repeat'
				backgroundSize={'cover'}
			>
				<Box pl={'100px'} pt={'153.5px'}>
					<HStack
						fontSize={'60px'}
						fontWeight={600}
						color={'#fff'}
						gap={'27px'}
					>
						<Text>About</Text>
						<Img src={badgingLogo} width={'166.91px'} height={'65.01px'} />
						<Text>Badge</Text>
					</HStack>
					<Text
						as={'p'}
						fontWeight={600}
						fontSize={'20px'}
						color='#fff'
						width={'1070px'}
					>
						The program is affiliated with the CHAOSS project and a proud
						initiative of CHAOSS. The work of the Badging Program is closely
						associated with the CHAOSS D&I working group.{' '}
					</Text>
				</Box>
			</Box>
			<Box as={'section'} backgroundColor={'#fff'} pl={'100px'} py={'80px'}>
				<Box as={'article'}>
					<Text as={'h3'} fontSize={'48px'} fontWeight={500} color={'#000'}>
						What is DEI Badging?
					</Text>
					<Text
						as={'p'}
						width={'1074px'}
						fontSize={'16px'}
						fontWeight={400}
						color={'#000'}
					>
						The goal of the Diversity & Inclusion Badging Program is to
						encourage projects and events to obtain D&I badges for reasons of
						leadership, self-reflection, and self-improvement on issues critical
						to building the Internet as a social good.
					</Text>
				</Box>
				<Box as={'article'} my={'48px'}>
					<Text as={'h4'} fontSize={'34px'} fontWeight={600} color={'#000'}>
						Problem Statement
					</Text>
					<Text
						as={'p'}
						width={'1074px'}
						fontSize={'16px'}
						fontWeight={400}
						color={'#000'}
					>
						Diversity in open source is opaque to participants, newcomers, and
						stakeholders because contributors are distributed, and in many cases
						are an agglomeration of individuals in different locations.
						Inclusivity for open source projects is impeded by long standing
						practices that have side effects that act to reproduce the current
						state of limited diversity.
					</Text>
				</Box>
				<Box as={'article'}>
					<Text as={'h4'} fontSize={'34px'} fontWeight={600} color={'#000'}>
						Opportunity
					</Text>
					<Text
						as={'p'}
						width={'1074px'}
						fontSize={'16px'}
						fontWeight={400}
						color={'#000'}
					>
						Diversity in open source is opaque to participants, newcomers, and
						stakeholders because contributors are distributed, and in many cases
						are an agglomeration of individuals in different locations.
						Inclusivity for open source projects is impeded by long standing
						practices that have side effects that act to reproduce the current
						state of limited diversity.
					</Text>
				</Box>
			</Box>
			<Box as={'section'} bgColor={'#FAF9FC'} pl={'100px'} py={'80px'}>
				<Box as={'article'}>
					<Text as={'h4'} fontSize={'48px'} fontWeight={500} color={'#070010'}>
						Building the internet as a social good.
					</Text>
					<Text
						as={'p'}
						width={'1074px'}
						fontSize={'16px'}
						fontWeight={400}
						color={'#070010'}
						mt={'12px'}
						mb={'48px'}
					>
						The goal of the Diversity & Inclusion Badging Program is to
						encourage projects and events to obtain D&I badges for reasons of
						leadership, self-reflection, and self-improvement on issues critical
						to building the Internet as a social good. Here are the primary
						deliverables of the Diversity & Inclusion Badging Program:
					</Text>
				</Box>
				<Flex gap={'24px'}>
					<Box
						width={'286px'}
						height={'336px'}
						bgColor={'#fff'}
						pt={'32px'}
						textAlign='center'
						borderRadius={'4px'}
					>
						<Img src={establishIcon} margin={'auto'} />
						<Text py={'12px'} color={'#070010'} fontSize={'20px'}>
							Establish
						</Text>
						<Text fontSize={'16px'} width={'246px'} height={'138px'} margin={'auto'} lineHeight={'200%'}>
							Establish an environment where projects and events can engage in
							the badging program
						</Text>
					</Box>
					<Box
						width={'286px'}
						height={'336px'}
						bgColor={'#fff'}
						pt={'32px'}
						textAlign='center'
						borderRadius={'4px'}
					>
						<Img src={alignIcon} margin={'auto'} />
						<Text py={'12px'} color={'#070010'} fontSize={'20px'}>
							Align
						</Text>
						<Text fontSize={'16px'} width={'246px'} height={'138px'} margin={'auto'} lineHeight={'200%'}>
							Aligning best practices, guidelines, and recommendations from
							Diversity & Inclusion efforts on the CHAOSS project
						</Text>
					</Box>
					<Box
						width={'286px'}
						height={'336px'}
						bgColor={'#fff'}
						pt={'32px'}
						textAlign='center'
						borderRadius={'4px'}
					>
						<Img src={connectIcon} margin={'auto'} />
						<Text py={'12px'} color={'#070010'} fontSize={'20px'}>
							Connect
						</Text>
						<Text fontSize={'16px'} width={'246px'} height={'138px'} margin={'auto'} lineHeight={'200%'}>
							Connecting with existing badging standards of IMS Global including
						</Text>
					</Box>
					<Box
						width={'286px'}
						height={'336px'}
						bgColor={'#fff'}
						pt={'32px'}
						textAlign='center'
						borderRadius={'4px'}
					>
						<Img src={openIcon} margin={'auto'} />
						<Text py={'12px'} color={'#070010'} fontSize={'20px'}>
							Open
						</Text>
						<Text fontSize={'16px'} width={'246px'} height={'138px'} margin={'auto'} lineHeight={'200%'}>
							Building an open, peer-review system for the D&I Badging Program
						</Text>
					</Box>
				</Flex>
			</Box>
			<BadgeLevels />
			<Footer/>
		</>
	);
};

export default About;
