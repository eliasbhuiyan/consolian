import React from "react";
import { Parallax } from "../Framer/Parallax";
const products = [
    {
        title: "E-Commerce Website",
        thumbnail:
            "https://res.cloudinary.com/dmqqrpppn/image/upload/v1754290193/consolian/e-ommerce_website_qcluwc.jpg",
    },
    {
        title: "E-Commerce Website",
        thumbnail:
            "https://res.cloudinary.com/dmqqrpppn/image/upload/v1754290130/consolian/e-ommerce_website_1_jokm4h.jpg",
    },
    {
        title: "E-Commerce Website",
        thumbnail:
            "https://res.cloudinary.com/dmqqrpppn/image/upload/v1754290070/consolian/image_of_e-commerce_website_with_product_list_a5mbxo.jpg",
    },

    {
        title: "Agency Website",
        thumbnail:
            "https://res.cloudinary.com/dmqqrpppn/image/upload/v1754289954/consolian/ChatGPT_Image_Aug_4_2025_11_49_47_AM_y1z2om.png",
    },
    {
        title: "Portfolio Website",
        thumbnail:
            "https://res.cloudinary.com/dmqqrpppn/image/upload/v1754289947/consolian/image_of_portfolio_website_hero_section_f4v59s.jpg",
    },
    {
        title: "Agency Website",
        thumbnail:
            "https://res.cloudinary.com/dmqqrpppn/image/upload/v1754289952/consolian/ChatGPT_Image_Aug_4_2025_11_49_50_AM_iljakw.png",
    },

    {
        title: "Portfolio Website",
        thumbnail:
            "https://res.cloudinary.com/dmqqrpppn/image/upload/v1754289947/consolian/image_of_portfolio_website_hero_section_1_vzzgl1.jpg",
    },
    {
        title: "Portfolio Website",
        thumbnail:
            "https://res.cloudinary.com/dmqqrpppn/image/upload/v1754289945/consolian/image_of_portfolio_website_hero_section_2_xwasdd.jpg",
    },
    {
        title: "Agency Website",
        thumbnail:
            "https://res.cloudinary.com/dmqqrpppn/image/upload/v1754289943/consolian/image_of_agency_website_hero_section_ft90zt.jpg",
    },
    {
        title: "Corporate Website",
        thumbnail:
            "https://res.cloudinary.com/dmqqrpppn/image/upload/v1754289942/consolian/image_of_agency_website_hero_section_1_sd9e5y.jpg",
    },
    {
        title: "Industry Website",
        thumbnail:
            "https://res.cloudinary.com/dmqqrpppn/image/upload/v1754289940/consolian/image_of_agency_website_hero_section_2_wll8ar.jpg",
    },

    {
        title: "E-Commerce Website",
        thumbnail:
            "https://res.cloudinary.com/dmqqrpppn/image/upload/v1754289940/consolian/image_of_e-commerce_website_hero_section_kkw35z.jpg",
    },
    {
        title: "E-Commerce Website",
        thumbnail:
            "https://res.cloudinary.com/dmqqrpppn/image/upload/v1754290066/consolian/image_of_e-commerce_website_with_product_list_2_lktcdq.jpg",
    },
    {
        title: "Portfolio Website",
        thumbnail:
            "https://res.cloudinary.com/dmqqrpppn/image/upload/v1754290013/consolian/image_of_e-commerce_website_hero_section_1_ar1hkf.jpg",
    },
    {
        title: "Startup Website",
        thumbnail:
            "https://res.cloudinary.com/dmqqrpppn/image/upload/v1754290068/consolian/image_of_e-commerce_website_with_product_list_1_aa516r.jpg",
    },
];
export default function ProductParallax() {
    return <Parallax products={products} />;
}
