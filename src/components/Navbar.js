import React from 'react';
import logo from '../images/logo1.png';
import { Button, ButtonGroup } from '@chakra-ui/react';
import {Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,Box} from '@chakra-ui/react';




export default function Navbar() {
  return (
    <div className='Navbar-outer'>
        <div className='navbar-inner1'>
            <div className='logo'><img src={logo}/></div>
            <div className='navbar-btn'><Button colorScheme='black' variant='outline' size='md'
                height='40px'
                width='90px'
                border='2px'
                borderColor='white'
                backgroundColor='rgb(230, 211, 249)' color="purple"
                _hover={{
                    background: "rgb(230, 211, 249)",
                    color: "purple",
                  }}>Rent</Button>
            </div>
            <div className='navbar-btn'><Button colorScheme='black' variant='outline' size='md'
                height='40px'
                width='90px'
                border='2px'
                borderColor='white'
                backgroundColor='white' color="black"><p className="nav-accordion"
                _hover={{
                    background: "rgb(230, 211, 249)",
                    color: "purple",
                  }}>Buy</p></Button>
            </div>
            <div className='navbar-btn'><Button colorScheme='black' variant='outline' size='md'
                height='40px'
                width='90px'
                border='2px'
                borderColor='white'
                backgroundColor='white' color="black"><p className="nav-accordion"
                _hover={{
                    background: "rgb(230, 211, 249)",
                    color: "purple",
                  }}>Sell</p></Button>
            </div>
            <div className='manage-property'>
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <p className="nav-accordion">Manage Property</p>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            Property 1
                        </AccordionPanel>
                        <AccordionPanel>
                            Property 2
                        </AccordionPanel>
                        <AccordionPanel>
                            Property 3
                        </AccordionPanel>
                        <AccordionPanel>
                            Property 4
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>

            <div>
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <p className="nav-accordion">Resources</p>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel>
                            Resource 1
                        </AccordionPanel>
                        <AccordionPanel>
                            Resource 2
                        </AccordionPanel>
                        <AccordionPanel>
                            Resource 3
                        </AccordionPanel>
                        <AccordionPanel>
                            Resource 4
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
        <div className='navbar-inner2'>
            <div className='login'><Button colorScheme='black' variant='outline' size='md'
                 height='40px'
                 width='90px'
                border='2px'
                borderColor='rgb(138, 79, 255)'
                backgroundColor='white' color="rgb(138, 79, 255)"
                _hover={{
                    background: "rgb(138, 79, 255)",
                    color: "white",
                  }}>Login</Button>
            </div>

            <div className='signup'><Button colorScheme='black' variant='outline' size='md'
                height='40px'
                width='90px'
                border='2px'
                borderColor='purple'
                backgroundColor='rgb(138, 79, 255)' color="white"
                _hover={{
                    background: "rgb(251, 247, 255)",
                    color: "black",
                  }}>Sign Up</Button>
            </div>
        </div>
        
    </div>
  )
}
