import { FunctionComponent } from "react";
import clsx from "clsx";
import { NoteType } from "../../domain/note";
import styles from "./Key.module.css";

type PressCallback = () => void;

type KeyProps = {
  type: NoteType;
  label: string;
  disabled?: boolean;
  children?: React.ReactNode;

  onUp: PressCallback;
  onDown: PressCallback;
};

export const Key: FunctionComponent<KeyProps> = (props) => {
  const { type, label, ...rest } = props;

  return (
    <button className={clsx(styles.key, styles[type])} type="button" {...rest}>
      {label}
    </button>
  );
};
