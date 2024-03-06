import { FiArrowDownCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';


const AppBanner = () => {

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col items-center lg:flex-row mt-12 md:mt-2 ml-2"
		>

			<div className="w-full md:w-1/3 text-left 2xsm:p-0">
				
				
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-monospace text-base lg:text-3xl xl:text-3xl text-center lg:text-left text-ternary-dark dark:text-primary-light"
				>
					Hi there👋, I'm JONAS SEBERA
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center lg:text-left leading-normal text-gray-500 dark:text-gray-500"
				>

					
					{/* Typing svg */}
<a href="https://git.io/typing-svg">
		<img src="https://readme-typing-svg.demolab.com?font=&size=24&pause=1000&random=false&width=435&lines=Blockchain+Developer;Web3.0+Application+Developer;Smart+Contract+Developer;Smart+Contract+Auditor;Relational+Databases+Developer" alt="Typing SVG" />
	</a>
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center lg:block 3xsm:block 3xsm:mx-6"
				>
					<a
						download="Jonas-Sebera-Resume.pdf"
						href="/files/Jonas-Sebera-Resume.pdf"
						className="font-general-medium flex justify-center items-center w-full mt-12 mb-6 sm:mb-3 text-lg p-4 sm:py-3 shadow-lg rounded-lg bg-indigo-500 focus:ring-1 hover:bg-indigo-600 text-gray-100 hover:text-white duration-500 2xsm:ml-2 2xsm:p-2 3xsm:-mb-10"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Download Quick Resume
						</span>

						
					</a>
					<p className='mt-20 ml-2 ont-general-medium  text-lg md:text-xl lg:text-2xl xl:text-3xl text-center lg:text-left leading-normal text-gray-500 dark:text-gray-200' >Or Just</p>
					
					<a
					view="Jonas-Sebera-Resume"
					href='https://resume.io/r/Cg5tKp0Qh'
					target="_blank"
					className='font-general-medium flex justify-center items-center w-full sm:w-full md:w-full xsm:w-full 2xsm:w-full lg:w-full mt-12 mb-6 sm:mb-3 text-lg py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-500 focus:ring-1 hover:bg-indigo-600 text-gray-100 hover:text-white duration-500 m-2 p-2'
					aria-label='View Resume here' rel="noreferrer"
				>
					<FiArrowRight className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100" />
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							View Full Resume
						</span>

				</a>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 2, delay: 1 }}
				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
			>
				<video title='App-Home-Banner-Image-Web3.0-Illustration' className="w-11/12  m-2 dark:rounded-full rounded-full border-0" src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/blockchain-technology-4423752-3675973.mp4" autoPlay loop muted></video>
			</motion.div>
		</motion.section>
	);
};

export default AppBanner;
