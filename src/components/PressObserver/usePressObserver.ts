import { useEffect, useState } from "react";
import { Key as KeyLabel } from "../../domain/keyboard";

type IsPressed = boolean;
type EventCode = string;
type CallbackFunction = () => void;

type Settings = {
  watchKey: KeyLabel;
  onStartPress: CallbackFunction;
  onFinishPress: CallbackFunction;
};

function fromEventCode(code: EventCode): KeyLabel {
  const prefixRegex = /Key|Digit/gi;
  return code.replace(prefixRegex, "");
} // takes an event code that can be presented like KeyZ, KeyS, Digit9 etc.and keep only prefix
// `KeyZ` => `Z`

function equal(watchedKey: KeyLabel, eventCode: EventCode): boolean {
  return fromEventCode(eventCode).toUpperCase() === watchedKey.toUpperCase();
} // toUpperCase() for normalisation so either of 's' or 'S' would work as watchedKey

export function usePressObserver({
  watchKey,
  onStartPress,
  onFinishPress,
}: Settings): IsPressed {
  const [pressed, setPressed] = useState<IsPressed>(false);

  useEffect(() => {
    function handlePressStart({ code }: KeyboardEvent): void {
      if (pressed || !equal(watchKey, code)) return;
      setPressed(true);
      onStartPress();
    }

    function handlePressFinish({ code }: KeyboardEvent): void {
      if (!pressed || !equal(watchKey, code)) return;
      setPressed(false);
      onFinishPress();
    }

    document.addEventListener("keydown", handlePressStart);
    document.addEventListener("keyup", handlePressFinish);

    return () => {
      document.removeEventListener("keydown", handlePressStart);
      document.removeEventListener("keyup", handlePressFinish);
    };
  }, [watchKey, pressed, setPressed, onStartPress, onFinishPress]);

  return pressed;
}
