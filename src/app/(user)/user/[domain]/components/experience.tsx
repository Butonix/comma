import WorkExperience from "@/components/work-experiences/work-experience";
import type { WorkExperience as _WorkExperience } from "@prisma/client";

export default function WorkExperiences({
  experiences,
  title,
}: {
  title: string;
  experiences: _WorkExperience[];
}) {
  if (!experiences.length) {
    return null;
  }
  return (
    <dl className="section-container not-prose">
      <dt className="section-title">
        <h3>{title}</h3>
      </dt>

      <dd className="section-content">
        {experiences.map((experience) => (
          <WorkExperience experience={experience} key={experience.id} />
        ))}
      </dd>
    </dl>
  );
}
