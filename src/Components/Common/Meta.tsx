import { Helmet } from "react-helmet";

type LocalesType = {
  en: "en_US";
  ko: "ko_KR";
};

const locales: LocalesType = {
  en: "en_US",
  ko: "ko_KR",
};

interface MetaProps {
  data: {
    locale: "en" | "ko";
    title: string;
    description: string;
    image?: string;
    canonical?: string;
    type?: string;
    width?: string;
    height?: string;
  };
}

const Meta = ({ data }: MetaProps) => {
  const lang: string = locales[data.locale] || locales["en"];
  const title = data.title;
  const description = data.description;
  const image = data.image !== undefined && `${data.image}`;
  const canonical = `https://k-mas.org/${data.canonical}`;
  const type = data.type === undefined ? "website" : data.type;
  const width: string | undefined = data.image && (data.width || "1200");
  const height: string | undefined = data.image && (data.height || "630");

  return (
    <Helmet titleTemplate="%s">
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      {image ? <link rel="image_src" href={image} /> : null}
      {image ? <meta itemProp="image" content={image} /> : null}

      <meta property="og:site_name" content="k-mas" />
      <meta property="og:title" content={title} />
      {description ? (
        <meta property="og:description" content={description} />
      ) : null}
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      <meta property="og:locale" content={lang} />
      <meta property="og:type" content={type} />
      {image ? <meta property="og:image" content={image} /> : null}
      {width ? <meta property="og:image:width" content={width} /> : null}
      {height ? <meta property="og:image:height" content={height} /> : null}
      <meta property="fb:pages" content="k-mas" />

      {/* change type of twitter if there is no image? */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description ? (
        <meta name="twitter:description" content={description} />
      ) : null}
      {image ? <meta name="twitter:image" content={image} /> : null}
      <meta name="twitter:site" content="@k-mas" />
      {canonical ? (
        <link rel="alternate" href={data.canonical} hrefLang={lang} />
      ) : null}
    </Helmet>
  );
};

export default Meta;
