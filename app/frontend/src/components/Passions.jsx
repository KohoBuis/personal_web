import React from 'react';
import { Dumbbell, Shield, Plane, Car } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { mockData } from '../mock';

const iconMap = {
  dumbbell: Dumbbell,
  shield: Shield,
  plane: Plane,
  car: Car
};

const Passions = () => {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ce qui me{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Passionne
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Au-delà de la technologie, mes passions reflètent mes valeurs : dépassement, discipline et créativité
          </p>
        </div>

        {/* Passions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockData.passions.map((passion, index) => {
            const Icon = iconMap[passion.icon];
            return (
              <Card
                key={index}
                className="bg-slate-900/50 border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-cyan-500/10 rounded-full border border-cyan-500/30 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{passion.title}</h3>
                  <p className="text-gray-400 text-sm">{passion.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Looking For Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ce que je recherche
              </h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Je suis à la recherche d'opportunités de stage ou de missions professionnelles dans le domaine des systèmes embarqués, de l'IoT et de l'innovation technologique. Si vous avez un projet ambitieux, parlons-en !
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Passions;