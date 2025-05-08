import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Optional — you can add Open Graph or Twitter meta tags too */}
    </Helmet>
  );
};

export default SEO;
