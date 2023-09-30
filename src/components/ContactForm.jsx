import React, { useState } from "react";
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline/index.js'
import { SvgIcon } from "../utils/SvgIcon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm({contactInfo, socialLinks}) {
  const [disableSubmitButton, setDisableSubmitButton] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formDetails, setFormDetails] = useState({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    phone: undefined,
    subject: undefined,
    message: undefined,
  });
  
  const toastifySuccess = () => {
    toast.success("Success! We've received your message and will be in touch shortly.", {
      position: "bottom-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  
  const toastifyError = () => {
    toast.error('Oops! Something went wrong. Please refresh the page and try again.', {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  
  const toastifyWarning = (errorString) => {
    toast.warn(errorString, {
      position: "bottom-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  }

  const toastifyInfo = () => {
    toast.info("We have already received your enquiry. Please check your emails for a confirmation. If you wish to make changes or provide more information, you can reply to the email we sent you.", {
      position: "bottom-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    })
  }
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (disableSubmitButton) {
      return toastifyInfo();
    }

    const data = {
      firstName: formDetails.firstName, 
      lastName: formDetails.lastName, 
      email: formDetails.email, 
      phone: formDetails.phone, 
      subject: formDetails.subject, 
      message: formDetails.message
    };
    
    const formErrors = [];
  
    if (!data.firstName) {
      formErrors.push('First name');
    }
  
    if (!data.email) {
      formErrors.push('Email');
    }
  
    if (!data.subject) {
      formErrors.push('Subject');
    }
  
    if (!data.message) {
      formErrors.push('Message');
    }
  
    if (formErrors.length > 0) {
      let formErrorInfoString = `Hmmm, looks like you forgot to fill out the following field${formErrors.length === 1 ? '' : 's'}: ${formErrors.join(', ')}.`;
      toastifyWarning(formErrorInfoString);
      return;
    }
  
    fetch("./.netlify/functions/new-enquiry", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 200) {
        toastifySuccess();
        setDisableSubmitButton(true);
      }
    }).catch((error) => {
      console.log(error);
      toastifyError();
    });
  };

  return (
		<main className="bg-warm-gray-50 overflow-hidden">
			{/* Contact section */}
			<section
				className="relative bg-white"
				aria-labelledby="contact-heading">
				<div className="mx-auto max-w-7xl">
					<div className="relative bg-white shadow-xl">
						<h2
							id="contact-heading"
							className="sr-only">
							Contact us
						</h2>

						<div className="grid grid-cols-1 lg:grid-cols-3">
							{/* Contact information */}
							<div className="relative rounded-l-md overflow-hidden bg-gradient-to-b from-brand to-brandDark py-10 px-6 sm:px-10 xl:p-12">
								{/* Decorative angle backgrounds */}
								<div
									className="pointer-events-none absolute inset-0 sm:hidden"
									aria-hidden="true">
									<svg
										className="absolute inset-0 h-full w-full"
										width={343}
										height={388}
										viewBox="0 0 343 388"
										fill="none"
										preserveAspectRatio="xMidYMid slice"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
											fill="url(#linear1)"
											fillOpacity=".1"
										/>
										<defs>
											<linearGradient
												id="linear1"
												x1="254.553"
												y1="107.554"
												x2="961.66"
												y2="814.66"
												gradientUnits="userSpaceOnUse">
												<stop stopColor="#fff" />
												<stop
													offset={1}
													stopColor="#fff"
													stopOpacity={0}
												/>
											</linearGradient>
										</defs>
									</svg>
								</div>
								<div
									className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
									aria-hidden="true">
									<svg
										className="absolute inset-0 h-full w-full"
										width={359}
										height={339}
										viewBox="0 0 359 339"
										fill="none"
										preserveAspectRatio="xMidYMid slice"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
											fill="url(#linear2)"
											fillOpacity=".1"
										/>
										<defs>
											<linearGradient
												id="linear2"
												x1="192.553"
												y1="28.553"
												x2="899.66"
												y2="735.66"
												gradientUnits="userSpaceOnUse">
												<stop stopColor="#fff" />
												<stop
													offset={1}
													stopColor="#fff"
													stopOpacity={0}
												/>
											</linearGradient>
										</defs>
									</svg>
								</div>
								<div
									className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
									aria-hidden="true">
									<svg
										className="absolute inset-0 h-full w-full"
										width={160}
										height={678}
										viewBox="0 0 160 678"
										fill="none"
										preserveAspectRatio="xMidYMid slice"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
											fill="url(#linear3)"
											fillOpacity=".1"
										/>
										<defs>
											<linearGradient
												id="linear3"
												x1="192.553"
												y1="325.553"
												x2="899.66"
												y2="1032.66"
												gradientUnits="userSpaceOnUse">
												<stop stopColor="#fff" />
												<stop
													offset={1}
													stopColor="#fff"
													stopOpacity={0}
												/>
											</linearGradient>
										</defs>
									</svg>
								</div>
								<h3 className="text-lg font-medium text-white mb-6">{contactInfo.title}</h3>
								{contactInfo.fields.operatingHours &&
									contactInfo.fields.operatingHours.content &&
									contactInfo.fields.operatingHours.content.map((item, index) => (
										<p key={index} className="mt-2 max-w-3xl text-base text-orange-50">{item.content[0].value}</p>
									))}
								<dl className="mt-8 space-y-6">
									<dt>
										<span className="sr-only">Phone number</span>
									</dt>
									<dd className="flex text-base text-orange-50">
										<PhoneIcon
											className="h-6 w-6 flex-shrink-0 text-orange-200"
											aria-hidden="true"
										/>
										<span className="ml-3">{contactInfo.fields.phoneNumber}</span>
									</dd>
									<dt>
										<span className="sr-only">Email</span>
									</dt>
									<dd className="flex text-base text-orange-50">
										<EnvelopeIcon
											className="h-6 w-6 flex-shrink-0 text-orange-200"
											aria-hidden="true"
										/>
										<span className="ml-3">{contactInfo.fields.email}</span>
									</dd>
								</dl>
								<ul
									role="list"
									className="mt-8 flex space-x-12">
									{socialLinks &&
										socialLinks.fields?.linkGroup &&
										socialLinks.fields?.linkGroup.map((item, index) => (
											<li key={index}>
												<a
													className="text-orange-200 hover:text-orange-100"
													href={item.fields.linksTo}
													target="_blank">
													<span className="sr-only">{item.fields.title}</span>
													<SvgIcon
														svg={item.fields.icon.content[0].content[0].value}
														className="h-6 w-6 flex-shrink-0 text-gray-400"
														aria-hidden="true"
													/>
												</a>
											</li>
										))}
								</ul>
							</div>

							{/* Contact form */}
							<div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
								<h3 className="text-lg font-medium text-warm-gray-900">Send us a message</h3>
								<form
									onSubmit={handleSubmit}
									className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
									<div>
										<label
											htmlFor="firstName"
											className="block text-sm font-medium text-warm-gray-900">
											First name
										</label>
										<div className="mt-1">
											<input
												type="text"
												name="firstName"
												id="firstName"
												autoComplete="given-name"
                        className={`block w-full rounded-md py-3 px-4 text-warm-gray-900 shadow-sm focus:border-brand focus:ring-brand ${
                          formSubmitted && !formDetails.firstName ? "border-red-500" : "border-warm-gray-300"
                        }`}
                        value={formDetails.firstName}
                        onChange={(event) => 
                          setFormDetails({
                            ...formDetails,
                            firstName: event.target.value,
                          })
                        }
                      />
										</div>
									</div>
									<div>
										<div className="flex justify-between">
											<label
												htmlFor="lastName"
												className="block text-sm font-medium text-warm-gray-900">
												Last name
											</label>
											<span
												id="phone-optional"
												className="text-sm text-warm-gray-500">
												Optional
											</span>
										</div>
										<div className="mt-1">
											<input
												type="text"
												name="lastName"
												id="lastName"
												autoComplete="family-name"
												className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-brand focus:ring-brand"
                        value={formDetails.lastName}
                        onChange={(event) =>
                          setFormDetails({
                            ...formDetails,
                            lastName: event.target.value,
                          })
                        }
                      />
										</div>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-warm-gray-900">
											Email
										</label>
										<div className="mt-1">
											<input
												id="email"
												name="email"
												type="email"
												autoComplete="email"
												className={`block w-full rounded-md py-3 px-4 text-warm-gray-900 shadow-sm focus:border-brand focus:ring-brand ${
                          formSubmitted && !formDetails.email ? "border-red-500" : "border-warm-gray-300"
                        }`}
                        value={formDetails.email}
                        onChange={(event) =>
                          setFormDetails({
                            ...formDetails,
                            email: event.target.value,
                          })
                        }
											/>
										</div>
									</div>
									<div>
										<div className="flex justify-between">
											<label
												htmlFor="phone"
												className="block text-sm font-medium text-warm-gray-900">
												Phone
											</label>
											<span
												id="phone-optional"
												className="text-sm text-warm-gray-500">
												Optional
											</span>
										</div>
										<div className="mt-1">
											<input
												type="text"
												name="phone"
												id="phone"
												autoComplete="tel"
												className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-brand focus:ring-brand"
												aria-describedby="phone-optional"
                        value={formDetails.phone}
                        onChange={(event) =>
                          setFormDetails({
                            ...formDetails,
                            phone: event.target.value,
                          })
                        }
											/>
										</div>
									</div>
									<div className="sm:col-span-2">
										<label
											htmlFor="subject"
											className="block text-sm font-medium text-warm-gray-900">
											Subject
										</label>
										<div className="mt-1">
											<input
												type="text"
												name="subject"
												id="subject"
												className={`block w-full rounded-md py-3 px-4 text-warm-gray-900 shadow-sm focus:border-brand focus:ring-brand ${
                          formSubmitted && !formDetails.subject ? "border-red-500" : "border-warm-gray-300"
                        }`}
                        value={formDetails.subject}
                        onChange={(event) =>
                          setFormDetails({
                            ...formDetails,
                            subject: event.target.value,
                          })
                        }
											/>
										</div>
									</div>
									<div className="sm:col-span-2">
										<div className="flex justify-between">
											<label
												htmlFor="message"
												className="block text-sm font-medium text-warm-gray-900">
												Message
											</label>
											<span
												id="message-max"
												className="text-sm text-warm-gray-500">
												Max. 500 characters
											</span>
										</div>
										<div className="mt-1">
											<textarea
												id="message"
												name="message"
												rows={4}
												className={`block w-full rounded-md py-3 px-4 text-warm-gray-900 shadow-sm focus:border-brand focus:ring-brand ${
                          formSubmitted && !formDetails.message ? "border-red-500" : "border-warm-gray-300"
                        }`}
                        value={formDetails.message}
                        onChange={(event) =>
                          setFormDetails({
                            ...formDetails,
                            message: event.target.value,
                          })
                        }
												aria-describedby="message-max"
											/>
										</div>
									</div>
									<div className="sm:col-span-2 sm:flex sm:justify-end">
										<button
											id="submit-button"
											type="submit"
											className={`mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium shadow-sm sm:w-auto 
                        ${disableSubmitButton ? 'text-warm-gray-300 bg-warm-gray-600' : 'text-white bg-brand hover:bg-brandDark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 '}`}>
                      Submit
										</button>
										<ToastContainer
											position="bottom-center"
											autoClose={5000}
											hideProgressBar={false}
											newestOnTop={false}
											closeOnClick
											rtl={false}
											pauseOnFocusLoss
											draggable
											pauseOnHover
											theme="colored"
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
