import React from 'react';
import Image from 'next/image';
import type { Profile } from '@/types/profile';
import ContactDetails from './ContactDetails';

const ProfileCard = ({
  displayPicture,
  description,
  name,
  professionalId,
  contactDetails,
}: Profile) => {
  return (
    <div className="flex flex-col md:flex-row w-full md:max-w-2xl bg-white dark:bg-gray-800 rounded-lg overflow-hidden md:shadow-lg md:border md:border-gray-200 dark:md:border-gray-700">
      <div className="flex-shrink-0 flex items-center justify-center w-full md:w-64 h-64 md:h-64 bg-gray-100 dark:bg-gray-900">
        <Image
          src={displayPicture || ''}
          alt={name || ''}
          width={274}
          height={277}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center p-6 w-full">
        <div className="font-bold text-2xl mb-2 text-gray-900 dark:text-gray-100">{name}</div>
        {professionalId?.prnNumber && (
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
            PRN Number: {professionalId.prnNumber}
          </p>
        )}
        <p className="text-gray-700 dark:text-gray-200 text-base mb-4">{description}</p>
        <ContactDetails {...contactDetails} />
      </div>
    </div>
  );
};

export default ProfileCard;