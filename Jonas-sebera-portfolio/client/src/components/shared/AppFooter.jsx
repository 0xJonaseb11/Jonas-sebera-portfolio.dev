import React, { useRef } from 'react';
import Discord from "../../images/discord.jpeg";
import Dev from "../../images/Dev.png";
import Medium from "../../images/Medium.png";
import Quora from "../../images/quora.jpeg";
import {FiGithub,FiLinkedin,FiFacebook,FiInstagram} from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';



const CopyAddressButton = ({ walletAddress }) => {
  const addressRef = useRef(null);

  const handleCopyClick = () => {
    if (addressRef.current) {
      const textArea = document.createElement('textarea');
      textArea.value = walletAddress;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);

      window.alert('Address copied to clipboard');
    }
  };

  return (
    <div>
      <span ref={addressRef}>{walletAddress}</span>
      <button onClick={handleCopyClick} className='p-2 ml-2 rounded-xl bg-gray-300'> Copy </button>
    </div>
  );
};

const socialLinks = [
  {
    id: 1,
    icon: <FiGithub className="m-2" />,
    url: 'https://github.com/Jonas-sebera',
  },
  {
    id: 2,
    icon: <img src={Discord} alt="Discord Logo" width={45} className="m-2" />,
    url: 'https://discord.com/users/1065213095431131218',
  },
  {
    id: 3,
    icon: <FiLinkedin className="m-2" />,
    url: 'https://www.linkedin.com/in/sebera-jonas/',
  },
{
  id: 4,
  icon: <FiFacebook className="m-2"/>,
  url: 'https://www.facebook.com/jonaswalker.deborde/',
},

  {
    id: 5,
    icon: <FiInstagram className="m-2" />,
    url: 'https://www.instagram.com/sebe_j_az99',
  },
  {
    id: 6,
    icon: <img src={Medium} alt="Medium Logo" width={50} className="m-2" />,
    url: 'https://medium.com/@sebejaz99',
  },
  {
    id: 7,
    icon: <img src={Quora} alt="Quora logo" width={60} className="m-2" />,
    url: 'https://www.quora.com/profile/Jaz-1378',
  },
  {
	id: 8,
	icon: <img src={Dev} alt="Dev Community logo" width={50} className="m-2"/>,
	url: 'https://dev.to/jonassebera',
}
];

const AppFooter = () => {
  return (
    <div className="container mx-auto">
      {/* Footer social links */}
      <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
        <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-10">
          Let's go social
        </p>
        <ul className="grid grid-cols-2 gap-3 sm:gap-8 md:grid md:grid-cols-4 ml-2">
          {socialLinks.map((link) => (
            <a
              href={link.url}
              target="__blank"
              key={link.id}
              className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-xl bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
            >
              <i className="text-xl sm:text-2xl md:text-4xl">
                {link.icon}
              </i>
            </a>
          ))}
        </ul>

        <div className="mt-10 items-center flex flex-col bg-indigo-100 p-8 w-full rounded-2xl dark:bg-[#9999] ">
          <p className="font-semibold mb-2 text-[#999] dark:text-white text-2xl">We also take coffee please! BUT real <code className='text-base'>ETH</code> not <code className='text-base'>faucets</code></p>
          <p className="font-serif   "> Wallet:

            <div className=' '>
              <code language="sh"><CopyAddressButton walletAddress="0xcfdEf8165d722DC56a1FD06923de261B5B9d8626"/>
              </code>
          </div>
          </p>
        </div>
      </div>

      <AppFooterCopyright />
    </div>
  );
};

export default AppFooter;
