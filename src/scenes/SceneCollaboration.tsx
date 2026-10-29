// Scene 5: Collaboration & Real-time Messaging (34-47s, 390 frames)
import { AbsoluteFill, useCurrentFrame, interpolate, Easing, spring } from 'remotion';
import { theme } from '../theme';

const MESSAGES = [
  { user: 'Alice', text: 'J\'ai terminé la validation des maquettes !', time: '10:42', isMe: false },
  { user: 'Thomas', text: 'Parfait, je m\'occupe du déploiement.', time: '10:44', isMe: true },
  { user: 'Marie', text: 'Super travail d\'équipe 🚀', time: '10:45', isMe: false },
];

export const SceneCollaboration: React.FC = () => {
  const frame = useCurrentFrame();
  
  const sceneOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  
  const titleProgress = spring({
    frame: frame - 15,
    fps: 30,
    config: { damping: 20, stiffness: 100 },
  });
  
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${theme.colors.bg} 0%, ${theme.colors.bgLight} 100%)`,
        opacity: sceneOpacity,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 100,
          left: 960,
          transform: `translateX(-50%) scale(${titleProgress})`,
          fontFamily: theme.fonts.main,
          fontSize: 48,
          fontWeight: 700,
          color: theme.colors.primary,
          opacity: titleProgress,
          textAlign: 'center',
        }}
      >
        Collaboration en temps réel
      </div>
      
      <div
        style={{
          position: 'absolute',
          top: 220,
          left: 960,
          transform: 'translateX(-50%)',
          width: 1000,
          background: theme.colors.bgLight,
          borderRadius: 24,
          boxShadow: '0 12px 36px rgba(107, 53, 107, 0.12)',
          border: `2px solid ${theme.colors.secondary}`,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            padding: '24px 32px',
            borderBottom: `1px solid ${theme.colors.bgDark}`,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.accent})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 700,
              fontSize: 18,
            }}
          >
            #
          </div>
          <div>
            <div style={{ fontFamily: theme.fonts.main, fontWeight: 700, fontSize: 18, color: theme.colors.textDark }}>
              Projet Principal - Équipe Dev
            </div>
            <div style={{ fontFamily: theme.fonts.main, fontSize: 13, color: theme.colors.textLight }}>
              3 membres actifs • En ligne
            </div>
          </div>
        </div>
        
        <div style={{ padding: 32, minHeight: 380, display: 'flex', flexDirection: 'column', gap: 24 }}>
          {MESSAGES.map((msg, i) => {
            const msgDelay = 50 + i * 40;
            const msgProgress = spring({
              frame: frame - msgDelay,
              fps: 30,
              config: { damping: 18, stiffness: 100 },
            });
            
            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: msg.isMe ? 'flex-end' : 'flex-start',
                  opacity: msgProgress,
                  transform: `translateY(${(1 - msgProgress) * 20}px)`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontFamily: theme.fonts.main, fontWeight: 600, fontSize: 14, color: theme.colors.textLight }}>
                    {msg.user}
                  </span>
                  <span style={{ fontFamily: theme.fonts.main, fontSize: 12, color: theme.colors.textLight }}>
                    {msg.time}
                  </span>
                </div>
                <div
                  style={{
                    background: msg.isMe ? theme.colors.primary : theme.colors.bg,
                    color: msg.isMe ? 'white' : theme.colors.textDark,
                    padding: '16px 24px',
                    borderRadius: msg.isMe ? '18px 18px 0 18px' : '18px 18px 18px 0',
                    maxWidth: '65%',
                    fontFamily: theme.fonts.main,
                    fontSize: 16,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div
        style={{
          position: 'absolute',
          bottom: 60,
          left: 960,
          transform: 'translateX(-50%)',
          fontFamily: theme.fonts.main,
          fontSize: 22,
          fontWeight: 600,
          color: theme.colors.accent,
          opacity: interpolate(frame, [250, 280], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
          textAlign: 'center',
        }}
      >
        Discutez, partagez et avancez ensemble
      </div>
    </AbsoluteFill>
  );
};
