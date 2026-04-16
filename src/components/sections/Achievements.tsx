import { motion, useInView } from 'framer-motion';
import { useRef, useState, useCallback, useEffect } from 'react';
import { Trophy } from 'lucide-react';

const achievements = [
  {
    place: '2nd Prize',
    event: 'Chakravyuha 2k26',
    venue: 'JJ College of Engineering, Trichy',
    image: null,
    description: 'Winner of 2nd Prize at Chakravyuha 2k26 Hackathon'
  },
  {
    place: 'Winner',
    event: 'AI Ignite National Hackathon',
    venue: 'Pondicherry',
    image: '/hackathons/aiignite-pondicherry.jpg',
    description: 'Winning moment at AI Ignite, Pondicherry'
  },
  {
    place: 'Winner',
    event: 'Hackathon Win',
    venue: 'Rathinam Engineering College',
    image: '/hackathons/rathinam-coimbatore.png',
    description: 'Winning moment at Rathinam Engineering College, Coimbatore'
  },
  {
    place: '1st Place',
    event: "ThinkFinity '25",
    venue: 'Sriram Engineering College',
    image: '/hackathons/thinkfinity-1st-place.png',
    description: 'Winning moment at ThinkFinity hackathon'
  },
  {
    place: '1st Place',
    event: "QuestInnovate '25",
    venue: 'SRM Vadapalani',
    image: '/hackathons/questinnovate-team-real.jpg',
    description: 'Winning team at QuestInnovate hackathon at SRM Vadapalani'
  },
  {
    place: '1st Place',
    event: "QuestInnovate '25 (Certificate)",
    venue: 'SRM Vadapalani',
    image: '/hackathons/questinnovate-certificate-real.jpg',
    description: 'Certificate of Merit for AI Fake News Detector',
    hidden: true
  },
  {
    place: '2nd Runner-Up',
    event: "InnoThon '25",
    venue: 'KCG College of Technology',
    image: '/hackathons/innothon-2nd-place.jpg',
    description: 'Team Tech Slashers winning ₹10,000 prize'
  },
  {
    place: '1st Place',
    event: 'AI in Digital Marketing Hackathon',
    venue: 'SRM Ramapuram University',
    image: null,
    description: '1st Place at AI in Digital Marketing Hackathon at SRM Ramapuram University'
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section id="achievements" className="section-padding">
      <div className="container-main" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Hackathons & Achievements
          </h2>
          <div className="w-16 h-0.5 bg-gradient-accent mx-auto" />
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.filter(a => !a.hidden).map((achievement, index) => (
            <motion.div
              key={achievement.event}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group p-6 rounded-2xl text-center relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)]"
              style={{
                background: 'linear-gradient(145deg, rgba(20, 28, 45, 0.95) 0%, rgba(12, 16, 28, 0.98) 100%)',
                border: achievement.place.includes('1st')
                  ? '1px solid rgba(0, 255, 255, 0.3)'
                  : '1px solid rgba(251, 191, 36, 0.3)',
              }}
            >
              {/* Glow overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-yellow-500/5" />
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(0,255,255,0.15)]">
                  <Trophy className="w-7 h-7 text-cyan-400 drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]" />
                </div>
                <div className={`text-sm font-bold mb-2 drop-shadow-[0_0_10px_rgba(255,215,0,0.3)] ${achievement.place.includes('1st') ? 'text-cyan-400' : 'text-amber-400'}`}>
                  {achievement.place}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {achievement.event}
                </h3>
                {achievement.venue && (
                  <p className="text-sm text-gray-400">
                    {achievement.venue}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Achievements;
