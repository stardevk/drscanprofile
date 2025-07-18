interface Profile {
  name: string;
  displayPicture: string;
  contactDetails: {
    phone: string;
    email: string;
    address?: string;
  };
  description: string;
  professionalId?: {
    prnNumber?: string;
  };
}

export type { Profile };