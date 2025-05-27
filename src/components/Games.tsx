
import React from 'react';
import { gamepad } from 'lucide-react';

const Games = () => {
  const games = [
    {
      title: "The Darjeeling Limited Express",
      description: "A train journey simulation where players navigate family relationships across the Indian countryside.",
      platform: "Web / Mobile",
      status: "Released",
      color: "wes-mustard",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      title: "Fantastic Mr. Fox's Heist",
      description: "A strategic puzzle game about outsmarting farmers and protecting the underground animal community.",
      platform: "PC / Console",
      status: "In Development", 
      color: "wes-coral",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    },
    {
      title: "Isle of Dogs Adventure",
      description: "An exploration game set in a dystopian future where dogs have been exiled to a trash island.",
      platform: "Mobile",
      status: "Concept",
      color: "wes-sage",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="games" className="py-20 bg-wes-sage">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl font-bold text-wes-navy mb-4">
            Games
          </h2>
          <div className="w-16 h-1 bg-wes-burgundy mx-auto"></div>
          <p className="font-sans text-xl text-wes-navy mt-6 max-w-2xl mx-auto">
            Whimsical interactive experiences that capture the storytelling magic and visual precision of cinema.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {games.map((game, index) => (
            <div key={index} className={`bg-${game.color} border-4 border-wes-navy shadow-lg hover:shadow-xl transition-all duration-300 group`}>
              <div className="aspect-video overflow-hidden border-b-4 border-wes-navy">
                <img 
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 text-xs font-sans font-bold text-white ${
                    game.status === 'Released' ? 'bg-green-600' : 
                    game.status === 'In Development' ? 'bg-yellow-600' : 'bg-gray-600'
                  }`}>
                    {game.status}
                  </span>
                  <span className="text-sm font-sans text-wes-navy">
                    {game.platform}
                  </span>
                </div>
                
                <h3 className="font-serif text-xl font-bold text-wes-navy mb-3">
                  {game.title}
                </h3>
                
                <p className="font-sans text-wes-navy leading-relaxed mb-4">
                  {game.description}
                </p>
                
                <button className="w-full bg-wes-navy text-white font-sans font-medium py-3 px-4 hover:bg-wes-burgundy transition-colors duration-300 flex items-center justify-center space-x-2">
                  {/* <gamepad size={16} /> */}
                  <span>Play Game</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white border-4 border-wes-burgundy p-8 inline-block shadow-lg">
            <h3 className="font-serif text-2xl font-bold text-wes-navy mb-4">
              Game Development Philosophy
            </h3>
            <p className="font-sans text-wes-navy leading-relaxed max-w-lg">
              "Like a perfectly composed shot, every game mechanic serves the story, and every pixel is placed with intention."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;
