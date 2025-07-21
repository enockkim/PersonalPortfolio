import { GraduationCap, Award } from "lucide-react";

export function EducationSection() {
  const certifications = [
    // {
    //   title: "Kubernetes & Cloud Native Essentials",
    //   organization: "Linux Foundation"
    // },
    {
      title: "PRINCE2 Project Management",
      organization: "Leanovate"
    },
    {
      title: "Google Project Management",
      organization: "Coursera"
    },
    {
      title: "Microsoft Entry-Level Software Development",
      organization: "Liquid Intelligent Technologies"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education & Certifications</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">My academic background and professional development</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Education</h3>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <div className="flex items-start">
                <GraduationCap className="w-8 h-8 text-primary-600 dark:text-primary-400 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Bachelor of Science in Computer Science</h4>
                  <a href="https://www.seku.ac.ke/" target="_blank" className="text-lg text-primary-600 dark:text-primary-400 font-medium">South Eastern Kenya University</a>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Comprehensive computer science education covering software development, algorithms, 
                    data structures, and system design fundamentals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <div className="flex items-start">
                    <Award className="w-6 h-6 text-primary-600 dark:text-primary-400 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{cert.title}</h4>
                      <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">{cert.organization}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
