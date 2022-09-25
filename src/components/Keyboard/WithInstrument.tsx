import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { useSoundfont } from "../../adapters/Soundfont";
import { useMount } from "../../utils/useMount";
import { Keyboard } from "./Keyboard";
import { useInstrument } from "../../state/Instrument";
import { useEffect } from "react";

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();
  const { loading, current, play, stop, load } = useSoundfont({ AudioContext });

  useEffect(() => {
    if (!loading && instrument !== current) load(instrument);
  }, [load, loading, current, instrument]);

  return <Keyboard loading={loading} play={play} stop={stop} />;
};
