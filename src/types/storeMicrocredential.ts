import { MicroCredential } from './microCredential';
import { ModuleInt } from './modules';

export interface MicroCredentialItem {
  _id: string;
  user: string;
  micro_credential: MicroCredential;
  accessStatus: boolean;
  modules: { module: ModuleInt; started: boolean }[];
  accomplishments: any[];
  __v: number;
}
