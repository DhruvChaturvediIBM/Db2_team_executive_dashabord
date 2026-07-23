import React, { useEffect, useState } from 'react';
import { Heart, Sparkles, Award, Users } from 'lucide-react';

const HONOREES = [
  {
    name: 'Gaurav',
    avatarUrl: '/IBM DB2 TECH IMAGES/Gaurav_image.jpeg',
    color: 'from-blue-500 via-indigo-500 to-purple-600',
    ring: 'ring-blue-400',
    glow: 'shadow-blue-400/50',
    delay: 0,
  },
  {
    name: 'Deepak',
    avatarUrl: '/IBM DB2 TECH IMAGES/Deepak.jpeg',
    color: 'from-emerald-500 via-teal-500 to-cyan-600',
    ring: 'ring-emerald-400',
    glow: 'shadow-emerald-400/50',
    delay: 200,
  },
  {
    name: 'Satya',
    avatarUrl: '/IBM DB2 TECH IMAGES/Satya_image.jpeg',
    color: 'from-amber-500 via-orange-500 to-rose-500',
    ring: 'ring-amber-400',
    glow: 'shadow-amber-400/50',
    delay: 400,
  },
];

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  animDuration: `${3 + Math.random() * 4}s`,
  animDelay: `${Math.random() * 4}s`,
  size: Math.random() > 0.5 ? 'w-2 h-2' : 'w-1.5 h-1.5',
  color: ['bg-blue-400', 'bg-purple-400', 'bg-amber-400', 'bg-pink-400', 'bg-emerald-400', 'bg-indigo-400'][
    Math.floor(Math.random() * 6)
  ],
}));

export const SpecialThanksPanel: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState([false, false, false]);
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 100);
    const t2 = setTimeout(() => setCardsVisible([true, false, false]), 500);
    const t3 = setTimeout(() => setCardsVisible([true, true, false]), 800);
    const t4 = setTimeout(() => setCardsVisible([true, true, true]), 1100);
    const t5 = setTimeout(() => setPulse(true), 1400);
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
  }, []);

  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-start overflow-hidden animate-in fade-in duration-500 py-8 px-4">

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className={`absolute bottom-0 ${p.size} ${p.color} rounded-full opacity-0 pointer-events-none`}
          style={{
            left: p.left,
            animation: `floatUp ${p.animDuration} ${p.animDelay} ease-in infinite`,
          }}
        />
      ))}

      {/* Hero heading */}
      <div
        className="text-center space-y-4 z-10 transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
      >
        <div className="flex items-center justify-center gap-3">
          <Sparkles className="w-6 h-6 text-amber-400 animate-spin" style={{ animationDuration: '3s' }} />
          <span className="px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-black uppercase tracking-widest shadow-lg">
            From the IBM Db2 Lucknow Team
          </span>
          <Sparkles className="w-6 h-6 text-amber-400 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
        </div>

        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none"
          style={{
            background: 'linear-gradient(135deg, #0f62fe 0%, #6366f1 40%, #a855f7 70%, #f59e0b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          A Special Thanks
        </h1>

        <div className="flex items-center justify-center gap-2">
          <Heart
            className={`w-7 h-7 text-rose-500 fill-rose-500 transition-transform duration-300 ${pulse ? 'scale-125' : 'scale-100'}`}
            style={{ animation: pulse ? 'heartbeat 1.2s ease-in-out infinite' : 'none' }}
          />
          <p className="text-base sm:text-lg text-slate-600 font-semibold">
            For the unwavering support, mentorship &amp; belief in our team
          </p>
          <Heart
            className="w-7 h-7 text-rose-500 fill-rose-500"
            style={{ animation: pulse ? 'heartbeat 1.2s ease-in-out infinite 0.3s' : 'none' }}
          />
        </div>
      </div>

      {/* Honoree Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl z-10">
        {HONOREES.map((h, idx) => (
          <div
            key={h.name}
            className="transition-all duration-700"
            style={{
              opacity: cardsVisible[idx] ? 1 : 0,
              transform: cardsVisible[idx] ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.92)',
            }}
          >
            <div
              className={`relative rounded-3xl p-px bg-gradient-to-br ${h.color} shadow-2xl ${h.glow}`}
              style={{ boxShadow: cardsVisible[idx] ? `0 0 40px 8px var(--tw-shadow-color)` : 'none' }}
            >
              <div className="rounded-3xl bg-white p-7 text-center space-y-5 relative overflow-hidden">
                <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${h.color} opacity-10 blur-2xl pointer-events-none`} />

                {/* Avatar photo */}
                <div
                  className={`mx-auto w-24 h-24 rounded-2xl ring-4 ${h.ring} shadow-xl overflow-hidden`}
                  style={{ animation: cardsVisible[idx] ? `wobble 3s ease-in-out ${h.delay}ms infinite` : 'none' }}
                >
                  <img
                    src={h.avatarUrl}
                    alt={h.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{h.name}</h2>
                </div>

                {/* Thank You badge */}
                <div className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-gradient-to-r ${h.color} text-white text-xs font-black shadow-md`}>
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Thank You!</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* YouTube Video — preloaded on mount, plays instantly on click */}
      <div
        className="mt-12 w-full max-w-3xl z-10 transition-all duration-700"
        style={{ opacity: cardsVisible[2] ? 1 : 0, transform: cardsVisible[2] ? 'translateY(0)' : 'translateY(20px)' }}
      >
        <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-slate-200/80 bg-black aspect-video">
          <iframe
            src="https://www.youtube.com/embed/TopQNPhvlsY?autoplay=1&loop=1&playlist=TopQNPhvlsY&rel=0&modestbranding=1"
            title="IBM Db2 Lucknow Team Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Bottom message */}
      <div
        className="mt-12 max-w-2xl text-center z-10 space-y-3 transition-all duration-700 delay-700"
        style={{ opacity: cardsVisible[2] ? 1 : 0, transform: cardsVisible[2] ? 'translateY(0)' : 'translateY(20px)' }}
      >
        <div className="flex items-center justify-center gap-2">
          <Award className="w-5 h-5 text-amber-500" />
          <Users className="w-5 h-5 text-[#0f62fe]" />
          <Award className="w-5 h-5 text-amber-500" />
        </div>
        <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
          Your guidance, trust, and continuous support have been the backbone of everything
          the <span className="font-black text-[#0f62fe]">IBM Db2 Lucknow</span> team has achieved.
          We are deeply grateful. 🙏
        </p>
      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0) scale(1); opacity: 0.7; }
          80%  { opacity: 0.4; }
          100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1);    }
          14%       { transform: scale(1.3);  }
          28%       { transform: scale(1);    }
          42%       { transform: scale(1.2);  }
          56%       { transform: scale(1);    }
        }
        @keyframes wobble {
          0%, 100% { transform: rotate(-2deg) scale(1);   }
          50%       { transform: rotate(2deg)  scale(1.05); }
        }
      `}</style>
    </div>
  );
};
