import React, { useRef } from 'react';  // Add this line to import `useRef`
import AppFooterCopyright from './AppFooterCopyright';  // Add this line to import `AppFooterCopyright`

// ... (previous imports)

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
  // ... (socialLinks array)
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

        <div className="mt-10 items-center flex flex-col bg-indigo-100 p-8 w-full rounded-3xl">
          <p className="font-semibold mb-2 text-[#999] text-3xl">We also take coffee please</p>
          <p className="font-serif">
		  <CopyAddressButton walletAddress="0xcfdEf8165d722DC56a1FD06923de261B5B9d8626" />
</p>
        </div>
        
      </div>

      
      <AppFooterCopyright />
    </div>
  );
};

export default AppFooter;
