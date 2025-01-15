const CONTACTS_KEY = 'contacts_data';

// Save contacts data to localStorage
export const saveContactsToStorage = (contacts) => {
  localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
};

// Load contacts data from localStorage
export const loadContactsFromStorage = () => {
  const contacts = localStorage.getItem(CONTACTS_KEY);
  return contacts ? JSON.parse(contacts) : [];
};

// Clear contacts data from localStorage
export const clearContactsFromStorage = () => {
  localStorage.removeItem(CONTACTS_KEY);
};
