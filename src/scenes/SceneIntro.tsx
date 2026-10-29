// Scene 1: Brand Introduction (0-5s, 150 frames)
// Inspired by brand-ink-open but adapted for Collab Task's modern digital aesthetic

import { AbsoluteFill, useCurrentFrame, interpolate, Easing, spring } from 'remotion';
import { theme } from '../theme';

export const SceneIntro: React.FC = () => {
  const frame = useCurrentFrame();

  // Timing:
  // 0-30f: Cross mark animation (prep)
  // 30-70f: Brand name letterpress entrance
  // 70-120f: Hold
  // 120-150f: Fade out transition

  // Cross mark animation (subtle grid reveal)
  const crossProgress = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(...theme.animation.easeOut),
  });

  const crossOpacity = interpolate(frame, [20, 40], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Brand name entrance - each letter scales and fades in
  const brandName = 'COLLAB TASK';
  const letters = brandName.split('');

  // Entire scene fade out
  const sceneOpacity = interpolate(frame, [120, 150], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(...theme.animation.easeIn),
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${theme.colors.bg} 0%, ${theme.colors.bgLight} 100%)`,
        opacity: sceneOpacity,
      }}
    >
      {/* Animated cross mark grid */}
      <svg
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: crossOpacity,
        }}
        width="120"
        height="120"
        viewBox="0 0 120 120"
      >
        {/* Vertical line */}
        <line
          x1="60"
          y1="20"
          x2="60"
          y2="100"
          stroke={theme.colors.primary}
          strokeWidth="2"
          strokeDasharray="80"
          strokeDashoffset={80 * (1 - crossProgress)}
          strokeLinecap="round"
        />
        {/* Horizontal line */}
        <line
          x1="20"
          y1="60"
          x2="100"
          y2="60"
          stroke={theme.colors.accent}
          strokeWidth="2"
          strokeDasharray="80"
          strokeDashoffset={80 * (1 - Math.max(0, crossProgress * 2 - 1))}
          strokeLinecap="round"
        />
      </svg>

      {/* Brand Name */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          gap: '0.3em',
          fontFamily: theme.fonts.main,
          fontWeight: 800,
          fontSize: 72,
          letterSpacing: '0.02em',
          marginTop: 80,
        }}
      >
        {letters.map((letter, i) => {
          const letterDelay = 30 + i * 3;
          const letterDuration = 18;

          const letterScale = spring({
            frame: frame - letterDelay,
            fps: 30,
            config: {
              damping: 20,
              mass: 0.5,
              stiffness: 100,
            },
          });

          const letterOpacity = interpolate(
            frame,
            [letterDelay, letterDelay + letterDuration],
            [0, 1],
            {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }
          );

          const letterBlur = interpolate(
            frame,
            [letterDelay, letterDelay + letterDuration],
            [6, 0],
            {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }
          );

          // Accent color for "TASK"
          const isTask = i >= 7;
          const color = isTask ? theme.colors.accent : theme.colors.primary;

          return (
            <span
              key={i}
              style={{
                display: 'inline-block',
                transform: `scale(${letterScale})`,
                opacity: letterOpacity,
                filter: `blur(${letterBlur}px)`,
                color,
                transformOrigin: 'center bottom',
              }}
            >
              {letter === ' ' ? ' ' : letter}
            </span>
          );
        })}
      </div>

      {/* Subtitle */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          marginTop: 160,
          fontFamily: theme.fonts.main,
          fontSize: 20,
          fontWeight: 500,
          color: theme.colors.textLight,
          opacity: interpolate(frame, [80, 100], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      >
        Gestion collaborative de projets
      </div>
    </AbsoluteFill>
  );
};
