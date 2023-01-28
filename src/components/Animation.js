const containerVarients = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      when: "beforeChildren",
    },
  },
};

const fadeUp = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};

// const circleAnimation = {
//   hidden: {
//     strokeDasharray: "0px"
//   },
//   visible: {
//      strokeDasharray: "0.px"
//   }
// };

export { containerVarients, fadeUp };
