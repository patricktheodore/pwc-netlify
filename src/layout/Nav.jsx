import React, { useState, useEffect, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline/index.js";
import {
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid/index.js";
import { SvgIcon } from "../utils/SvgIcon";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Nav = (page) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/.netlify/functions/nav")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      {data && (
        <Popover className="relative bg-white z-99">
          <div
            className="pointer-events-none absolute inset-0 z-30 shadow"
            aria-hidden="true"
          />
          <div className="relative z-20">
            <div className="mx-auto flex max-w-7xl items-center justify-between py-5 px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8">
              <div>
                <a href="/" className="flex">
                  <span className="sr-only">Purified Window Cleaning</span>
                  <img
                    className="h-8 w-auto sm:h-12 transform hover:scale-110 transition duration-250"
                    src={data.fields.pwcLogo.fields.file.url}
                    alt={data.fields.pwcLogo.fields.title}
                  />
                </a>
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
                <Popover.Group as="nav" className="flex space-x-10">
                  {data &&
                    data.fields.navigationLinks.map((link) =>
                      !link.fields.opensDropdownDesktop ? (
                        <a
                          key={link.fields.linkTitle}
                          href={link.fields.linksTo}
                          className={classNames(
                            page === link.fields.linkTitle
                              ? "text-brand"
                              : "text-gray-900",
                            "text-base font-medium hover:text-brandHover"
                          )}
                        >
                          {link.fields.linkTitle}
                        </a>
                      ) : (
                        <Popover>
                          {({ open }) => (
                            <>
                              <Popover.Button
                                key={link.fields.linkTitle}
                                className={classNames(
                                  open
                                    ? "text-gray-900"
                                    : page === link.fields.linkTitle
                                    ? "text-brand"
                                    : "text-gray-900",
                                  "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-brandHover"
                                )}
                              >
                                <span>{link.fields.linkTitle}</span>
                                {open ? (
                                  <ChevronUpIcon
                                    className={classNames(
                                      "text-inherit ml-2 h-5 w-5"
                                    )}
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <ChevronDownIcon
                                    className={classNames(
                                      "text-inherit ml-2 h-5 w-5"
                                    )}
                                    aria-hidden="true"
                                  />
                                )}
                              </Popover.Button>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 -translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 -translate-y-1"
                              >
                                <Popover.Panel className="absolute inset-x-0 top-full z-10 hidden transform bg-white shadow-lg md:block">
                                  <div className="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                                    {link.fields.dropDownContent.map((item) => (
                                      <a
                                        key={item.fields.serviceName}
                                        href="/Services"
                                        className="-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-gray-50"
                                      >
                                        <div className="flex md:h-full lg:flex-col">
                                          <div className="flex-shrink-0">
                                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand text-white sm:h-12 sm:w-12">
                                              <img
                                                className="h-6 w-6"
                                                src={
                                                  item.fields.icon.fields.file
                                                    .url
                                                }
                                              />
                                            </span>
                                          </div>
                                          <div className="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                            <div>
                                              <p className="text-base font-medium text-gray-900">
                                                {item.fields.serviceName}
                                              </p>
                                              <p className="mt-1 text-sm text-gray-500">
                                                {item.fields.descriprion}
                                              </p>
                                            </div>
                                            <p className="mt-2 text-sm font-medium text-brandHover lg:mt-4">
                                              Learn more
                                              <span aria-hidden="true">
                                                {" "}
                                                &rarr;
                                              </span>
                                            </p>
                                          </div>
                                        </div>
                                      </a>
                                    ))}
                                  </div>
                                  <div className="bg-gray-50">
                                    <div className="mx-auto max-w-7xl space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                                      {link.fields.callsToAction.map((item) => (
                                        <div
                                          key={item.fields.callToAction}
                                          className="flow-root"
                                        >
                                          <a
                                            href={item.fields.linksTo}
                                            className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-brand hover:bg-gray-100"
                                          >
                                            <SvgIcon
                                              svg={
                                                item.fields.icon.content[0].content[0].value
                                              }
                                              className="h-6 w-6 flex-shrink-0 text-gray-400"
                                              aria-hidden="true"
                                            />
                                            <span className="ml-3 text-slate-700">
                                              {item.fields.callToAction}
                                            </span>
                                          </a>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                      )
                    )}
                </Popover.Group>
                <div className="flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                  {data && data.fields.callsToAction.map((item) => 
                    <a key={item.fields.callToAction} href={item.fields.linksTo} className={`inline-flex items-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium
                     ${item.fields.primary ? "bg-brand text-white shadow-sm hover:bg-brandDark" : "bg-brandLight text-brandDark hover:bg-brandLightHover"}`}>
                      {item.fields.callToAction}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6 sm:pb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src={data.fields.pwcLogo.fields.file.url}
                        alt={data.fields.pwcLogo.fields.title}
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6 sm:mt-8">
                    <nav>
                      <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                        {data.fields.mobileServices.map((item) => (
                          <a
                            key={item.fields.title}
                            href="/Services"
                            className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50"
                          >
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-brand text-white sm:h-12 sm:w-12">
                              <SvgIcon
                                svg={
                                  item.fields.icon.content[0].content[0].value
                                }
                                className="h-6 w-6 flex-shrink-0"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-4 text-base font-medium text-gray-900">{item.fields.title}</div>
                          </a>
                        ))}
                      </div>
                      <div className="mt-8 text-base">
                        <a
                          href="/services"
                          className="font-medium text-brandHover hover:text-brand"
                        >
                          View all services
                          <span aria-hidden="true"> &rarr;</span>
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-2 gap-4">
                    { data && data.fields.navigationLinks.map((link) => 
                      <a
                        key={link.fields.linkTitle}
                        href={link.fields.linksTo}  
                        className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {link.fields.linkTitle}
                      </a>
                    )}
                  </div>
                  <div className="mt-6 flex flex-col gap-y-2">
                    {data && data.fields.callsToAction.map((item) => 
                      <a key={item.fields.callToAction} href={item.fields.linksTo} className={`text-center rounded-md border border-transparent px-4 py-2 text-sm font-medium
                      ${item.fields.primary ? "bg-brand text-white shadow-sm hover:bg-brandDark" : "bg-brandLight text-brandDark hover:bg-brandLightHover"}`}>
                        {item.fields.callToAction}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      )}
    </>
  );
};
