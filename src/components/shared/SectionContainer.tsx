
import React from "react";
import SectionHeader from "./SectionHeader";

interface SectionContainerProps {
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const SectionContainer = ({
  id,
  className = "",
  title,
  subtitle,
  children,
  fullWidth = false,
}: SectionContainerProps) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 w-full ${className}`}
    >
      <div className={fullWidth ? "w-full" : "container mx-auto px-4 sm:px-6 lg:px-8"}>
        {(title || subtitle) && (
          <SectionHeader title={title || ""} subtitle={subtitle} />
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
