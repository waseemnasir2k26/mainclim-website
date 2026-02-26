"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Accordion from "@/components/ui/Accordion";
import { faqs } from "@/data/company";

export default function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <Container size="md">
        <SectionTitle
          subtitle="FAQ"
          title="Questions Fréquentes"
          description="Trouvez les réponses aux questions les plus courantes sur nos services de climatisation."
        />

        <Accordion items={faqs} />
      </Container>
    </section>
  );
}
