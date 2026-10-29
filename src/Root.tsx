// Remotion Root registration
import { Composition } from 'remotion';
import { CollabTaskPromo, TOTAL_DURATION } from './CollabTaskPromo';

export const Root = () => {
  return (
    <>
      <Composition
        id="CollabTaskPromo"
        component={CollabTaskPromo}
        durationInFrames={TOTAL_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
