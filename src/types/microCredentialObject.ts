import { MicroCredential } from './microCredential';
import { ModuleInt } from './modules';

export interface MicroCredentialData {
  micro_credential: MicroCredential;
  accessStatus: boolean;
  modules: ModuleInt;
}
