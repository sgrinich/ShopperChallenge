export interface Application {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    submitted: boolean;
    backgroundCheckAccepted: boolean;
    phoneType?: string;
    region?: string;
    over21?: string;
    reason?: string;
  }
