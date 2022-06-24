import { Container } from 'components/Container';
import { SectionsWrapper } from 'components/SectionsWrapper';
import { Section } from 'components/Section';
import { useContacts } from 'hooks/useContacts';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { CircleLoader } from 'components/Loaders/CircleLoader';
import { CircleLoaderBackdrop } from 'components/Loaders/CircleLoader/CircleLoaderBackdrop';
import { Notification } from 'components/Notification';

export function PhonebookView() {
  const { contacts, status } = useContacts();
  return (
    <Container>
      <SectionsWrapper>
        {(status === 'deleteLoading' || status === 'addLoading') && (
          <CircleLoaderBackdrop>
            <CircleLoader type={'DeleteLoader'} />
          </CircleLoaderBackdrop>
        )}

        <Section tag={'h1'} title={'Phonebook'}>
          <ContactForm />
        </Section>

        <Section tag={'h2'} title={'Contacts'}>
          {status === 'loading' && contacts.length === 0 && (
            <CircleLoader type={'ListLoader'} />
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
    </Container>
  );
}
