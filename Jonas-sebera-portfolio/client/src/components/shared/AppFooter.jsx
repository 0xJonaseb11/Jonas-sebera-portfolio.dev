import Discord from "../../images/discord.png";
import Dev from "../../images/Dev.png";
import Medium from "../../images/Medium.png";
import Quora from "../../images/Quora.png";


import {
	FiGithub,
	// eslint-disable-next-line no-unused-vars
	FiTwitter,
	FiLinkedin,
	// eslint-disable-next-line no-unused-vars
	FiFacebook,
	FiInstagram,
	
} from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';

const socialLinks = [
	{
		id: 1,
		icon: <FiGithub />,
		url: 'https://github.com/Jonas-sebera',
	},
	{
		id: 2,
		icon: <img src={Discord} alt="Discord Logo" width={45}/>,
		url: 'https://discord.com/users/1065213095431131218',
	},
	{
		id: 3,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/sebera-jonas/',
	},
	{
		id: 4,
		icon: <FiFacebook />,
		url: 'https://www.facebook.com/jonaswalker.deborde/',
	},
	{
		id: 5,
		icon: <FiInstagram />,
		url: 'https://www.instagram.com/sebe_j_az99',
	},
	
	{
		id: 6,
		icon: <img src={Medium} alt="Medium Logo" width={50}/>,
		url: 'https://medium.com/@sebejaz99',
	},
	{
		id: 7,
		icon: <img src={Quora} alt="Quora logo" width={60}/>,
		url: 'https://www.quora.com/profile/Jaz-1378',
	},
	{
		id: 8,
		icon: <img src={Dev} alt="Dev Community logo" width={50}/>,
		url: 'https://dev.to/jonassebera',
	}
	
];


const AppFooter = () => {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
						Let's go social
					</p>
					<ul className="grid grid-cols-2 gap-3 sm:gap-8 flex-col md:grid md:grid-cols-4">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
};

export default AppFooter;
