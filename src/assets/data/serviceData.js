import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { RiSecurePaymentLine, RiExchangeDollarFill } from "react-icons/ri";
const serviceData = [
  {
    icon: <FaShippingFast />,
    title: "Free Shipping",
    subtitle: "We provide Free Shipping Services all over the world on the Average value 5000rs.",
    bg: "#fdefe6",
  },
  {
    icon: <GiReturnArrow />,
    title: "Easy Returns",
    subtitle: "Bring your item(s) along with the packing slip or receipt you will get Free Returns.",
    bg: "#ceebe9",
  },
  {
    icon: <RiSecurePaymentLine />,
    title: "Secure Payment",
    subtitle: "We Provide Secure Payment Services and Different Methods of Payment.",
    bg: "#e2f2b2",
  },
  {
    icon: <RiExchangeDollarFill />,
    title: " Back Guarantee",
    subtitle: "We Refund the Amount After Processing of Investigation of Return Product.",
    bg: "#d6e5fb",
  },
];

export default serviceData;
