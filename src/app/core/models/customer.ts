/**
 * CustomerRoutes model
 * Basically mimics the customSerializer in the API.
 */

import { Address } from './address';

export class User {
  id: string;
  name: string;
  contact:string;
  email: string;
  created_at: string;
  updated_at: string;
  bill_address_id: string;
  ship_address_id: string;
  payment_sources: [any];
  bill_address: [Address];
  ship_address: [Address];
}
