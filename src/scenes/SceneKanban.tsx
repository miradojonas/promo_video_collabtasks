// Scene 4: Kanban & Project Management (21-34s, 390 frames)
// Visual representation of Kanban board with cards moving between columns

import { AbsoluteFill, useCurrentFrame, interpolate, Easing, spring } from 'remotion';
import { theme } from '../theme';

const COLUMNS = [
  { title: 'À faire', color: '#9ca3af', tasks: 3 },
  { title: 'En cours', color: theme.colors.accent, tasks: 2 },
  { title: 'Terminé', color: theme.colors.primary, tasks: 4 },
];

const SAMPLE_TASKS = [
  'Conception API',
  'Interface utilisateur',
  'Tests d\'intégration',
];

export const SceneKanban: React.FC = () => {
  const frame = useCurrentFrame();

  // Scene transition
  const sceneOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Title
  const titleProgress = spring({
    frame: frame - 15,
    fps: 30,
    config: { damping: 20, stiffness: 100 },
  });

  // Columns appear
  const columnBaseDelay = 50;

  // Card movement animation (simulating drag & drop)
  const cardMoveProgress = interpolate(frame, [200, 260], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.bezier(...theme.animation.easeInOut),
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${theme.colors.bgLight} 0%, ${theme.colors.bg} 100%)`,
        opacity: sceneOpacity,
      }}
    >
      {/* Title */}
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
        Organisez avec des tableaux Kanban
      </div>

      {/* Kanban board */}
      <div
        style={{
          position: 'absolute',
          top: 220,
          left: 960,
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 32,
          width: 1600,
        }}
      >
        {COLUMNS.map((column, colIndex) => {
          const colProgress = spring({
            frame: frame - (columnBaseDelay + colIndex * 15),
            fps: 30,
            config: { damping: 22, stiffness: 90 },
          });

          return (
            <div
              key={colIndex}
              style={{
                flex: 1,
                opacity: colProgress,
                transform: `translateY(${(1 - colProgress) * 40}px)`,
              }}
            >
              {/* Column header */}
              <div
                style={{
                  background: theme.colors.bgLight,
                  borderRadius: '16px 16px 0 0',
                  padding: '20px 24px',
                  borderBottom: `4px solid ${column.color}`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}
              >
                <div
                  style={{
                    fontFamily: theme.fonts.main,
                    fontSize: 20,
                    fontWeight: 700,
                    color: theme.colors.textDark,
                    marginBottom: 8,
                  }}
                >
                  {column.title}
                </div>
                <div
                  style={{
                    fontFamily: theme.fonts.main,
                    fontSize: 14,
                    fontWeight: 500,
                    color: theme.colors.textLight,
                  }}
                >
                  {column.tasks} tâche{column.tasks > 1 ? 's' : ''}
                </div>
              </div>

              {/* Column content area */}
              <div
                style={{
                  background: `${theme.colors.bgLight}40`,
                  padding: 16,
                  minHeight: 400,
                  borderRadius: '0 0 16px 16px',
                }}
              >
                {/* Task cards */}
                {Array.from({ length: column.tasks }).map((_, taskIdx) => {
                  const cardDelay = columnBaseDelay + colIndex * 15 + taskIdx * 8 + 30;
                  const cardProgress = spring({
                    frame: frame - cardDelay,
                    fps: 30,
                    config: { damping: 20, stiffness: 100 },
                  });

                  // Special animation for moving card
                  let moveOffset = 0;
                  if (colIndex === 0 && taskIdx === 0 && frame > 200) {
                    moveOffset = cardMoveProgress * 550;
                  }

                  return (
                    <div
                      key={taskIdx}
                      style={{
                        background: theme.colors.bgLight,
                        borderRadius: 12,
                        padding: 16,
                        marginBottom: 12,
                        boxShadow: `0 2px 8px rgba(0,0,0,${0.08 * cardProgress})`,
                        border: `1px solid ${theme.colors.bgDark}`,
                        transform: `scale(${cardProgress}) translateX(${moveOffset}px)`,
                        opacity: cardProgress * (moveOffset > 300 ? 0 : 1),
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: theme.fonts.main,
                          fontSize: 15,
                          fontWeight: 600,
                          color: theme.colors.text,
                          marginBottom: 8,
                        }}
                      >
                        {SAMPLE_TASKS[taskIdx % SAMPLE_TASKS.length]}
                      </div>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <div
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${column.color}50, ${column.color}80)`,
                          }}
                        />
                        <div
                          style={{
                            fontFamily: theme.fonts.main,
                            fontSize: 12,
                            color: theme.colors.textLight,
                          }}
                        >
                          Assigné
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom caption */}
      <div
        style={{
          position: 'absolute',
          bottom: 80,
          left: 960,
          transform: 'translateX(-50%)',
          fontFamily: theme.fonts.main,
          fontSize: 22,
          fontWeight: 600,
          color: theme.colors.textLight,
          opacity: interpolate(frame, [300, 330], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
          textAlign: 'center',
        }}
      >
        Glissez-déposez vos tâches • Suivez l'avancement • Collaborez
      </div>
    </AbsoluteFill>
  );
};
