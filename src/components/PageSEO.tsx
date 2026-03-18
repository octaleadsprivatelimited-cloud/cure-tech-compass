import { Helmet } from "react-helmet-async";

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  imagePath?: string;
  robots?: string;
}

const SITE_NAME = "Cure Tech Pharma";
const SITE_URL = "https://www.curetechpharma.in";
const DEFAULT_IMAGE_PATH = "/favicon.png";
const DEFAULT_KEYWORDS = [
  "pharmaceutical distributor",
  "wholesale medicines",
  "pharma supplier India",
  "Hyderabad pharma",
  "bulk medicine supplier",
  "healthcare products",
  "Cure Tech Pharma",
];

const PageSEO = ({
  title,
  description,
  path,
  keywords = DEFAULT_KEYWORDS,
  imagePath = DEFAULT_IMAGE_PATH,
  robots = "index, follow",
}: PageSEOProps) => {
  const canonical = `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;
  const image = imagePath.startsWith("http") ? imagePath : `${SITE_URL}${imagePath}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />

      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default PageSEO;