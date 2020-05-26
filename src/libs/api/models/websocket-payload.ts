import { Commands } from './commands';

export type WebsocketPayload = Partial<{
  cmd: Commands,
  platforms: string[],
  status: string,
  message: string,
}>;
