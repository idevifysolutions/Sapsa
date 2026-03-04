import Container from "../common/Container";
import {
    FaInstagram,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-14">

            <Container>

                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">

                    {/* Company Info */}
                    <div className="space-y-4">
                        <img src="/images/footerlogo.png" alt="logo" className="h-[45px]" />
                        <p className="text-sm leading-relaxed max-w-[260px]">
                            We, at Sapsaa India Private Limited, are pleased to introduce
                            ourselves as the manufacturers and bottlers of India's most
                            premium Natural Mineral Water Brand – Sapsaa Water.
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="font-poppins text-nav mb-4">Useful Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Home</li>
                            <li>About</li>
                            <li>Our Products</li>
                            <li>Quality Reports</li>
                            <li>FAQ’s</li>
                        </ul>
                    </div>

                    {/* Get In Touch */}
                    <div>
                        <h3 className="font-poppins text-nav mb-4">Get In Touch</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt className="text-white" /> 1800 833 3011
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt className="text-white" /> 1800 833 3012
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope className="text-white" /> sales@sapsawater.com
                            </li>
                        </ul>
                    </div>

                    {/* Address + Social */}
                    <div>
                        <h3 className="font-poppins text-nav mb-4">Connect With Us</h3>

                        <div className="flex items-start gap-2 text-sm mb-4">
                            <FaMapMarkerAlt className="mt-1" />
                            <p>
                                Registered Address: D-19, Near Shamrock School,
                                Mansarover Garden New Delhi - 110015
                            </p>
                        </div>

                        <div className="flex gap-4 text-lg mt-4">
                            <FaInstagram />
                            <FaFacebookF />
                            <FaTwitter />
                            <FaLinkedinIn />
                        </div>
                    </div>

                </div>

            </Container>

            {/* Bottom Strip */}
            <div className="border-t border-white/30 py-4 text-sm">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                        <p>Copyright © All rights reserved.</p>
                        <p>Developed By Idevify Solutions Pvt.Ltd</p>
                    </div>
                </Container>
            </div>

        </footer>
    );
};

export default Footer;