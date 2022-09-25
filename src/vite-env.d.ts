/// <reference types="vite/client" />
type AudioContextType = typeofAudioContext;

interface Window extends Window {
  webkitAudioContext: AudioContextType;
}
