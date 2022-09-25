import { NoAudioMessage } from "../NoAudioMessage";
import { useAudioContext } from "../AudioContextProvider";

const Keyboard = () => <>Keyboard</>;

export const Main = () => {
  const AudioContext = useAudioContext();

  return !!AudioContext ? <Keyboard /> : <NoAudioMessage />;
};
