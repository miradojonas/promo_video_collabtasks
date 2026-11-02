// Collab Task Promo Video - Main Composition
import { AbsoluteFill, Sequence, Audio, staticFile } from 'remotion';
import { SceneIntro } from './scenes/SceneIntro';
import { SceneProblem } from './scenes/SceneProblem';
import { SceneDashboard } from './scenes/SceneDashboard';
import { SceneKanban } from './scenes/SceneKanban';
import { SceneCollaboration } from './scenes/SceneCollaboration';
import { SceneOutro } from './scenes/SceneOutro';

// Timing structure (30fps, ~54 seconds total = 1620 frames)
export const SHOTS = {
  intro: { from: 0, duration: 150 }, // 0-5s
  problem: { from: 150, duration: 210 }, // 5-12s
  dashboard: { from: 360, duration: 270 }, // 12-21s
  kanban: { from: 630, duration: 390 }, // 21-34s
  collaboration: { from: 1020, duration: 390 }, // 34-47s
  outro: { from: 1410, duration: 210 }, // 47-54s
};

export const TOTAL_DURATION = 1620; // 54 seconds

export const CollabTaskPromo: React.FC = () => {
  const musicVolume = 0.14;

  return (
    <AbsoluteFill style={{ backgroundColor: '#f3f4f6' }}>
      {/* Background music - fond.mp3, looped to cover 54s with fade in/out */}
      <Sequence from={0} durationInFrames={1620}>
        <Audio src={staticFile('audio/fond.mp3')} volume={musicVolume} loop />
      </Sequence>
      <Sequence from={0} durationInFrames={15}>
        <Audio src={staticFile('audio/fond.mp3')} volume={0} />
      </Sequence>

      {/* French voice-over - script.mp3, natural placement */}
      <Sequence from={90} durationInFrames={Math.round(36.519 * 30)}>
        <Audio src={staticFile('audio/script.mp3')} volume={0.9} />
      </Sequence>

      {/* Subtle SFX to enhance transitions/actions without overwhelming */}
      <Sequence from={25} durationInFrames={24}>
        <Audio src={staticFile('audio/transition-soft.mp3')} volume={0.22} />
      </Sequence>
      <Sequence from={150} durationInFrames={28}>
        <Audio src={staticFile('audio/transition-soft.mp3')} volume={0.24} />
      </Sequence>
      <Sequence from={170} durationInFrames={30}>
        <Audio src={staticFile('audio/whoosh-fast.mp3')} volume={0.22} />
      </Sequence>
      <Sequence from={380} durationInFrames={30}>
        <Audio src={staticFile('audio/transition-soft.mp3')} volume={0.24} />
      </Sequence>
      <Sequence from={660} durationInFrames={24}>
        <Audio src={staticFile('audio/pop.mp3')} volume={0.28} />
      </Sequence>
      <Sequence from={1040} durationInFrames={24}>
        <Audio src={staticFile('audio/pop.mp3')} volume={0.26} />
      </Sequence>
      <Sequence from={1415} durationInFrames={36}>
        <Audio src={staticFile('audio/impact-cine.mp3')} volume={0.32} />
      </Sequence>

      {/* Scene 1: Introduction */}
      <Sequence from={SHOTS.intro.from} durationInFrames={SHOTS.intro.duration}>
        <SceneIntro />
      </Sequence>

      {/* Scene 2: The Problem */}
      <Sequence from={SHOTS.problem.from} durationInFrames={SHOTS.problem.duration}>
        <SceneProblem />
      </Sequence>

      {/* Scene 3: Dashboard Solution */}
      <Sequence from={SHOTS.dashboard.from} durationInFrames={SHOTS.dashboard.duration}>
        <SceneDashboard />
      </Sequence>

      {/* Scene 4: Kanban & Project Management */}
      <Sequence from={SHOTS.kanban.from} durationInFrames={SHOTS.kanban.duration}>
        <SceneKanban />
      </Sequence>

      {/* Scene 5: Collaboration */}
      <Sequence from={SHOTS.collaboration.from} durationInFrames={SHOTS.collaboration.duration}>
        <SceneCollaboration />
      </Sequence>

      {/* Scene 6: Outro */}
      <Sequence from={SHOTS.outro.from} durationInFrames={SHOTS.outro.duration}>
        <SceneOutro />
      </Sequence>
    </AbsoluteFill>
  );
};
