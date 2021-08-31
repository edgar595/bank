import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { FooterContainer, 
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle, 
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
 } from './FooterElements'


const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      };
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About us </FooterLinkTitle>
                               <FooterLink to="/signin">How it works</FooterLink> 
                               <FooterLink to="/signin">Testimonials</FooterLink> 
                               <FooterLink to="/signin">Careers</FooterLink> 
                               <FooterLink to="/signin">Investors</FooterLink> 
                               <FooterLink to="/signin">Terms of service</FooterLink> 
                           </FooterLinksItems>
                           <FooterLinksItems>
                            <FooterLinkTitle>Contact us</FooterLinkTitle>
                               <FooterLink to="/">Contact</FooterLink> 
                               <FooterLink to="/">Support</FooterLink> 
                               <FooterLink to="/">Destinations</FooterLink> 
                               <FooterLink to="/">Sponsorships</FooterLink> 
                           </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                               <FooterLink to="/">Submit videos</FooterLink> 
                               <FooterLink to="/">Ambassador</FooterLink> 
                               <FooterLink to="/">Agency</FooterLink> 
                               <FooterLink to="/signin">Influencer</FooterLink> 
                           </FooterLinksItems>
                           <FooterLinksItems>
                            <FooterLinkTitle>Policies</FooterLinkTitle>
                               <FooterLink to="/">Disclaimer</FooterLink> 
                               <FooterLink to="/">Terms and conditions</FooterLink> 
                               <FooterLink to="/">Privacy Policy</FooterLink> 
                               <FooterLink to="/">Complains</FooterLink> 
                           </FooterLinksItems>
                    </FooterLinksWrapper>   
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>dolla</SocialLogo>
                        <WebsiteRights>Edgar Mugambi &copy; {new Date().getFullYear()} 
                        All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook"> 
                            <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram"> 
                            <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//https://twitter.com/?lang=en" target="_blank" aria-label="Twitter"> 
                            <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube"> 
                            <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin"> 
                            <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
