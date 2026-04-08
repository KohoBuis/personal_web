import React, { useState } from 'react';
import { ExternalLink, Layers } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { mockData } from '../mock';

const Projects = () => {
  const [filter, setFilter] = useState('Tous');

  const categories = ['Tous', ...new Set(mockData.projects.map(p => p.category))];

  const filteredProjects = filter === 'Tous' 
    ? mockData.projects 
    : mockData.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Mes{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projets
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez mes réalisations dans le domaine des systèmes embarqués, de l'IoT et du développement mobile
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'outline'}
              onClick={() => setFilter(category)}
              className={`
                transition-all duration-300
                ${filter === category 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 shadow-lg shadow-cyan-500/50' 
                  : 'border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400'
                }
              `}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-slate-950/50 border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Layers className="w-16 h-16 text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors duration-300" />
                </div>
                <div className="absolute top-3 right-3">
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <Badge variant="outline" className="w-fit text-xs border-blue-500/30 text-blue-400">
                  {project.category}
                </Badge>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-cyan-400 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 group"
                >
                  Voir plus
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;