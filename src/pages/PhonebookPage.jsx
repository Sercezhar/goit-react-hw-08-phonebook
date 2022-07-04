import { Outlet } from 'react-router-dom';
import { useContacts } from 'hooks/useContacts';
import { SectionsWrapper } from 'components/SectionsWrapper';
import { Section } from 'components/Section';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Oval } from 'react-loader-spinner';
import { OvalLoader } from 'components/Loaders/OvalLoader';
import { Notification } from 'components/Notification';
import toast from 'react-hot-toast';

export default function PhonebookPage() {
  const { contacts, status, addContact } = useContacts();

  const handleAddContact = async data => {
    const alreadyInContacts = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    try {
      if (alreadyInContacts) {
        toast.error(`${data.name.toUpperCase()} is already in contacts.`);
      } else {
        await addContact(data);
        toast.success(`${data.name.toUpperCase()} is added to contacts.`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SectionsWrapper>
      {status === 'updating' && <OvalLoader />}

      <Section tag={'h1'} title={'Phonebook'}>
        <ContactForm onSubmit={handleAddContact} btnText={'Add contact'} />
      </Section>

      <Section tag={'h2'} title={'Contacts'}>
        {status === 'loading' && contacts.length === 0 && (
          <Oval
            ariaLabel="loading-indicator"
            height={30}
            width={30}
            strokeWidth={5}
            color="var(--theme-color)"
            secondaryColor="#ccc"
          />
        )}
        <>
          {(status === 'resolved' || status === 'deleteResolved') &&
          contacts.length === 0 ? (
            <Notification message={'No contacts added'} />
          ) : (
            <>
              {contacts.length > 0 && <Filter />}
              <ContactList />
            </>
          )}
        </>
      </Section>

      <Outlet />
    </SectionsWrapper>
  );
}
