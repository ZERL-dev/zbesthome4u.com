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
                            <p id="HeroSubtitle">View clothes and call for custom orders!</p>
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
            <style>
                {`

                    #Home {
                        display: flex;
                        position: relative;
                        width: 100vw;
                        height: 100%;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                    }

                    #HomeContainer {
                        display: flex;
                        position: relative;
                        width: 95%;
                        height: 100%;
                        margin: 0 5%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    #Hero {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100vh;
                        padding-top: 10vh;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                    }

                    #HeroVideoContainer {
                        display: flex;
                        position: relative;
                        width: 40%;
                        height: 100%;
                        justify-content: center;
                        align-items: center;
                    }
                    
                    #HeroVideo {
                        height: 100%;
                    }

                    #HeroTextContainer {
                        display: flex;
                        position: relative;
                        width: 60%;
                        height: 80%;
                        padding: 0 5%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        border-radius: 45px;
                        background-color: rgba(0, 0, 0, 0.75);
                    }

                    #HeroTitleContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 25%;
                        justify-content: flex-start;
                        align-items: center;
                    }

                    #HeroTitle {
                        font-size: 60px;
                        font-weight: 600;
                        color: white;
                    }

                    #HeroSubtitleContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 20%;
                        padding-top: 100px;
                        justify-content: flex-start;
                        align-items: center;
                    }

                    #HeroSubtitle {
                        font-size: 30px;
                        color: white;
                    }

                    #About {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100vh;
                        padding-top: 10vh;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                    }

                    #AboutTextContainer {
                        display: flex;
                        position: relative;
                        width: 50%;
                        height: 100%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    #AboutTitleContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 30%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    #AboutTitle {
                        font-size: 50px;
                        font-weight: 600;
                    }

                    #AboutParagraphContainer {
                        display: flex;
                        position: relative;
                        width: 85%;
                        height: 70%;
                        justify-content: flex-start;
                        align-items: flex-start;
                    }

                    #AboutParagraph {
                        font-size: 24px;
                    }

                    #AboutHeaderImageContainer {
                        display: flex;
                        position: relative;
                        width: 50%;
                        height: 100%;
                        justify-content: center;
                        align-items: center;
                    }

                    #AboutHeaderImage {
                        height: 70%;
                    }

                    #Contact {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100vh;
                        padding-top: 10vh;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    #ContactHeaderContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 25%;
                        justify-content: center;
                        align-items: center;
                    }

                    #ContactHeader {
                        font-size: 50px;
                        font-weight: 600;
                    }

                    #ContactInformationContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 75%;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                    }

                    #ContactLocationContainer {
                        display: flex;
                        position: relative;
                        width: 50%;
                        height: 100%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    #ContactLocationImageContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 60%;
                        justify-content: center;
                        align-items: center;
                    }

                    #ContactLocationImage {
                        height: 100%;
                    }

                    #ContactLocationAddressContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 40%;
                        align-items: center;
                        justify-content: center;
                    }

                    #ContactLocationAddress {
                        font-size: 20px;
                        text-align: center;
                    }

                    #ContactLocationAddress:hover {
                        text-decoration: underline;
                        opacity: 0.9;
                    }

                    #ContactInfoContainer {
                        display: flex;
                        position: relative;
                        width: 50%;
                        height: 100%;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;
                    }
                    
                    #ContactInfoHoursContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 25%;
                        justify-content: center;
                        align-items: center;
                    }

                    #ContactInfoHours {
                        font-size: 24px;
                    }

                    #ContactInfoPhoneContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 25%;
                        justify-content: center;
                        align-items: center;
                    }

                    #ContactInfoPhone {
                        font-size: 24px;
                    }

                    #ContactInfoLinksContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 25%;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                    }

                    #ContactInfoLinks {
                        display: flex;
                        position: relative;
                        width: 50%;
                        height: 100%;
                        flex-direction: row;
                        justify-content: space-around;
                        align-items: center;
                        font-size: 50px;
                    }

                    #ContactInfoLinks a {
                        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
                    }

                    #ContactInfoLinks a:hover {
                        opacity: 0.9;
                        transform: scale(1.1);
                    }

                    #SideSectionSelection {
                        display: flex;
                        position: fixed;
                        top: 10vh;
                        right: 0;
                        width: 5%;
                        height: 90%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    #SideSectionSelectionContainer {
                        display: flex;
                        position: relative;
                        width: 45px;
                        height: 200px;
                        flex-direction: column;
                        justify-content: space-around;
                        align-items: center;
                        background-color: rgba(0, 0, 0, 0.75);
                        border-radius: 25px;
                    }

                    #SideSectionSelectionOption {
                        display: flex;
                        position: relative;
                        width: 45%;
                        height: 10%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid white;
                        border-radius: 50%;
                        cursor: pointer;
                    }

                    #SideSectionSelectionOption:hover {
                        opacity: 0.7;
                    }

                    #SideSectionSelectionOption.selected {
                        background-color: white;
                        transition: background-color 0.5s ease-in-out;
                    }

                    @media (max-width: 1100px) {

                        #Hero {
                            width: 111%;
                        }

                        #HeroVideoContainer {
                            width: 100%;
                        }

                        #HeroVideo {
                            width: 100%;
                            object-fit: cover;
                        }

                        #HeroTextContainer {
                            position: absolute;
                            bottom: 0;
                            width: 100%;
                            height: 25%;
                            border-radius: 0;
                        }

                        #HeroTitleContainer {
                            justify-content: center;
                            align-items: flex-start;
                            text-align: center;
                        }

                        #HeroTitle {
                            font-size: 35px;
                        }

                        #HeroSubtitleContainer {
                            padding-top: 85px;
                            margin-bottom: 10px;
                            justify-content: center;
                            align-items: center;
                            text-align: center;
                        }

                        #HeroSubtitle {
                            font-size: 18px;
                        }

                        #About {
                            margin-top: 10vh;
                            flex-direction: column;
                        }

                        #AboutTextContainer {
                            width: 100%;
                        }

                        #AboutTitleContainer {
                            text-align: center;
                        }

                        #AboutParagraphContainer {
                            width: 95%;
                            margin-top: 50px;
                            justify-content: center;
                            text-align: center;
                        }

                        #AboutParagraph {
                            font-size: 22px; 
                        }

                        #AboutHeaderImageContainer {
                            width: 100%;
                        }

                        #AboutHeaderImage {
                            height: 80%;
                        }

                        #Contact {
                            margin-top: 10vh;
                        }

                        #ContactHeaderContainer {
                            height: 15%;
                        }

                        #ContactInformationContainer {
                            height: 85%;
                            flex-direction: column;
                        }

                        #ContactLocationContainer {
                            width: 100%;
                            height: 50%;
                            padding-top: 5%;
                        }
                        ContactLocationImageContainer {
                            height: 70%;
                        }

                        #ContactLocationAddressContainer {
                            height: 20%;
                        }

                        #ContactInfoContainer {
                            width: 100%;
                            height: 50%;
                        }

                        #SideSectionSelection {
                            display: none;
                        }

                        
                    }
                    
                `}
            </style>
        </div>
    );
};
