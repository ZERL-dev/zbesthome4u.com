import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {

    return (
        <div id="Home">
            <div id="HomeContainer">
                <div id="Hero">
                    <div id="HeroVideoContainer">
                    </div>
                    <div id="HeroTextContainer">
                        <div id="HeroTitleContainer">
                            <p id="HeroTitle">Genet's Designs and Alterations</p>
                        </div>
                        <div id="HeroSubtitleContainer">
                            <p id="HeroSubtitle">View listings and call for custom orders!</p>
                        </div>
                    </div>
                </div>
                <div id="About">
                    <div id="AboutTextContainer">
                        <div id="AboutTitleContainer">
                            <p id="AboutTitle">About Genet's Designs</p>
                        </div>
                        <div id="AboutParagraphContainer">
                            <p id="AboutParagraph">We sell Ethiopian Traditional attires of all forms. If you’d like to custom make your very own Habesha Kemis, you’ve come to the right place! The amazing design and immaculate stitching of our hand tailored outfits will take your breath. If you’d like anything tailored to fit just right, give us a call!</p>
                        </div>
                    </div>
                    <div id="AboutHeaderImageContainer">
                        <img id="AboutHeaderImage" src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="Genet Design's About Image" />
                    </div>
                </div>
                <div id="Contact">
                    <div id="ContactHeaderContainer">
                        <p id="ContactHeader">Contact Me</p>
                    </div>
                    <div id="ContactInformationContainer">
                        <div id="ContactLocationContainer">
                            <div id="ContactLocationImageContainer">
                                <img id="ContactLocationImage" src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="Genet Design's Store Front" />
                            </div>
                            <div id="ContactLocationAddressContainer">
                                <a id="ContactLocationAddress" href="https://www.google.com/maps/place/11433+Georgia+Ave,+Wheaton,+MD+20902/@39.0425118,-77.0541528,17z/data=!3m1!4b1!4m6!3m5!1s0x89b7cf0343090efb:0x7f2a47709a124e43!8m2!3d39.0425077!4d-77.0515779!16s%2Fg%2F11b8v6b_7h?entry=ttu" target="_blank">11433 Georgia Ave, Wheaton, MD 20902</a>
                            </div>
                        </div>
                        <div id="ContactInfoContainer">
                            <div id="ContactInfoHoursContainer">
                                <p id="ContactInfoHours">Open times: 9:00am - 5:00pm</p>
                            </div>
                            <div id="ContactInfoPhoneContainer">
                                <p id="ContactInfoPhone">Phone number: 202-597-6466</p>
                            </div>
                            <div id="ContactInfoLinksContainer">
                                <div id="ContactInfoLinks">
                                    <a href="" target="_blank"><FaFacebook /></a>
                                    <a href="https://www.instagram.com/genetbekele_dmv?igsh=MTlkYXB1NHRwaWllcQ%3D%3D&utm_source=qr" target="_blank"><FaInstagram /></a>
                                    <a href="https://mail.google.com/mail/u/0/?fs=1&to= HER EMAIL @gmail.com&su=Draft&tf=cm" target="_blank"><MdEmail /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
