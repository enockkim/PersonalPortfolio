import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Telegram Mpesa Bot",
      description: "A Telegram bot that notifies schools in real-time when fee payments are made via Mpesa Paybill. Designed to support finance managers and school admins with real-time transaction visibility.",
      image: "https://files.prema.co.ke/portfolio/telegram_bot.png",
      tech: [".NET", "Telegram Bot API"],
      github: "#",
      category: "Bots"
    },
    {
      title: "Price Harbour",
      description: "A smart platform that enables users to search and compare products across multiple e-commerce websites from one place. Includes a chatbot to assist with product queries.",
      features: [
        "Web crawling and price comparison",
        "Chatbot integration"
      ],
      image: "https://files.prema.co.ke/portfolio/price_harbour_home.jpg",
      tech: ["Node.js", "JavaScript", "React", ".NET"],
      github: "#",
      category: "Web"
    },
    {
      title: "ShuleOne",
      description: "An all-in-one school management system for handling academics, finance, asset management, and more. Built to streamline school operations and improve administrative efficiency.",
      image: "https://files.prema.co.ke/portfolio/shule_one.png",
      tech: ["Angular", "TypeScript", ".NET APIs"],
      github: "https://github.com/PREMA-LTD/Prema.ShuleOne.Web",
      category: "Angular"
    },
    {
      title: "ChamaOne – Group Finance Tracker",
      description: "A group finance management app designed for self-help groups, chamas, and CBOs. Streamlines financial operations and member management.",
      features: [
        "Monthly contribution tracking",
        "Loan distribution and repayment management",
        "Project tracking and bulk SMS reminders"
      ],
      image: "https://files.prema.co.ke/portfolio/chama_one_home.png",
      tech: [".NET", "Angular", "SMS Integration"],
      github: "https://github.com/PREMA-LTD/Prema.ChamaOne",
      category: ".NET"
    }
  ];

  const filters = ["All", ".NET", "Angular", "React", "Bots"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => 
        project.category === activeFilter || 
        project.tech.some(tech => tech.includes(activeFilter))
      );

  const getTechColor = (tech: string) => {
    const colorMap: Record<string, string> = {
      ".NET": "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      "Angular": "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      "Node.js": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      "JavaScript": "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
      "TypeScript": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "default": "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
    };
    return colorMap[tech] || colorMap.default;
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Some of my notable work and contributions</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "secondary"}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                activeFilter === filter
                  ? "bg-primary-600 text-white hover:bg-primary-700"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                {project.features && (
                  <ul className="text-sm text-gray-600 dark:text-gray-400 mb-4 list-disc list-inside">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded text-sm ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.github}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
