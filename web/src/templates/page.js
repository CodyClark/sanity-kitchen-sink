import React, { useState } from "react";
import { graphql } from "gatsby";

import Hero from "../components/hero";
import InfoRows from "../components/InfoRows";
import CTAColumns from "../components/cta-columns";
import CTA from "../components/cta";
import Pricing from "../components/pricing";
import { TopWave, BottomWave } from "../components/wave";

import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    route: sanityRoute(id: { eq: $id }) {
      slug {
        current
      }
      useSiteTitle
      page {
        ...PageInfo
      }
    }
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      primaryColor {
        hex
      }
      secondaryColor {
        hex
      }
      title
      openGraph {
        title
        description
        image {
          ...SanityImage
        }
      }
    }
  }
`;

const Page = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const page = data.page || data.route.page;

  const content = (page._rawContent || [])
    .filter(c => !c.disabled)
    .map((c, i) => {
      let el = null;
      switch (c._type) {
        case "pricing":
          el = <Pricing key={c._key} {...c} />;
          break;
        case "infoRows":
          el = <InfoRows key={c._key} {...c} />;
          break;
        case "hero":
          el = <Hero key={c._key} series={page.series} {...c}  />;
          break;
        case "ctaColumns":
          el = <CTAColumns key={c._key} {...c} />;
          break;
        case "ctaPlug":
          el = <CTA key={c._key} {...c} />;
          break;
        case "uiComponentRef":
          switch (c.name) {
            case "topWave":
              el = <TopWave />;
              break;
            case "bottomWave":
              el = <BottomWave />;
              break;
            default:
              break;
          }
          break;
        default:
          el = null;
      }
      return el;
    });

  const gradient = {
    from: (site.primaryColor && site.primaryColor.hex) || "#d53369",
    to: (site.secondaryColor && site.secondaryColor.hex) || "#daae51"
  };

  const menuItems = page.navMenu && (page.navMenu.items || []);
  const pageTitle = data.route && !data.route.useSiteTitle && page.title;
  // const series = page.series;
  console.log(page);
  
  return (
    <Layout navMenuItems={menuItems} textWhite={true}>
        <SEO
          title={pageTitle}
          description={site.description}
          keywords={site.keywords}
          bodyAttr={{
            class: "leading-normal tracking-normal text-white gradient"
          }}
          gradient={gradient}
        />
        <div className="text-center pt-24">
                <>
                  <div className="">Family: {page.series.category}</div>
                  <div className="">Name: {page.series.name}</div>
                  <div className="">Starting MSRP: {page.series.startingMSRP.toLocaleString('en-US', {style: 'currency', currency: "USD", minimumFractionDigits: 0})}</div>
                  <div className="">Seats: {page.series.seats}</div>
                  <div className="">MPG City: {page.series.mpgCity}</div>
                  <div className="">MPG Hwy: {page.series.mpgHighway}</div>
                  <br />
                  <div>Models:</div>
                  
                  {page.series.Models.map(model => (
                    <>
                     <div className="">Model Num: {model.modelNumber}</div>
                     <div className="">Model Grade: {model.grade}</div>
                     <div className="">MSRP: {model.msrp.toLocaleString('en-US', {style: 'currency', currency: "USD"})}</div>
                     <div className="">Model Desc: {model.modelDescription}</div>
                     <div className="">Model Year: {model.modelYear}</div>
                     <div className="">Model Year Desc: {model.modelYearDescription}</div>
                     <div className="">Model Year Version: {model.modelYearVersionCode}</div>
                     <br />
                    </> 
                    
                  ))}
                </>
        </div>
        <div className="pt-24">{content}</div>
    </Layout>
  );
};

export default Page;
