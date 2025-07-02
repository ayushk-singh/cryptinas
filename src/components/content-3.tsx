import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ContentSection() {
  return (
    <section className="mt-75">
      <div className="mx-auto max-w-5xl space-y-8 px-4 md:space-y-12">
        <img
          className="rounded-(--radius) grayscale"
          src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=2747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="team image"
          height=""
          width=""
          loading="lazy"
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-medium">About "Cryptinas - A National Level Technical Symposium"</h2>
          <div className="space-y-6">
            <p>
              Cryptinas is the flagship department event organized by the BCA
              Department, celebrating the vibrant intersection of creativity and
              technology. Designed to inspire innovation and collaboration among
              budding computer science enthusiasts, Cryptinas brings together
              students through a series of tech-driven competitions, workshops,
              and showcases. From coding battles and hackathons to design
              sprints and fun challenges, the event highlights the spirit of
              problem-solving and modern digital thinking.</p>

            <Button
              asChild
              variant="secondary"
              size="sm"
              className="gap-1 pr-1.5"
            >
              <Link href="#">
                <span>Learn More</span>
                <ChevronRight className="size-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
