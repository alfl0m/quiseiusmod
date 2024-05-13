type Person = {
  name: string;
  isPremiumMember: boolean;
};

const personIsPremium = (personObj: Person): string => {
  if (!personObj) {
    throw new Error('No person object provided');
  }
  
  if (typeof personObj.isPremiumMember !== 'boolean') {
    throw new Error('Invalid person object');
  }

  return personObj.isPremiumMember ? 'Premium Member' : 'Regular Member';
};
