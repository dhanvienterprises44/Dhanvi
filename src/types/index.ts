export type PropertyType = 'all' | 'residential' | 'villa' | 'commercial' | 'plot';

export type PropertyPurpose = 'all' | 'buy' | 'rent' | 'investment';

export interface PropertyListing {
  id: string;
  title: string;
  type: 'residential' | 'villa' | 'commercial' | 'plot';
  typeLabel: string;
  location: string;
  localityArea: string;
  city: string;
  priceDisplay: string;
  priceNote: string;
  areaSqFt: string;
  bedrooms?: string;
  bathrooms?: string;
  furnishing?: string;
  possessionStatus: string;
  image: string;
  description: string;
  highlights: string[];
  features: string[];
  isFeatured?: boolean;
  isPlaceholderNotice: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  propertyType: string;
  preferredLocality: string;
  budgetRange: string;
  message: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  clientLabel: string;
  roleOrLocation: string;
  propertyInterest: string;
  feedbackText: string;
  placeholderNotice: string;
}
