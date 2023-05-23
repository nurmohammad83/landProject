"use client";
import { variants } from "../content/variantes";
import bluecoder from '../assets/bluecode.png'
import burge from '../assets/burge.png'
import nomo from '../assets/nomo.png'
import product from '../assets/product.png'
import rev from '../assets/rev.png'
import sixty from '../assets/sixty.png'
import { motion } from "framer-motion";
const Company = () => {
  return (
    <div>
      <p className="text-xl font-poppins text-gray-400 text-center">
        TRUSTED BY LEADING ORGANIZATIONS
      </p>

      <div className="grid grid-cols-2 py-12 md:grid-cols-3 justify-center items-center lg:grid-cols-6 gap-4">
        
          <motion.img
            variants={variants}
            initial="hidden"
            whileInView="visible"
            className="opacity-70  hover:opacity-100"
            src={bluecoder}
            alt=""
          />
          <motion.img
            variants={variants}
            initial="hidden"
            whileInView="visible"
            className="opacity-70  hover:opacity-100"
            src={burge}
            alt=""
          />
          <motion.img
            variants={variants}
            initial="hidden"
            whileInView="visible"
            className="opacity-70  hover:opacity-100"
            src={nomo}
            alt=""
          />
          <motion.img
            variants={variants}
            initial="hidden"
            whileInView="visible"
            className="opacity-70  hover:opacity-100"
            src={product}
            alt=""
          />
          <motion.img
            variants={variants}
            initial="hidden"
            whileInView="visible"
            className="opacity-70  hover:opacity-100"
            src={rev}
            alt=""
          />
          <motion.img
            variants={variants}
            initial="hidden"
            whileInView="visible"
            className="opacity-70  hover:opacity-100"
            src={sixty}
            alt=""
          />
     
      </div>
    </div>
  );
};

export default Company;
