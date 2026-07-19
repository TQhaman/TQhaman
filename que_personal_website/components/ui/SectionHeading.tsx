type SectionHeadingProps = {
  id: string;
  title: string;
};

export default function SectionHeading({ id, title }: SectionHeadingProps) {
  return (
    <h2 id={id} className="section-heading" aria-label={title}>
      <span className="section-heading-mark" aria-hidden="true">
        {"//"}
      </span>
      {title}
    </h2>
  );
}
