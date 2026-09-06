import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/Badge";
import { CourseCard } from "@/components/CourseCard";
import { courseCategories, courses } from "@/data/courses";

export function Courses() {
  return (
    <section id="courses" className="scroll-mt-20 bg-paper">
      <Container className="py-20 md:py-28 lg:py-32">
        <SectionHeader
          index="03"
          eyebrow="Courses"
          title="Learn the skills the industry actually uses."
          description="Six project-based courses, each ending with something built. Fees and schedules are confirmed per cohort — we don't publish numbers we can't stand behind."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {courseCategories.map((category) => (
            <Badge key={category}>{category}</Badge>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} delay={(i % 3) * 0.06} />
          ))}
        </div>

        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.14em] text-secondary">
          No invented numbers — pricing, ratings and placement data are only
          published when verified.
        </p>
      </Container>
    </section>
  );
}