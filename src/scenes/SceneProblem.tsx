// Scene 2: The Problem (5-12s, 210 frames)
// Visual metaphor: scattered tasks, chaos, lack of organization

import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from 'remotion';
import { theme } from '../theme';

const TASK_ITEMS = [
  { text: 'Réunion client', x: 200, y: 150, rotation: -12 },
  { text: 'Code review', x: 800, y: 200, rotation: 8 },
  { text: 'Bug urgent', x: 1500, y: 300, rotation: -5 },
  { text: 'Documentation', x: 400, y: 600, rotation: 15 },
  { text: 'Tests unitaires', x: 1200, y: 700, rotation: -18 },
  { text: 'Déploiement', x: 600, y: 850, rotation: 10 },
  { text: 'Refactoring', x: 1400, y: 500, rotation: -8 },
];

export const SceneProblem: React.FC = () => {
  const frame = useCurrentFrame();

  // Fade in from previous scene
  const sceneOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Text appears
  const titleOpacity = interpolate(frame, [15, 40], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Items scatter and move chaotically
  const scatterProgress = interpolate(frame, [40, 100], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(...theme.animation.spring),
  });

  // Chaos shake effect
  const chaosShake = Math.sin(frame * 0.3) * scatterProgress * 3;

  // Start gathering items (transition prep)
  const gatherProgress = interpolate(frame, [150, 210], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(...theme.animation.easeInOut),
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${theme.colors.bgDark} 0%, ${theme.colors.bg} 100%)`,
        opacity: sceneOpacity,
      }}
    >
      {/* Main title */}
      <div
        style={{
          position: 'absolute',
          top: 180,
          left: 960,
          transform: 'translateX(-50%)',
          fontFamily: theme.fonts.main,
          fontSize: 56,
          fontWeight: 700,
          color: theme.colors.textDark,
          opacity: titleOpacity,
          textAlign: 'center',
          maxWidth: 900,
        }}
      >
        Des tâches dispersées
      </div>

      <div
        style={{
          position: 'absolute',
          top: 260,
          left: 960,
          transform: 'translateX(-50%)',
          fontFamily: theme.fonts.main,
          fontSize: 28,
          fontWeight: 500,
          color: theme.colors.textLight,
          opacity: titleOpacity,
          textAlign: 'center',
          maxWidth: 800,
        }}
      >
        Des informations difficiles à suivre
      </div>

      {/* Scattered task cards */}
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        {TASK_ITEMS.map((task, i) => {
          const itemDelay = 50 + i * 5;
          const itemProgress = interpolate(
            frame,
            [itemDelay, itemDelay + 20],
            [0, 1],
            {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.out(Easing.cubic),
            }
          );

          // Gather towards center for transition
          const targetX = 960;
          const targetY = 540;
          const currentX = task.x + (targetX - task.x) * gatherProgress;
          const currentY = task.y + (targetY - task.y) * gatherProgress;

          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: currentX,
                top: currentY,
                transform: `translate(-50%, -50%) rotate(${task.rotation * (1 - gatherProgress)}deg) translate(${chaosShake}px, ${chaosShake * 0.7}px) scale(${itemProgress * (1 - gatherProgress * 0.3)})`,
                opacity: itemProgress * (1 - gatherProgress * 0.5),
                background: theme.colors.bgLight,
                padding: '16px 24px',
                borderRadius: 12,
                boxShadow: `0 4px 16px rgba(0, 0, 0, ${0.15 * itemProgress})`,
                border: `2px solid ${theme.colors.bgDark}`,
                fontFamily: theme.fonts.main,
                fontSize: 18,
                fontWeight: 600,
                color: theme.colors.text,
                whiteSpace: 'nowrap',
              }}
            >
              {task.text}
            </div>
          );
        })}
      </div>

      {/* Bottom problem statement */}
      <div
        style={{
          position: 'absolute',
          bottom: 120,
          left: 960,
          transform: 'translateX(-50%)',
          fontFamily: theme.fonts.main,
          fontSize: 24,
          fontWeight: 600,
          color: theme.colors.accent,
          opacity: interpolate(frame, [100, 130], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
          textAlign: 'center',
        }}
      >
        Comment tout centraliser et collaborer efficacement ?
      </div>
    </AbsoluteFill>
  );
};
