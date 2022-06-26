import { SectionsWrapper } from 'components/SectionsWrapper';
import { Section } from 'components/Section';
import { useContacts } from 'hooks/useContacts';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Oval } from 'react-loader-spinner';
import { OvalLoader } from 'components/Loaders/OvalLoader';
import { Notification } from 'components/Notification';

export default function PhonebookPage() {
  const { contacts, status } = useContacts();
  return (
    <SectionsWrapper>
      {(status === 'deleteLoading' || status === 'addLoading') && (
        <OvalLoader />
      )}

      <Section tag={'h1'} title={'Phonebook'}>
        <ContactForm />
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
    </SectionsWrapper>
  );
}
