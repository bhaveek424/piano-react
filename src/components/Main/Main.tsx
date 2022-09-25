import { Keyboard } from "../Keyboard";
import { NoAudioMessage } from "../NoAudioMessage";
import { useAudioContext } from "../AudioContextProvider/useAudioContext";

export const Main = () => {
  const AudioContext = useAudioContext();

  return !!AudioContext ? <Keyboard /> : <NoAudioMessage />;
};
