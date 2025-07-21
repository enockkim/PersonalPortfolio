import { Code, Settings, Database, Lightbulb } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      skills: ["C#", "Java", ".NET Core", "Spring Boot", "JavaScript", "Angular", "React", "Node.js"]
    },
    {
      title: "Tools",
      icon: Settings,
      skills: ["Docker", "Kubernetes", "Git", "RabbitMQ", "GSuite", "Teams"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "SQL Server", "Oracle"]
    },
    {
      title: "Concepts",
      icon: Lightbulb,
      skills: ["RESTful APIs", "gRPC", "SOAP", "DevOps", "Agile", "TDD"]
    }
  ];

  const getSkillColor = (skill: string, index: number) => {
    const colors = [
      "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
      "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">My technical expertise across various domains</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={category.title} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getSkillColor(skill, skillIndex)}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
