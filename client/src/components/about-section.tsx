export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Get to know more about my background and interests</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src= "https://files.prema.co.ke/portfolio/profile.jpeg"
              alt="Enock Kimutai Sang" 
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                With extensive experience at <strong>White Label Telematics and other organizations</strong>, I've specialized in building IoT platforms, 
                developing microservices, integreating device protocols, and developing video telematics solutions. 
                My expertise spans across modern backend technologies and cloud-native architectures.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                My technical strengths include <strong>C#</strong>, <strong>Java</strong>, <strong>.NET</strong>, 
                <strong>Spring</strong>, microservices architecture, and SQL databases. I'm passionate about 
                writing clean, maintainable code and designing robust applications that scale.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me gaming or biking, activities that help me stay creative 
                and maintain a healthy work-life balance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
