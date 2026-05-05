import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animations";

const indiaOffices = [
  {
    city: "Mumbai",
    address: "902, 'A' Wing, Times Square, Andheri-Kurla Road, Marol, Andheri (East), Mumbai 400 059",
    phone: "+91 22-6222-6222",
  },
  {
    city: "Ahmedabad",
    address: "D21 The Address, True Value West Gate, SG highway, Ahmedabad 380 009",
    phone: "+91 7940227900",
  },
  {
    city: "Bengaluru",
    address: "205, 2nd floor, Connection point H.A.L Airport Exit Road, Bangalore 560 017",
    phone: "+91 80-4112-5590",
  },
  {
    city: "Chennai",
    address: "Flat no.A1, 1st floor, No 24 Vembuli Amman koil Street, Palavanthangal Chennai- 600 114",
    phone: "+91-44-22241462/ 1464",
  },
  {
    city: "Delhi",
    address:
      "Penta Freight Pvt. Ltd. Khasra No. 10/1/10/2, 11/5/1, No. 4, Samalkha, Old Delhi – Gurgaon Road, Opposite Primary School, New Delhi – 110 037",
    phone: "+91 11-4078-2222",
  },
  {
    city: "Hyderabad",
    address:
      "G-27 & 28, Cargo Satellite Building, Rajiv Gandhi International Airport, Shamshabad 501 218, Telangana, India",
    phone: "+91 40-2400-4048",
  },
  {
    city: "Kolkata",
    address:
      "131, Jangalpur Road, near airport, Gate No. 3, Motilal Colony, P.O Rajbari, Kolkata 700 081, West Bengal",
    phone: "+91 33-2514-7089",
  },
];

const usaOffice = {
  city: "Chicago",
  address: "Penta Freight Pvt.Ltd 5100 Newport Dr. Sute 4, Rolling Meadows, IL 60008 USA",
  phone: "+040 234 6559 / +224 434 2154",
};

function OfficeCard({ city, address, phone }) {
  return (
    <motion.div variants={fadeInUp}>
      <div className="mb-2 text-[15px] font-semibold text-gray-900">{city}</div>
      <div className="text-[11px] leading-relaxed text-gray-500">{address}</div>
      <div className="mt-2 text-[11px] text-gray-500">{phone}</div>
    </motion.div>
  );
}

export default function OfficesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='420' viewBox='0 0 900 420'%3E%3Cg fill='none' stroke='rgba(17,24,39,0.06)' stroke-width='1'%3E%3Cpath d='M-20 70 C 110 40, 210 95, 340 70 S 560 30, 700 70 S 860 120, 940 80'/%3E%3Cpath d='M-30 110 C 120 80, 230 140, 360 110 S 590 60, 740 110 S 880 165, 960 120'/%3E%3Cpath d='M-40 160 C 140 125, 250 185, 390 160 S 630 115, 780 160 S 905 210, 980 170'/%3E%3Cpath d='M-50 210 C 150 175, 270 235, 420 210 S 660 165, 820 210 S 930 260, 1010 220'/%3E%3Cpath d='M-60 260 C 170 225, 290 290, 450 260 S 700 215, 860 260 S 955 310, 1030 270'/%3E%3Cpath d='M-70 310 C 190 275, 320 340, 490 310 S 740 265, 900 310 S 980 360, 1050 320'/%3E%3Cpath d='M-80 360 C 210 325, 350 390, 520 360 S 780 315, 950 360 S 1010 410, 1080 370'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "900px 420px",
          backgroundRepeat: "repeat",
          opacity: 0.4,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-16">
        <motion.div
          className="grid grid-cols-1 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-[28px] font-bold leading-tight text-gray-900">
              Our <span className="text-brand-orange">India</span> Offices
            </h2>
            <p className="mt-3 max-w-[260px] text-[11px] leading-relaxed text-gray-500">
              Penta Freight delivers seamless logistics across India, with branches in key cities
              for your convenience.
            </p>
          </motion.div>

          {indiaOffices.map((o) => (
            <OfficeCard key={o.city} city={o.city} address={o.address} phone={o.phone} />
          ))}
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2 }}
        >
          <div>
            <h2 className="text-[28px] font-bold leading-tight text-gray-900">
              Our <span className="text-brand-orange">USA</span> Office
            </h2>
            <p className="mt-3 max-w-[260px] text-[11px] leading-relaxed text-gray-500">
              Penta Freight has expanded its operations globally, beginning with the USA, to offer
              continuous support across continents.
            </p>
          </div>

          <div className="lg:col-start-2">
            <OfficeCard city={usaOffice.city} address={usaOffice.address} phone={usaOffice.phone} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

