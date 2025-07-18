import ProfileCard from '@/app/components/ProfileCard';
import { Profile } from '@/types/profile';

const profileData: Record<string, Profile> = {
  'foo-bar': {
    name: 'Mr. Foo Bar',
    displayPicture: '/profiles/foo-bar.jpeg',
    description: 'A brief description about Mr. Foo Bar.',
    contactDetails: {
      phone: '123-456-7890',
      email: 'foobar@example.com',
    },
    professionalId: {
      prnNumber: 'PRN123456',
    }
  },
  'john-doe': {
    name: 'John Doe',
    displayPicture: '/profiles/john-doe.jpeg',
    description: 'A brief description about John Doe.',
    contactDetails: {
      phone: '098-765-4321',
      email: 'johndoe@example.com',
    },
    professionalId: {
      prnNumber: 'PRN654321',
    },
  },
};

export function generateStaticParams() {
  return Object.keys(profileData).map(profile => ({ profile }));
}

// Add this export for Next.js App Router meta
export async function generateMetadata({ params }: { params: Promise<{ profile: string }> }) {
  const { profile: profileKey } = await params;
  const profile = profileData[profileKey];
  return {
    title: profile?.name || 'Profile',
  };
}

export default async function ProfilePage({ params }: { params: Promise<{ profile: string }> }) {
  const {profile: profileKey} = await params;
  const profile = profileData[profileKey];

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen py-8 md:justify-center">
      <ProfileCard {...profile} />
    </div>
  );
}