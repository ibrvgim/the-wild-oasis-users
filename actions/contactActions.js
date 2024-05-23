'use server';

import { createContact } from '@/libraries/data-service';
import { redirect } from 'next/navigation';

const errors = {};

function invalidInput(
  key,
  value,
  length,
  errorMessage = 'Field must be filled in'
) {
  if (!value || value.trim() === '') {
    errors[key] = errorMessage;
    return true;
  } else if (value.length < length) {
    errors[key] = `Minimum ${length} characters`;
    return true;
  } else {
    errors[key] = '';
    return false;
  }
}

function invalidEmail(value) {
  const validateEmailRegex = /^\S+@\S+\.\S+$/;

  if (!value || !value.trim() === '') {
    errors['email'] = 'Field must be filled in';
    return true;
  } else if (!validateEmailRegex.test(value)) {
    errors['email'] = 'Invalid email syntax';
    return true;
  } else {
    errors['email'] = '';
    return false;
  }
}

export async function setContact(_, data) {
  const fullName = data.get('fullName');
  const email = data.get('email');
  const subject = data.get('subject');
  const message = data.get('message');

  const checkFullName = invalidInput('fullName', fullName, 5);
  const checkEmail = invalidEmail(email);
  const checkSubject = invalidInput('subject', subject, 1, 'Must select topic');
  const checkMessage = invalidInput('message', message, 20);

  if (checkFullName || checkEmail || checkMessage || checkSubject)
    return errors;

  const contactData = {
    fullName,
    email,
    subject,
    message,
  };

  createContact(contactData);
  redirect('/account/contact/report');
}
