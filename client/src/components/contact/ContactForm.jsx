import FormInput from '../reusable/FormInput';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import CircularProgress from '@mui/material/CircularProgress';
import { ToastContainer, toast } from "react-toastify";

const ContactForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const onError = (error) =>
		toast.error(error, {
			position: "top-center",
		});

	const onSuccess = (success) =>
		toast.success(success, {
			position: "top-center",
		});

	const form = useRef()
	const sendEmail = (e) => {
		e.preventDefault();
		setIsLoading(true);
		emailjs.sendForm('service_4l7kxq7', 'template_len7agm', form.current, 'dQ5I1i5gTw22cXzt1')
			.then((result) => {
				console.log(result.text);
				setIsLoading(false);
				onSuccess("Message sent to Jonas Successfully");
				e.target.reset()
			}, (error) => {
				console.log(error.text);
				setIsLoading(false);
				onError("Message not sent")
			});
	};

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={sendEmail}
					ref={form}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Connect With Jonas Sebera 🙋
					</p>
					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="user_name"
						placeholderText="Your Name"
						ariaLabelName="Name"
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="user_email"
						placeholderText="Your email"
						ariaLabelName="Email"
					/>
					<FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

					<div className="font-general-medium flex items-center justify-center min-w-fit w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						{!isLoading && <button type='submit'>Send Message</button>}
						{isLoading && <CircularProgress color='inherit' size={'1.5rem'} />}
					</div>
				</form>
			</div>
			<ToastContainer theme={"light"} />
		</div>
	);
};

export default ContactForm;
