import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="pt-20 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Enock Kimutai Sang
          </h1>
          <h2 className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 font-semibold mb-4">
            Backend Software Engineer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Building resilient cloud-native systems and smart automation tools.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            I'm a highly skilled backend engineer proficient in C#, Java, .NET, and Spring. I focus on high-quality code, API design, DevOps, and scalable backend systems, with a passion for team leadership and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToProjects}
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <a
              href="https://files.prema.co.ke/portfolio/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
            <Button
              variant="outline"
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
            <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
          </a>

          </div>
        </div>
      </div>
    </section>
  );
}
