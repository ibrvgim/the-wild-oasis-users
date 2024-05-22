'use server';

import { auth } from '@/authentication/auth';
import { updateGuest } from '@/libraries/data-service';
import { revalidatePath } from 'next/cache';

const errors = {};

function invalidNationality(nationality) {
  if (!nationality || nationality.trim() === '') {
    errors['nationality'] = 'You must select your nationality';
    return true;
  } else {
    errors['nationality'] = '';
    return false;
  }
}

function invalidNationalID(nationalID) {
  if (!nationalID) {
    errors['nationalID'] = 'Field must be filled in';
    return true;
  } else if (!/^[a-zA-Z0-9/]{6,12}$/.test(nationalID)) {
    errors['nationalID'] = 'Invalid national ID type';
    return true;
  } else {
    errors['nationalID'] = '';
    return false;
  }
}

export async function updateProfile(_, data) {
  const session = await auth();
  if (!session) throw new Error('You must login to your account.');

  const nationalID = data.get('nationalID');
  const nationality = data.get('nationality');

  const checkNationallity = invalidNationality(nationality);
  const checkNationalID = invalidNationalID(nationalID);

  if (checkNationalID || checkNationallity) return errors;

  const updateData = { nationality, nationalID };

  updateGuest(session?.user.guestId, updateData);
  revalidatePath('/account');
}
