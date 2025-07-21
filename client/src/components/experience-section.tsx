export function ExperienceSection() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "White Label Tracking",
      period: "2021 – Present",
      description: "Part of IoT SaaS backend development, creating scalable microservices, and developing video telematics solutions. Part of developing microservices architecture and API design for scalable tracking platform.",
      technologies: ["IoT", "Docker", "C#", "Microservices", "RabbitMQ", "Java"],
      isLeft: true
    },
    {
      title: "Software Developer",
      company: "Kenya Revenue Authority",
      period: "2020 – 2021",
      description: "Developed and maintained the integrated Customs Management System (iCMS), created dashboards for tax collection analytics, and worked with Spring MVC framework and Oracle Database for critical government systems.",
      technologies: ["Spring MVC", "Oracle DB", "Java", "Dashboards"],
      isLeft: false
    },
    {
      title: "IT Support Specialist",
      company: "Kabarak University",
      period: "2018",
      description: "Managed e-learning system operations and supported digital transformation initiatives. Provided technical support and system administration for educational technology platforms.",
      technologies: ["E-learning", "System Admin", "Digitization"],
      isLeft: true
    }
  ];

  const getTechColor = (tech: string) => {
    const colorMap: Record<string, string> = {
      "IoT": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "Docker": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "gRPC": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      "Microservices": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      "Spring MVC": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      "Oracle DB": "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      "Dashboards": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "E-learning": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      "System Admin": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "Digitization": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
    };
    return colorMap[tech] || "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200";
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">My professional journey and key contributions</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-primary-200 dark:bg-primary-800"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col ${exp.isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center`}>
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
                <div className={`ml-12 md:ml-0 md:w-1/2 ${exp.isLeft ? 'md:pr-8' : 'md:pl-8'} ${!exp.isLeft ? 'mb-4 md:mb-0' : ''}`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400">{exp.period}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-2">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">{exp.company}</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 rounded text-sm ${getTechColor(tech)}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
