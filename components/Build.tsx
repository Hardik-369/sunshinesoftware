import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceList } from "@/components/ServiceList";
import { services } from "@/data/services";

export function Build() {
  return (
    <section id="build" className="scroll-mt-20 bg-white">
      <Container className="py-20 md:py-28 lg:py-32">
        <SectionHeader
          index="04"
          eyebrow="Build"
          title="From concept to production."
          description="Software should solve a problem, not just demonstrate technology. We design, engineer, test and deploy products that earn their place in production."
        />
        <div className="mt-14">
          <ServiceList services={services} />
        </div>
      </Container>
    </section>
  );
}