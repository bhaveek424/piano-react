import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { useSoundfont } from "../../adapters/Soundfont";
import { useMount } from "../../utils/useMount";
import { Keyboard } from "./Keyboard";
import { useInstrument } from "../../state/Instrument";
import { useEffect } from "react";
import { SoundfontProvider } from "../../adapters/Soundfont";

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();

  return (
    <SoundfontProvider
      AudioContext={AudioContext}
      instrument={instrument}
      render={(props) => <Keyboard {...props} />}
    />
  );
};
