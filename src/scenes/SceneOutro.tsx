// Scene 6: Outro (47-54s, 210 frames)
import { AbsoluteFill, useCurrentFrame, interpolate, spring } from 'remotion';
import { theme } from '../theme';

export const SceneOutro: React.FC = () => {
  const frame = useCurrentFrame();
  
  const sceneOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  const dropProgress = spring({
    frame: frame - 20,
    fps: 30,
    config: { damping: 15, stiffness: 120, mass: 0.8 },
  });
  
  const sloganOpacity = interpolate(frame, [60, 90], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.accent} 100%)`,
        opacity: sceneOpacity,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          fontFamily: theme.fonts.main,
          fontSize: 84,
          fontWeight: 800,
          color: 'white',
          transform: `scale(${dropProgress}) translateY(${(1 - dropProgress) * -50}px)`,
          opacity: dropProgress,
          letterSpacing: '0.02em',
          marginBottom: 24,
          textAlign: 'center',
        }}
      >
        Collab Task
      </div>
      
      <div
        style={{
          fontFamily: theme.fonts.main,
          fontSize: 36,
          fontWeight: 600,
          color: 'white',
          opacity: sloganOpacity * 0.95,
          transform: `translateY(${(1 - sloganOpacity) * 20}px)`,
          textAlign: 'center',
        }}
      >
        Organisez. Collaborez. Réussissez.
      </div>
      
      <div
        style={{
          position: 'absolute',
          bottom: 120,
          fontFamily: theme.fonts.main,
          fontSize: 18,
          fontWeight: 500,
          color: 'white',
          opacity: interpolate(frame, [100, 130], [0, 0.9], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      >
        Plateforme de gestion collaborative de tâches
      </div>
    </AbsoluteFill>
  );
};
