export interface LocalizedString {
  fr: string;
  en?: string;
  [key: string]: string | undefined;
}

export interface LocalizedText {
  fr: any[];
  en?: any[];
  [key: string]: any[] | undefined;
}

export interface NavLink {
  _key: string;
  label: LocalizedString;
  href: string;
  order: number;
  enabled: boolean;
}

export interface SocialLink {
  _key: string;
  label: string;
  url: string;
  icon?: string;
}

export interface ThemeColors {
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  backgroundColor?: string;
  textColor?: string;
}

export interface DonorboxConfig {
  iframeUrl?: string;
  campaignId?: string;
  donateHeading?: LocalizedString;
  donateBlurb?: LocalizedText;
}

export interface SiteSettings {
  _id: string;
  _type: 'siteSettings';
  churchName: LocalizedString;
  logo?: {
    asset: {
      _ref: string;
      url?: string;
    };
  };
  navLinks: NavLink[];
  footerText: LocalizedString;
  socialLinks: SocialLink[];
  contactInfo?: {
    address: LocalizedString;
    phone: string;
    email: string;
  };
  theme?: ThemeColors;
  donorbox?: DonorboxConfig;
}

export interface HeroSection {
  _type: 'heroSection';
  _key: string;
  headline: LocalizedString;
  subtext: LocalizedString;
  backgroundImage?: {
    asset: {
      _ref: string;
      url?: string;
    };
  };
  ctaLabel?: LocalizedString;
  ctaUrl?: string;
}

export interface RichTextSection {
  _type: 'richTextSection';
  _key: string;
  content: LocalizedText;
}

export interface TextSection {
  _type: 'textSection';
  _key: string;
  heading?: LocalizedString;
  text: LocalizedString;
}

export interface ServicesGridSection {
  _type: 'servicesGrid';
  _key: string;
  heading?: LocalizedString;
  subheading?: LocalizedString;
}

export interface MinistriesGridSection {
  _type: 'ministriesGrid';
  _key: string;
  heading?: LocalizedString;
  subheading?: LocalizedString;
}

export interface EventsTeaserSection {
  _type: 'eventsTeaser';
  _key: string;
  heading?: LocalizedString;
  subheading?: LocalizedString;
  limit?: number;
}

export interface ContactSection {
  _type: 'contactSection';
  _key: string;
  heading?: LocalizedString;
  showMap?: boolean;
}

export type PageSection =
  | HeroSection
  | RichTextSection
  | TextSection
  | ServicesGridSection
  | MinistriesGridSection
  | EventsTeaserSection
  | ContactSection;

export interface Page {
  _id: string;
  _type: 'page';
  title: LocalizedString;
  slug: string;
  sections: PageSection[];
  seo?: {
    metaDescription?: LocalizedString;
  };
}

export interface Event {
  _id: string;
  _type: 'event';
  title: LocalizedString;
  description: LocalizedString;
  startDateTime: string;
  endDateTime?: string;
  location?: LocalizedString;
  image?: {
    asset: {
      _ref: string;
      url?: string;
    };
  };
  eventType?: 'upcoming' | 'recurring' | 'annual' | 'camp';
  cost?: LocalizedString;
  registrationInfo?: LocalizedString;
  order?: number;
}

export interface Service {
  _id: string;
  _type: 'service';
  title: LocalizedString;
  description: LocalizedString;
  dayTime: string;
  order: number;
}

export interface Ministry {
  _id: string;
  _type: 'ministry';
  title: LocalizedString;
  description: LocalizedString;
  image?: {
    asset: {
      _ref: string;
      url?: string;
    };
  };
  order: number;
}

export interface TeamMember {
  _id: string;
  _type: 'teamMember';
  name: string;
  role: LocalizedString;
  bio: LocalizedString;
  photo?: {
    asset: {
      _ref: string;
      url?: string;
    };
  };
  order: number;
}
