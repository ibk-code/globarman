// ----------- import external deopendencies ------------
import React from "react";
import { Helmet } from "react-helmet";

// ------------- import internal dependencies -------------
import SkipToContent from "../Ally";

interface SkipToContentProps {
  page: string;
  children: React.ReactNode;
  content: string;
  section: string;
  allowSkip?: boolean;
}

function Seo({
  page,
  children,
  content = "Skip to content",
  section = "main",
  allowSkip,
}: SkipToContentProps) {
  return (
    <>
      <Helmet>
        <title>{`GlobarMan - ${page || "Home"}`}</title>
      </Helmet>
      {allowSkip && <SkipToContent content={content} section={section} />}
      {children}
    </>
  );
}

export default Seo;
