import React from "react";
import { Header, Footer } from "../layouts";
import heroBackground from "../assets/images/hero-bg.png";
import badgingLogo from "../assets/images/about/icons/dei-logo.png";
import { Box, HStack, Text, Img } from '@chakra-ui/react';
// import "../assets/styles/global.css";
import { Link } from "react-router-dom";

const ApplyForBadging = () => {
    return (
        <>
            <Header />
            <Box
				height={'478px'}
				width={'100%'}
				backgroundImage={heroBackground}
				backgroundRepeat='no-repeat'
				backgroundSize={'cover'}
			>
                <Box pl={'100px'} pt={'153.5px'} >
					<HStack
						fontSize={'60px'}
						fontWeight={500}
						color={'#fff'}
						gap={'27px'}
					>
						<Text>Apply for a</Text>
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
						Before you start, ensure that you understand <Link to={"#"}> the submission requirements</Link>.{' '}
					</Text>
				</Box>
            </Box>
            
            <Footer />
        </>
    )
};

export default ApplyForBadging;
