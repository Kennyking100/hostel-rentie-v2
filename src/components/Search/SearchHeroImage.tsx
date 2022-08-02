import React from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

const svgVariant = {
  hidden: { rotate: -45 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariant = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

const SearchHeroImage = () => {
  return (
    <Box
      position="absolute"
      left={0}
      w="full"
      objectFit="cover"
      bottom={"-5rem"}
    >
      <motion.svg
        id="Group_112"
        data-name="Group 112"
        xmlns="http://www.w3.org/2000/svg"
        width="824.742"
        height="640.507"
        viewBox="0 0 824.742 640.507"
        initial="hidden"
        animate="visible"
        variants={svgVariant}
      >
        <circle
          id="Ellipse_25"
          data-name="Ellipse 25"
          cx="33.603"
          cy="33.603"
          r="33.603"
          transform="translate(321.527 245.983)"
          fill="#e6e6e6"
        />
        <motion.path
          variants={pathVariant}
          id="Path_118"
          data-name="Path 118"
          d="M645.2,435.325l35.116-35.116a37.192,37.192,0,1,1,11.17,11.171L656.372,446.5a7.9,7.9,0,1,1-11.17-11.171ZM692.8,398.9a26.6,26.6,0,1,0-7.79-18.807A26.6,26.6,0,0,0,692.8,398.9Z"
          transform="translate(-372.426 -112.558)"
          fill="#3f3d56"
        />
        <motion.path
          variants={pathVariant}
          id="Path_119"
          data-name="Path 119"
          d="M174.985,443.057C85.181,542.371,345.507,685.5,555.856,685.5S911.735,574.6,936.728,443.057c60.6-318.944-516.323-521.663-380.872-242.438C753.291,607.622,245.707,364.846,174.985,443.057Z"
          transform="translate(-156.756 -68.493)"
          fill="rgba(1,146,63,0.15)"
        />
        <motion.path
          variants={pathVariant}
          id="Path_120"
          data-name="Path 120"
          d="M126.985,471.057C37.181,570.371,297.507,713.5,507.856,713.5S863.735,602.6,888.728,471.057c60.6-318.944-516.323-521.663-380.872-242.438C705.291,635.622,197.707,392.846,126.985,471.057Z"
          transform="translate(-68.463 -72.989)"
          fill="#144b34"
        />
        <motion.path
          variants={pathVariant}
          id="Path_121"
          data-name="Path 121"
          d="M239.364,255.71c63.015-2.775,111.874-16.367,111.232-30.946-.385-8.74-18.219-15.768-48.928-19.282a.839.839,0,1,0-.191,1.668c28.929,3.31,47.107,10.087,47.442,17.687.58,13.183-49.623,26.552-109.628,29.194S128.1,247.77,127.52,234.587c-.336-7.632,17.29-16,46-21.849a.84.84,0,1,0-.335-1.645c-30.473,6.2-47.728,14.794-47.342,23.568C126.484,249.239,176.349,258.485,239.364,255.71Z"
          transform="translate(459.803 -90.487)"
          fill="#efe307"
        />
        <motion.path
          variants={pathVariant}
          id="Path_122"
          data-name="Path 122"
          d="M303.355,268.227a64.623,64.623,0,0,1-111.676,4.635,1017.4,1017.4,0,0,0,111.676-4.635Z"
          transform="translate(451.778 -100.562)"
          fill="#01923f"
        />
        <motion.path
          variants={pathVariant}
          id="Path_123"
          data-name="Path 123"
          d="M186.294,236.441a64.635,64.635,0,1,1,124.027-4.79,480.358,480.358,0,0,1-124.027,4.789Z"
          transform="translate(450.192 -81.798)"
          fill="#01923f"
        />
        <circle
          id="Ellipse_26"
          data-name="Ellipse 26"
          cx="7.555"
          cy="7.555"
          r="7.555"
          transform="translate(675.461 96.201)"
          fill="#fff"
        />
        <circle
          id="Ellipse_27"
          data-name="Ellipse 27"
          cx="12.592"
          cy="12.592"
          r="12.592"
          transform="translate(709.307 115.5)"
          fill="#fff"
        />
        <circle
          id="Ellipse_28"
          data-name="Ellipse 28"
          cx="8.394"
          cy="8.394"
          r="8.394"
          transform="translate(523.462 111.561)"
          fill="#efe307"
        />
        <circle
          id="Ellipse_29"
          data-name="Ellipse 29"
          cx="5.037"
          cy="5.037"
          r="5.037"
          transform="translate(716.534 375.146)"
          fill="#e6e6e6"
        />
        <circle
          id="Ellipse_30"
          data-name="Ellipse 30"
          cx="5.037"
          cy="5.037"
          r="5.037"
          transform="translate(363.968 548.071)"
          fill="#e6e6e6"
        />
        <circle
          id="Ellipse_31"
          data-name="Ellipse 31"
          cx="2.518"
          cy="2.518"
          r="2.518"
          transform="translate(694.708 282.807)"
          fill="#e6e6e6"
        />
        <circle
          id="Ellipse_32"
          data-name="Ellipse 32"
          cx="2.518"
          cy="2.518"
          r="2.518"
          transform="translate(486.526 470.842)"
          fill="#e6e6e6"
        />
        <circle
          id="Ellipse_33"
          data-name="Ellipse 33"
          cx="2.518"
          cy="2.518"
          r="2.518"
          transform="translate(107.938 446.498)"
          fill="#e6e6e6"
        />
        <circle
          id="Ellipse_34"
          data-name="Ellipse 34"
          cx="2.518"
          cy="2.518"
          r="2.518"
          transform="translate(226.299 521.209)"
          fill="#e6e6e6"
        />
        <circle
          id="Ellipse_35"
          data-name="Ellipse 35"
          cx="2.518"
          cy="2.518"
          r="2.518"
          transform="translate(349.697 430.549)"
          fill="#e6e6e6"
        />
        <circle
          id="Ellipse_36"
          data-name="Ellipse 36"
          cx="2.518"
          cy="2.518"
          r="2.518"
          transform="translate(509.191 182.074)"
          fill="#e6e6e6"
        />
        <circle
          id="Ellipse_37"
          data-name="Ellipse 37"
          cx="2.518"
          cy="2.518"
          r="2.518"
          transform="translate(489.045 57.836)"
          fill="#e6e6e6"
        />
        <circle
          id="Ellipse_38"
          data-name="Ellipse 38"
          cx="2.518"
          cy="2.518"
          r="2.518"
          transform="translate(500.797 580.809)"
          fill="#e6e6e6"
        />
        <circle
          id="Ellipse_39"
          data-name="Ellipse 39"
          cx="2.518"
          cy="2.518"
          r="2.518"
          transform="translate(625.035 527.924)"
          fill="#e6e6e6"
        />
        <circle
          id="Ellipse_40"
          data-name="Ellipse 40"
          cx="2.518"
          cy="2.518"
          r="2.518"
          transform="translate(231.336 437.264)"
          fill="#e6e6e6"
        />
        <circle
          id="Ellipse_41"
          data-name="Ellipse 41"
          cx="7.555"
          cy="7.555"
          r="7.555"
          transform="translate(692.636 181.151)"
          fill="#fff"
        />
        <motion.path
          variants={pathVariant}
          id="Path_124"
          data-name="Path 124"
          d="M346.661,422.239c0,22.565,34.887,75.144,45.082,90.027a3.351,3.351,0,0,0,5.533,0c10.2-14.884,45.082-67.463,45.082-90.028a47.848,47.848,0,0,0-95.7,0Z"
          transform="translate(182.677 -117.607)"
          fill="#fff"
        />
        <circle
          id="Ellipse_42"
          data-name="Ellipse 42"
          cx="24.344"
          cy="24.344"
          r="24.344"
          transform="translate(552.843 276.931)"
          fill="#efe307"
        />
        <ellipse
          id="Ellipse_43"
          data-name="Ellipse 43"
          cx="28.121"
          cy="5.456"
          rx="28.121"
          ry="5.456"
          transform="translate(549.485 411.242)"
          fill="#fff"
        />
        <motion.path
          variants={pathVariant}
          id="Path_125"
          data-name="Path 125"
          d="M870.776,385.509a8.829,8.829,0,0,1,.538,1.283l40.111,11.145,7.228-7.074,12.1,9.514-11.579,13.766a6.716,6.716,0,0,1-7.851,1.821L868,396.838a8.812,8.812,0,1,1,2.781-11.328Z"
          transform="translate(-731.736 -118.634)"
          fill="#cb9898"
        />
        <motion.path
          variants={pathVariant}
          id="Path_126"
          data-name="Path 126"
          d="M838.582,397.621l15.056,11.718a3.777,3.777,0,0,0,5.609-1.122l9.357-16.56a10.491,10.491,0,0,0-16.6-12.839l-13.715,13.09a3.778,3.778,0,0,0,.289,5.713Z"
          transform="translate(-657.479 -117.664)"
          fill="#6c63ff"
        />
        <motion.path
          variants={pathVariant}
          id="Path_127"
          data-name="Path 127"
          d="M924.489,379.765l-15.268,6.869a2.643,2.643,0,0,0-1.326,3.5l1.808,4.018a.884.884,0,0,0-.442,1.165l.723,1.607a.884.884,0,0,0,1.165.442l.723,1.607a.884.884,0,0,0-.442,1.165l.723,1.607a.884.884,0,0,0,1.165.442l9.761,21.7a2.644,2.644,0,0,0,3.5,1.326l15.268-6.869a2.644,2.644,0,0,0,1.326-3.5l-15.184-33.75a2.643,2.643,0,0,0-3.5-1.326Z"
          transform="translate(-789.295 -118.432)"
          fill="#3f3d56"
        />
        <motion.path
          variants={pathVariant}
          id="Path_128"
          data-name="Path 128"
          d="M939.613,416.868l-12.248,5.516a2.547,2.547,0,0,1-3.357-1.269l-5.657-12.583-1.965-4.362-5.12-11.385a2.54,2.54,0,0,1,1.269-3.348l3.851-1.736,8.406-3.78a2.536,2.536,0,0,1,3.348,1.278l4.952,11.006,5.639,12.53,2.15,4.785a2.537,2.537,0,0,1-1.269,3.348Z"
          transform="translate(-789.838 -119.102)"
          fill="#f2f2f2"
        />
        <motion.path
          variants={pathVariant}
          id="Path_129"
          data-name="Path 129"
          d="M788.763,532.85H778.471l-4.9-39.7h15.19Z"
          transform="translate(-613.395 -79.179)"
          fill="#cb9898"
        />
        <motion.path
          variants={pathVariant}
          id="Path_130"
          data-name="Path 130"
          d="M912.391,604.933H892.123a12.916,12.916,0,0,0-12.916,12.916v.419H912.39Z"
          transform="translate(-734.398 -154.622)"
          fill="#2f2e41"
        />
        <motion.path
          variants={pathVariant}
          id="Path_131"
          data-name="Path 131"
          d="M820.763,529.85H810.471l-4.9-39.7h15.19Z"
          transform="translate(-672.257 -78.698)"
          fill="#cb9898"
        />
        <motion.path
          variants={pathVariant}
          id="Path_132"
          data-name="Path 132"
          d="M944.391,601.933H924.123a12.916,12.916,0,0,0-12.916,12.916v.419H944.39Z"
          transform="translate(-793.26 -154.14)"
          fill="#2f2e41"
        />
        <motion.path
          variants={pathVariant}
          id="Path_133"
          data-name="Path 133"
          d="M936.041,490.616a33.083,33.083,0,0,1-30.975,22.505l-.521.008c-5.313.151-11.551-1.561-17.67-4.021-12.088-4.86-23.7-12.642-26.778-14.783l5.221,50.19,2.115,20.348a3.789,3.789,0,0,1-3.761,4.172H850.636a3.782,3.782,0,0,1-3.66-2.821l-21.523-81.972a15.976,15.976,0,0,1,16.545-20l44.709,3.064-3.122-12.491,39.907-2.653.117.084c.957.7,1.889,1.427,2.779,2.191a33.8,33.8,0,0,1,5.868,6.43,32.308,32.308,0,0,1,3.786,29.75Z"
          transform="translate(-714.51 -130.093)"
          fill="#2f2e41"
        />
        <motion.path
          variants={pathVariant}
          id="Path_134"
          data-name="Path 134"
          d="M910.018,492.281a33.083,33.083,0,0,1-30.975,22.506,164.66,164.66,0,0,1-18.946-11.24l.755,7.228,6.581,63.311a3.789,3.789,0,0,1-3.761,4.172H850.636a3.782,3.782,0,0,1-3.66-2.821L839.3,546.182l-13.842-52.717a15.976,15.976,0,0,1,16.546-20l44.708,3.064-3.122-12.491,22.648-1.5a32.308,32.308,0,0,1,3.786,29.75Z"
          transform="translate(-688.487 -131.758)"
          fill="#2f2e41"
        />
        <motion.path
          variants={pathVariant}
          id="Path_135"
          data-name="Path 135"
          d="M877.112,442.084l.3-.036,6.963-34.237c.06-.3,5.752-29.828-11.7-45.266l-.3-2.113a3.778,3.778,0,0,0-4.858-3.07l-16.44,5.1a3.77,3.77,0,0,0-2.534,4.568l1.6,6.079c-2.216,2.6-28.3,34.008-19.215,58.2l4.07,15.909Z"
          transform="translate(-665.177 -114.846)"
          fill="#01923f"
        />
        <motion.path
          variants={pathVariant}
          id="Path_136"
          data-name="Path 136"
          d="M863.015,422.716a8.842,8.842,0,0,1,1.116.831l40.207-10.794,2.629-9.766,15.257,2.041-2.973,17.741a6.716,6.716,0,0,1-5.835,5.559l-47.036,5.556a8.812,8.812,0,1,1-3.364-11.169Z"
          transform="translate(-719.345 -122.198)"
          fill="#cb9898"
        />
        <motion.path
          variants={pathVariant}
          id="Path_137"
          data-name="Path 137"
          d="M844.7,408.278l18.922,2.437a3.778,3.778,0,0,0,4.259-3.818l-.361-19.017a10.491,10.491,0,1,0-20.818-2.62l-5.156,18.245a3.777,3.777,0,0,0,3.153,4.773Z"
          transform="translate(-658.158 -117.878)"
          fill="#01923f"
        />
        <circle
          id="Ellipse_44"
          data-name="Ellipse 44"
          cx="20.618"
          cy="20.618"
          r="20.618"
          transform="translate(171.251 196.633)"
          fill="#cb9898"
        />
        <motion.path
          variants={pathVariant}
          id="Path_138"
          data-name="Path 138"
          d="M834.633,323.518l2.581-4.7a56.316,56.316,0,0,1-3.747,36.409l33.521-15.615-.319-5.54,3.317,3.764,4.766-2.626.63-3.593,3.6.891-13.132-23.83C853.1,286,834.573,294.659,834.573,294.659,805.1,293.258,808.7,322.34,808.7,322.34Z"
          transform="translate(-641.679 -104.545)"
          fill="#2f2e41"
        />
        <ellipse
          id="Ellipse_45"
          data-name="Ellipse 45"
          cx="10.224"
          cy="39.873"
          rx="10.224"
          ry="39.873"
          transform="matrix(-0.842, -0.54, 0.54, -0.842, 436.261, 378.133)"
          fill="#3f3d56"
        />
      </motion.svg>
    </Box>
  );
};

export default SearchHeroImage;
