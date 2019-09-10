import React from "react";

// Graphics
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import instagram from "../../assets/icons/instagram.svg";
import email from "../../assets/icons/email.svg";

// Styles
import "./SocialBox.scss";

const SocialBox = () => {
	return (
		<div className='SocialBox'>
			<a href='https://github.com/dugiwarc'>
				<img src={github} alt='github' />
			</a>
			<a href='https://www.linkedin.com/in/george-botnaru-736151113/'>
				<img src={linkedin} alt='linkedin' />
			</a>
			<a href='https://www.instagram.com/dugiwarc/'>
				<img src={instagram} alt='instagram' />
			</a>
			<a href='mailto:gicubotnaru@gmail.com'>
				<img src={email} alt='email' />
			</a>
		</div>
	);
};

export default SocialBox;
