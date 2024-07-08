import React from "react";
import { Button } from "@chakra-ui/react";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

export default function Footer() {

    return (
        <div id="Footer">
            <div id="FooterContainer">
                <div id="FooterPhoneContainer">
                    <Button leftIcon={<IoCall />} colorScheme="pink" variant="outline">
                        <a className="FooterLink" href="tel:202-597-6466">202-597-6466</a>
                    </Button>
                </div>
                <div id="FooterEmailContainer">
                    <Button leftIcon={<MdOutlineMail />} colorScheme="pink" variant="outline">
                        <a href="https://mail.google.com/mail/u/0/?fs=1&to= HER EMAIL @gmail.com&su=Draft&tf=cm" target="_blank">HER EMAIL</a>
                    </Button>
                </div>
                <div id="FooterAddressContainer">
                    <a id="FooterAddress" href="https://www.google.com/maps/place/11433+Georgia+Ave,+Wheaton,+MD+20902/@39.0425118,-77.0541528,17z/data=!3m1!4b1!4m6!3m5!1s0x89b7cf0343090efb:0x7f2a47709a124e43!8m2!3d39.0425077!4d-77.0515779!16s%2Fg%2F11b8v6b_7h?entry=ttu" target="_blank">11433 Georgia Ave, Wheaton, MD 20902</a>
                </div>
                <div id="FooterSocialIconContainer">
                    <a className="FooterSocialIcon" href="" target="_blank"><FaFacebook /></a>
                    <a className="FooterSocialIcon" href="https://www.instagram.com/genetbekele_dmv?igsh=MTlkYXB1NHRwaWllcQ%3D%3D&utm_source=qr" target="_blank"><FaInstagram /></a>
                    <a className="FooterSocialIcon" href="https://mail.google.com/mail/u/0/?fs=1&to= HER EMAIL @gmail.com&su=Draft&tf=cm" target="_blank"><MdOutlineMail /></a>
                </div>
            </div>
        </div>
    );
};