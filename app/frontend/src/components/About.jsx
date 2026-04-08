import React from 'react';
import { Lightbulb, Target, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { mockData } from '../mock';

const About = () => {
  const highlights = [
    {
      icon: Lightbulb,
      title: "Innovation",
      content: mockData.about.story
    },
    {
      icon: Target,
      title: "Mission",
      content: mockData.about.mission
    },
    {
      icon: Heart,
      title: "Personnalité",
      content: mockData.about.personality
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            À Propos de{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Moi
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {mockData.stats.map((stat, index) => (
            <Card key={index} className="bg-slate-900/50 border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.value}+
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="bg-slate-900/50 border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-block p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.content}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Mes Valeurs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockData.values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-cyan-500/20 rounded-lg backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-cyan-400 mb-2">{value.title}</h4>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;