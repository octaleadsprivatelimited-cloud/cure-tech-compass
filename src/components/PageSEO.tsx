import { Helmet } from "react-helmet-async";

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
}

const PageSEO = ({ title, description, path }: PageSEOProps) => (
  <Helmet>
    <title>{`${title} | Cure Tech Pharma`}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={`https://www.curetechpharma.in${path}`} />
    <meta property="og:title" content={`${title} | Cure Tech Pharma`} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`https://www.curetechpharma.in${path}`} />
  </Helmet>
);

export default PageSEO;