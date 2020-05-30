import { Commands } from './commands';

type InputPayload = Partial<{
  cmd: Commands,
  platforms: string[],
}>;

type OutputPayload = Partial<{
  platform: string,
  step: string,
  state: string,
  message: string,
}>;

export type WebsocketPayload = InputPayload & OutputPayload;
