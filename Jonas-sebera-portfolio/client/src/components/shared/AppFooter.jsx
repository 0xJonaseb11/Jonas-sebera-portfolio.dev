import React, { useRef } from 'react';
import Discord from "../../images/discord.jpeg";
import Dev from "../../images/Dev.png";
import Medium from "../../images/Medium.png";
import Quora from "../../images/quora.jpeg";
import { FiGithub, FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi';
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
    <div className="flex items-center">
      <span ref={addressRef} className="break-all mr-2">
        {walletAddress}
      </span>
      <button
        onClick={handleCopyClick}
        className="p-2 rounded-xl bg-gray-300 text-gray-800 hover:bg-gray-400 transition"
      >
        Copy
      </button>
    </div>
  );
};

const WalletAddress = `0xcfdEf8165d722DC56a1FD06923de261B5B9d8626`;

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
    icon: <FiFacebook className="m-2" />,
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
    icon: <img src={Dev} alt="Dev Community logo" width={50} className="m-2" />,
    url: 'https://dev.to/jonassebera',
  },
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

        <div className="w-full mt-10 flex flex-col dark:bg-gray-800 opacity-90 items-center p-4 md:p-6 lg:p-12 xl:p-16 md:w-11/12 rounded-2xl  font-general-medium text-ternary-dark  dark:text-ternary-light" >
          <p className="font-semibold text-indigo-300 mb-2 text-lg md:text-xl lg:text-2xl xl:text-3xl">
            We also take coffee please, but real <code className="text-white text-xl">ETH</code> not <code className='text-sm text-white md:text-xl' >FAUCETS</code>
          </p>
          <div className="w-full md:w-9/12 xl:w-2/3 mx-auto mt-6">
            <p className="font-serif mb-2 md:mb-4 text-center">Wallet:</p>
            <div className="w-full bg-gray-700 rounded-full p-4 md:p-2 text-center items-center">
              <CopyAddressButton
                walletAddress={WalletAddress} 
                
                <div className="font-general-medium flex items-center justify-center min-w-fit w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-[#999] hover:bg-[#9999] focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
                {!isLoading && <button type='submit'>Send Message</button>}
                {isLoading && <CircularProgress color='inherit' size={'1.5rem'} />}
              </div>

                //className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl break-all max-w-full"
             
            </div>
          </div>
        </div>
      </div>

      <AppFooterCopyright />
    </div>
  );
};

export default AppFooter;
