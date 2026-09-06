import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { founder } from "@/data/team";

export function Team() {
  return (
    <section id="team" className="scroll-mt-20 bg-paper">
      <Container className="py-20 md:py-28 lg:py-32">
        <SectionHeader
          index="10"
          eyebrow="The founder"
          title="The founder behind the work."
          description="SunshineSoftware is led by Founder Ashwini Nalawade — building technology, mentoring learners and supporting research and patent work with integrity."
        />

        <Reveal className="mt-14">
          <div className="grid gap-5 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden border border-line bg-surface">
                <Image
                  src={founder.image}
                  alt={`${founder.name}, ${founder.role} of SunshineSoftware`}
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center border border-line bg-white p-7 sm:p-10 lg:col-span-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-terracotta">
                {founder.role}
              </p>
              <h3 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {founder.name}
              </h3>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
                {founder.bio}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}