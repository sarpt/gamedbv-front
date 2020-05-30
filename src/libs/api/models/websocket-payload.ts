import { Operations } from './operations';

type InputPayload = Partial<{
  op: Operations,
  platforms: string[],
}>;

type OutputPayload = Partial<{
  platform: string,
  step: string,
  state: string,
  message: string,
}>;

export type WebsocketPayload = InputPayload & OutputPayload;
