import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import * as React from "react";
import { BreadCrumsProps } from "../interfaces";

const BreadCrums = ({ items }: BreadCrumsProps) => (
  <nav className="flex" aria-label="Breadcrumb">
    <ol role="list" className="flex items-center space-x-4">
      <li>
        <div>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </a>
        </div>
      </li>
      {items.map((page) => (
        <li key={page.name}>
          <div className="flex items-center">
            <ChevronRightIcon
              className="flex-shrink-0 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <a
              href={page.href}
              className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              aria-current={page.current ? "page" : undefined}
            >
              {page.name}
            </a>
          </div>
        </li>
      ))}
    </ol>
  </nav>
);

export default BreadCrums;
