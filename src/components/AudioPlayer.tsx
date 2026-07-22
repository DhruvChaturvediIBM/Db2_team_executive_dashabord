import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  const toggleSound = () => {
    if (!isPlaying) {
      startAmbientSound();
    } else {
      stopAmbientSound();
    }
  };

  const startAmbientSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.value = 0.06; // Light background level
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Harmony frequencies
      const frequencies = [130.81, 196.00, 246.94, 329.63, 587.33];
      const newOscillators: OscillatorNode[] = [];

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.value = freq;

        lfo.frequency.value = 0.1 + idx * 0.05;
        lfoGain.gain.value = 0.5;
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);

        osc.connect(masterGain);
        osc.start();
        lfo.start();

        newOscillators.push(osc, lfo);
      });

      oscillatorsRef.current = newOscillators;
      setIsPlaying(true);
    } catch {
      console.warn('Web Audio API not supported');
    }
  };

  const stopAmbientSound = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.5);
      setTimeout(() => {
        oscillatorsRef.current.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {
            // ignore
          }
        });
        oscillatorsRef.current = [];
        if (audioCtxRef.current) {
          audioCtxRef.current.close();
          audioCtxRef.current = null;
        }
        setIsPlaying(false);
      }, 500);
    } else {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      stopAmbientSound();
    };
  }, []);

  return (
    <button
      id="ambient-sound-toggle"
      onClick={toggleSound}
      className={`relative group flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all duration-200 ${
        isPlaying
          ? 'bg-blue-100 border-blue-300 text-[#0f62fe] shadow-sm'
          : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
      }`}
      title={isPlaying ? 'Mute Ambient Vibe' : 'Play Ambient Vibe Soundscape'}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-4 h-4 text-[#0f62fe] animate-pulse" />
          <span className="hidden sm:inline font-mono">Ambient</span>
          <span className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 h-full bg-[#0f62fe] animate-[bounce_1s_infinite_100ms]" />
            <span className="w-0.5 h-2/3 bg-blue-400 animate-[bounce_1s_infinite_200ms]" />
            <span className="w-0.5 h-full bg-[#0f62fe] animate-[bounce_1s_infinite_300ms]" />
          </span>
        </>
      ) : (
        <>
          <VolumeX className="w-4 h-4 text-slate-500 group-hover:text-slate-800" />
          <span className="hidden sm:inline font-mono text-slate-600">Soundscape</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
        </>
      )}
    </button>
  );
};
