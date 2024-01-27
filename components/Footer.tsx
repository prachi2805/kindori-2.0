import {
  FOOTER_CONTACT_INFO,
  FOOTER_LINKS,
  FOOTER_NEWSLETTER,
  SOCIALS,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col">
        <div className="max-container padding-container bg-purple-10 py-10">
          <div className="flex flex-col items-start justify-center  text-white  gap-[5%] md:flex-row">
            <div className="flex flex-col gap-2 lg:gap-5 basis-1/4">
              <Link href="/">
                <Image
                  src="https://demo.cmssuperheroes.com/themeforest/kindori/wp-content/uploads/2020/07/logo-footer.png"
                  alt="logo"
                  width={185}
                  height={29}
                />
              </Link>
              <p>
                Come visit The Kindori Kindergarten for yourself so you can tour
                the rooms and meet some of our educators. We offer high Quality
                early education.
              </p>
              <FooterColumn>
                <ul className="regular-14 flex gap-4">
                  {SOCIALS.links.map((link) => (
                    <li
                      className={`${link.color} text-2xl flexCenter rounded-full py-2 px-3 hover:bg-[#8000ff] `}
                    >
                      <Link
                        href="/"
                        key={link.id}
                        className="hover:animate-spin"
                      >
                        <Image
                          src={link.url}
                          alt="logo"
                          width={12}
                          height={12}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5 basis-1/4 mt-8 sm:mt-0">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.id}
                    className="flex gap-4 flex-col lg:flex-row"
                  >
                    <p className="medium-14 whitespace-nowrap">{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5 basis-1/4 mt-8 sm:mt-0">
              {FOOTER_LINKS.map((columns) => (
                <FooterColumn title={columns.title}>
                  <ul className="regular-14 flex flex-col gap-4 text-white">
                    {columns.links.map((link) => (
                      <Link href="/" key={link.id}>
                        <span className="text-yellow-10">➤&nbsp;</span>
                        {link.value}
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              ))}
            </div>
            <div className="flex flex-col gap-5 basis-1/4 mt-8 sm:mt-0">
              {FOOTER_NEWSLETTER.map((columns) => (
                <FooterColumn title={columns.title}>
                  <ul className="regular-14 flex flex-col gap-4 text-white">
                    {columns.links.map((link) => (
                      <Link href="/" key={link.id}>
                        {link.value}
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              ))}
            </div>
          </div>
        </div>

        <div className=" padding-container bg-[#271344]">
          <section className="flexCenter flex-col sm:flex-row sm:flexBetween ">
            <p className="regular-14 text-white text-center mb-3 sm:mb-0">
              &#169; 2022 Kindori, All Rights Reserved. With love by
              <span className="text-yellow-10">
                <a href="https://cmssuperheroes.com/" rel="noopener noreferrer">
                  &nbsp;CMSSuperHeroes.
                </a>
              </span>
            </p>
            <p className="regular-14  text-white">Sitemap. Terms of Service</p>
          </section>
        </div>
      </footer>
    </>
  );
};

type FooterColumnProps = {
  title?: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
