import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { ChevronRightIcon } from '@heroicons/react/20/solid/index.js'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function ServiceGroup({services, callToAction}) {
  return (
    <div className="bg-white">
      <section
        aria-labelledby="features-heading"
        className="mx-auto max-w-7xl m:px-2 lg:px-8"
      >
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
          <Tab.Group as="div" className="mt-4">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                <Tab.List className="-mb-px flex space-x-10 justify-center">
                  {services && services.fields.serviceGroup &&
                    services.fields.serviceGroup.map((service, i) => (
                    <Tab
                      key={i}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? "border-brand text-brand"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                          "whitespace-nowrap border-b-2 py-6 text-sm font-medium px-2"
                        )
                      }
                    >
                      {service.fields.title}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            <Tab.Panels as={Fragment}>
              {services && services.fields.serviceGroup &&
                services.fields.serviceGroup.map((service, i) => (
                <Tab.Panel
                  key={i}
                  className="space-y-16 pt-10 lg:pt-16"
                >
                  {service.fields.services.map((feature, i) => (
                    <div
                      key={feature.fields.name}
                      className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                    >
                      <div
                        className={classNames(
                          i % 2 === 0
                            ? "lg:col-start-1"
                            : "lg:col-start-8 xl:col-start-9",
                          "mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4"
                        )}
                      >
                        <h3 className="text-lg font-medium text-gray-900">
                          {feature.fields.name}
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                          {feature.fields.description}
                        </p>
                        <a href="/contact" className="text-sm mt-2 text-brand hover:text-brandDark font-semibold inline-flex items-center">
                          {callToAction.callToAction}
                          {callToAction.withIcon ? 
                            (
                              <span><ChevronRightIcon className="h-5 w-5 ml-2" /></span>
                            ) : (
                              null
                            )
                          }
                        </a>
                      </div>
                      <div
                        className={classNames(
                          i % 2 === 0
                            ? "lg:col-start-6 xl:col-start-5"
                            : "lg:col-start-1",
                          "flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8"
                        )}
                      >
                        <div className="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
                          <img src={feature.fields.image.fields.file.url} alt={feature.fields.imageAltTag} className="object-cover object-center" />
                        </div>
                      </div>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
}
