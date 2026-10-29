// Scene 3: Dashboard Solution (12-21s, 270 frames)
// Show the centralized dashboard with stats and visual organization

import { AbsoluteFill, useCurrentFrame, interpolate, Easing, spring } from 'remotion';
import { theme } from '../theme';

const STATS = [
  { label: 'Projets actifs', value: '12', icon: '📁', color: theme.colors.primary },
  { label: 'Tâches en cours', value: '48', icon: '✓', color: theme.colors.accent },
  { label: 'Membres', value: '24', icon: '👥', color: theme.colors.primaryLight },
  { label: 'Taux de complétion', value: '87%', icon: '📊', color: theme.colors.primary },
];

export const SceneDashboard: React.FC = () => {
  const frame = useCurrentFrame();

  // Scene fade in
  const sceneOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Title entrance
  const titleY = spring({
    frame: frame - 10,
    fps: 30,
    config: {
      damping: 20,
      stiffness: 100,
    },
  });

  const titleOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Dashboard panel slide in
  const panelProgress = spring({
    frame: frame - 40,
    fps: 30,
    config: {
      damping: 25,
      stiffness: 80,
    },
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${theme.colors.bg} 0%, ${theme.colors.bgLight} 100%)`,
        opacity: sceneOpacity,
      }}
    >
      {/* Title */}
      <div
        style={{
          position: 'absolute',
          top: 120 - titleY * 30,
          left: 960,
          transform: 'translateX(-50%)',
          fontFamily: theme.fonts.main,
          fontSize: 48,
          fontWeight: 700,
          color: theme.colors.primary,
          opacity: titleOpacity,
        }}
      >
        Une vue d'ensemble centralisée
      </div>

      {/* Stats grid */}
      <div
        style={{
          position: 'absolute',
          top: 280,
          left: 960,
          transform: 'translateX(-50%)',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 400px)',
          gap: 32,
          opacity: interpolate(panelProgress, [0, 1], [0, 1]),
        }}
      >
        {STATS.map((stat, i) => {
          const cardDelay = 60 + i * 12;
          const cardProgress = spring({
            frame: frame - cardDelay,
            fps: 30,
            config: {
              damping: 20,
              stiffness: 100,
            },
          });

          return (
            <div
              key={i}
              style={{
                background: theme.colors.bgLight,
                borderRadius: 20,
                padding: 32,
                boxShadow: `0 8px 24px rgba(107, 53, 107, ${0.12 * cardProgress})`,
                border: `2px solid ${stat.color}20`,
                transform: `scale(${cardProgress}) translateY(${(1 - cardProgress) * 20}px)`,
                opacity: cardProgress,
              }}
            >
              <div
                style={{
                  fontSize: 48,
                  marginBottom: 16,
                }}
              >
                {stat.icon}
              </div>
              <div
                style={{
                  fontFamily: theme.fonts.main,
                  fontSize: 48,
                  fontWeight: 800,
                  color: stat.color,
                  marginBottom: 8,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: theme.fonts.main,
                  fontSize: 18,
                  fontWeight: 500,
                  color: theme.colors.textLight,
                }}
              >
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart representation */}
      <div
        style={{
          position: 'absolute',
          bottom: 120,
          left: 960,
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 16,
          alignItems: 'flex-end',
          opacity: interpolate(frame, [180, 210], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      >
        {[40, 65, 55, 80, 70, 90, 85].map((height, i) => {
          const barProgress = spring({
            frame: frame - 180 - i * 3,
            fps: 30,
            config: {
              damping: 18,
              stiffness: 100,
            },
          });

          return (
            <div
              key={i}
              style={{
                width: 50,
                height: height * barProgress * 2,
                background: `linear-gradient(180deg, ${theme.colors.accent} 0%, ${theme.colors.primary} 100%)`,
                borderRadius: '8px 8px 0 0',
                opacity: barProgress,
              }}
            />
          );
        })}
      </div>

      {/* Bottom caption */}
      <div
        style={{
          position: 'absolute',
          bottom: 60,
          left: 960,
          transform: 'translateX(-50%)',
          fontFamily: theme.fonts.main,
          fontSize: 20,
          fontWeight: 500,
          color: theme.colors.textLight,
          opacity: interpolate(frame, [220, 240], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      >
        Suivez l'évolution de vos projets en temps réel
      </div>
    </AbsoluteFill>
  );
};
