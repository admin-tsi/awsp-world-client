import { MicroCredential } from './microCredential';
import { ModuleInt } from './modules';

export interface MicroCredentialObject {
  _id: string;
  user: string;
  micro_credential: MicroCredential;
  accessStatus: boolean;
  modules: { module: ModuleInt; started: boolean }[];
  accomplishments: string[];
  __v: number;
}
