import { PropertyListing, ServiceItem, TestimonialItem } from '../types';

import heroImg from '../assets/images/hero_bangalore_property_1792049743358.jpg';
import apartmentImg from '../assets/images/property_modern_apartment_1792049743812.jpg';
import villaImg from '../assets/images/property_villa_community_1792049745179.jpg';
import commercialImg from '../assets/images/property_commercial_office_1792049745766.jpg';
import logoImg from '../assets/images/dhanvi_official_logo_1792051749463.jpg';

export const COMPANY_DETAILS = {
  name: 'Dhanvi Enterprises',
  tagline: 'Real Estate Consultant',
  location: 'Bangalore, Karnataka, India',
  phone: '9626368833',
  phoneDisplay: '+91 96263 68833',
  email: 'dhanvienterprises44@gmail.com',
  address: 'Plot No. 104, 1st Cross, Sai Baba (Southern Winds), Near Food Max Hypermarket, Parappana Agrahara Main Road, Bengaluru – 560100.',
  shortAddress: 'Parappana Agrahara Main Road, Bengaluru – 560100',
  landmark: 'Near Food Max Hypermarket & Sai Baba (Southern Winds)',
  pincode: '560100',
  city: 'Bengaluru',
  state: 'Karnataka',
  country: 'India',
  whatsappUrl: 'https://wa.me/919626368833?text=Hello%20Dhanvi%20Enterprises,%20I%20would%20like%20to%20inquire%20about%20property%20services%20in%20Bangalore.',
  officeHours: 'Monday – Sunday: 9:00 AM – 8:00 PM',
  registrationPlaceholder: '[RERA & Agent Registration Placeholder: Verified registration credentials available upon direct request at office]',
  establishedPlaceholder: '[Years in Operation / Milestone Placeholder: Active in Bangalore Real Estate Market]',
};

export const IMAGES = {
  logo: logoImg,
  hero: heroImg,
  apartment: apartmentImg,
  villa: villaImg,
  commercial: commercialImg,
};

export const REPRESENTATIVE_PROPERTIES: PropertyListing[] = [
  {
    id: 'de-prop-01',
    title: 'Modern High-Rise Luxury Apartments',
    type: 'residential',
    typeLabel: 'Residential Apartment',
    location: 'Parappana Agrahara & Kudlu Gate Corridor',
    localityArea: 'South Bengaluru (Off Hosur Road)',
    city: 'Bengaluru',
    priceDisplay: '[Price on Request]',
    priceNote: 'Direct consultation for unit-specific pricing & payment plans',
    areaSqFt: '1,350 – 2,150 sq.ft.',
    bedrooms: '2 & 3 BHK',
    bathrooms: '2 – 3 Baths',
    furnishing: 'Unfurnished / Semi-Furnished Options',
    possessionStatus: 'Ready-to-Move & Ongoing Options',
    image: apartmentImg,
    description: 'Spacious residential apartments with contemporary architecture, large viewing balconies, landscaped podium greens, and seamless connectivity to Electronic City and HSR Layout.',
    highlights: [
      'Proximity to Food Max Hypermarket & Hosur Road corridor',
      'Direct arterial connection to Electronic City Phase 1 & 2',
      'Covered car parking and multi-tier security provisions',
      'Clear title documentation and bank approval readiness'
    ],
    features: ['Lift Access', '24x7 Security', 'Covered Parking', 'Balcony Deck', 'Power Backup'],
    isFeatured: true,
    isPlaceholderNotice: '[Representative Property Portfolio Item · Inquire for live active inventory]'
  },
  {
    id: 'de-prop-02',
    title: 'Exclusive Gated Villa Community',
    type: 'villa',
    typeLabel: 'Independent Luxury Villa',
    location: 'Sarjapur – Electronic City Link Corridor',
    localityArea: 'South-East Bengaluru',
    city: 'Bengaluru',
    priceDisplay: '[Price on Request]',
    priceNote: 'Tailored pricing based on plot size & custom civil finishes',
    areaSqFt: '2,400 – 3,600 sq.ft.',
    bedrooms: '4 BHK Duplex',
    bathrooms: '4 Baths',
    furnishing: 'Customizable Finishes',
    possessionStatus: 'Under Construction / Selected Ready Handover',
    image: villaImg,
    description: 'Independent duplex villas situated in serene residential enclaves featuring private garden terraces, internal paved driveways, wide tree-lined access roads, and tranquil living away from city congestion.',
    highlights: [
      'Independent plot ownership with private boundary wall',
      'Two-vehicle covered car porch and landscaped front lawn',
      'Short driving distance to leading international schools & IT parks',
      'Comprehensive property legal assistance provided by Dhanvi Enterprises'
    ],
    features: ['Private Terrace', 'Private Garden', 'Wide Access Roads', 'Gated Security', 'Independent Borewell/Water'],
    isFeatured: true,
    isPlaceholderNotice: '[Representative Property Portfolio Item · Inquire for live active inventory]'
  },
  {
    id: 'de-prop-03',
    title: 'Grade-A Commercial Office & Retail Space',
    type: 'commercial',
    typeLabel: 'Commercial / Corporate Hub',
    location: 'Parappana Agrahara Main Road & Tech Belt',
    localityArea: 'Bengaluru Tech Corridor',
    city: 'Bengaluru',
    priceDisplay: '[Price on Request]',
    priceNote: 'Lease & Outright Purchase options available upon request',
    areaSqFt: '1,800 – 12,000 sq.ft.',
    furnishing: 'Warm Shell & Bare Shell Options',
    possessionStatus: 'Immediate Occupancy / Fit-out Ready',
    image: commercialImg,
    description: 'High-visibility commercial infrastructure with reflective glass curtain walls, wide frontage on arterial roads, dedicated visitor parking, and high footfall catchment ideal for corporate offices, clinics, or retail showrooms.',
    highlights: [
      'High arterial road frontage with prominent signage visibility',
      'Suitable for software firms, corporate branches, and retail centers',
      'Ample basement and ground-level parking infrastructure',
      'Assistance with commercial lease structuring and documentation'
    ],
    features: ['High-Speed Elevators', 'Double-Height Lobby', '100% DG Backup', 'Fire Safety Compliant', 'Ample Parking'],
    isFeatured: true,
    isPlaceholderNotice: '[Representative Property Portfolio Item · Inquire for live active inventory]'
  },
  {
    id: 'de-prop-04',
    title: 'Approved Residential Plots & Land Layouts',
    type: 'plot',
    typeLabel: 'Residential Land / Layout Plot',
    location: 'Sai Baba Layout & Parappana Agrahara Vicinity',
    localityArea: 'South Bengaluru Developing Corridor',
    city: 'Bengaluru',
    priceDisplay: '[Price on Request]',
    priceNote: 'Competitive per-sq.ft. rates with verified title search',
    areaSqFt: '1,200 – 2,400 sq.ft. (30x40, 30x50, 40x60)',
    possessionStatus: 'Immediate Registration Available',
    image: heroImg,
    description: 'Carefully demarcated residential plots in thriving suburban enclaves. Complete with asphalt blacktop roads, underground drainage, electricity lines, and water connectivity for customized house construction or long-term capital appreciation.',
    highlights: [
      'Clear marketable title deeds and encumbrance verification guidance',
      'Standard dimension configurations: 30x40, 30x50, and 40x60 feet',
      'Located within walking proximity to local markets & transit stops',
      'Full guidance on legal registration, e-Khata, and boundary demarcation'
    ],
    features: ['Clear Title', 'Asphalt Roads', 'Underground Drainage', 'Electricity & Water', 'Bank Loan Approved'],
    isFeatured: true,
    isPlaceholderNotice: '[Representative Property Portfolio Item · Inquire for live active inventory]'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    number: '01',
    title: 'Property Buying Assistance',
    subtitle: 'Residential & Commercial Acquisition',
    description: 'Personalized advisory to find the right property matching your budget, lifestyle, or business requirements across Bangalore. We shortlist verified options, coordinate site visits, and negotiate optimal terms.',
    deliverables: [
      'Tailored property shortlisting based on exact criteria',
      'In-person guided site visits across Bangalore neighborhoods',
      'Pricing assessment and comparative market analysis',
      'Direct facilitation between buyer and genuine sellers'
    ]
  },
  {
    number: '02',
    title: 'Property Selling & Representation',
    subtitle: 'Maximizing Asset Value with Genuine Buyers',
    description: 'Looking to sell your flat, villa, commercial premises, or vacant plot in Bangalore? Dhanvi Enterprises connects your asset with qualified, serious buyers while handling inquiries and property walkthroughs.',
    deliverables: [
      'Local market valuation & pricing strategy advice',
      'Targeted buyer outreach and verified inquiry screening',
      'Professional property viewings coordination',
      'Smooth transaction structuring through to final registration'
    ]
  },
  {
    number: '03',
    title: 'Plots & Land Layout Acquisition',
    subtitle: 'Securing High-Growth Land Parcels',
    description: 'Guidance on purchasing residential and commercial plots in developing Bangalore belts. We assist in verifying plot boundaries, layout sanctions, and road connectivity.',
    deliverables: [
      'Standard dimension residential plots (30x40, 30x50, 40x60)',
      'Verification of layout approvals and physical inspection',
      'Boundary demarcation and site survey coordination',
      'Long-term capital appreciation appraisal'
    ]
  },
  {
    number: '04',
    title: 'Legal Guidance & Title Verification',
    subtitle: 'Clear Encumbrance & Documentation Due Diligence',
    description: 'Property transactions require strict legal scrutiny. We coordinate comprehensive document checks including title search, Encumbrance Certificate (EC) verification, Khata status, and sale deed drafting assistance.',
    deliverables: [
      'Review of mother deeds, title trail, and conversion orders',
      'Encumbrance Certificate (EC) checking guidance',
      'e-Khata verification & property tax receipt validation',
      'Drafting of Sale Agreement and Deed of Absolute Sale'
    ]
  },
  {
    number: '05',
    title: 'Home Loan & Financing Facilitation',
    subtitle: 'Hassle-Free Approvals with Leading Indian Banks',
    description: 'We connect property buyers with trusted nationalized and private banking partners (including SBI, HDFC Bank, ICICI Bank, and Axis Bank) to secure competitive interest rates and seamless loan disbursements.',
    deliverables: [
      'Eligibility assessment and documentation checklist guidance',
      'Direct liaison with home loan officers and valuation engineers',
      'Assistance for salaried individuals, business owners, and NRIs',
      'Expedited loan sanction and disbursement follow-up'
    ]
  },
  {
    number: '06',
    title: 'Site Visits & Locality Evaluation',
    subtitle: 'On-Ground Bangalore Neighborhood Intelligence',
    description: 'Never make a real estate decision without ground truth. Our team arranges structured, accompanied site tours in Parappana Agrahara, Kudlu Gate, Electronic City, HSR Layout, Sarjapur, and surrounding areas.',
    deliverables: [
      'Flexible site visit schedules matching your availability',
      'Transparent walk-through of connectivity, water, and infrastructure',
      'Insight into upcoming civic developments and metro connectivity',
      'Zero-pressure, client-first consultation'
    ]
  }
];

export const PLACEHOLDER_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    clientLabel: 'K. S. R. / Tech Professional',
    roleOrLocation: 'Resident, South Bengaluru',
    propertyInterest: '2 & 3 BHK Apartment Consultation',
    feedbackText: 'Dhanvi Enterprises assisted our family throughout our apartment search near the Parappana Agrahara and Electronic City corridor. Their transparent communication and prompt coordination for site visits made the entire process straightforward.',
    placeholderNotice: '[Client Testimonial Placeholder — Verified Client References Available Upon Request]'
  },
  {
    id: 'test-2',
    clientLabel: 'M. Venkatesh / Investor',
    roleOrLocation: 'Plot Buyer, Bangalore',
    propertyInterest: 'Residential Layout Plot Investment',
    feedbackText: 'Finding clear-title plots in expanding Bangalore zones can be tricky. The team at Dhanvi Enterprises verified document trails, explained road access details clearly, and guided us with genuine integrity.',
    placeholderNotice: '[Client Testimonial Placeholder — Verified Client References Available Upon Request]'
  },
  {
    id: 'test-3',
    clientLabel: 'P. Anand & Family',
    roleOrLocation: 'Bangalore East / South Relocation',
    propertyInterest: 'Villa & Resale Property Advisory',
    feedbackText: 'Very approachable and responsive on both calls and WhatsApp. Having an established local office right near Food Max Hypermarket gives buyers complete confidence when discussing property investments.',
    placeholderNotice: '[Client Testimonial Placeholder — Verified Client References Available Upon Request]'
  }
];

export const BANGALORE_LOCALITIES = [
  'Parappana Agrahara Main Road',
  'Kudlu Gate / Hosur Road',
  'Sai Baba Layout / Southern Winds',
  'Electronic City Phase 1 & 2',
  'HSR Layout & Sector Belts',
  'Sarjapur Road Corridor',
  'Singasandra / Begur Road',
  'Whitefield & Tech Park Vicinity'
];
