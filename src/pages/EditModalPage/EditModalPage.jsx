import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useContacts } from 'hooks/useContacts';
import { Section } from 'components/Section';
import { ContactForm } from 'components/ContactForm';
import { MdClose } from 'react-icons/md';
import toast from 'react-hot-toast';
import styles from './EditModalPage.module.css';

export function EditModalPage() {
  const navigate = useNavigate();
  const { contactId } = useParams();
  const { contacts, editContact } = useContacts();

  const contact = contacts.find(contact => contact.id === contactId);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        closeModal();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  function closeModal() {
    navigate('/contacts');
  }

  const handleEditContact = async data => {
    const noChanges =
      contact.name === data.name && contact.number === data.number;

    const alreadyInContacts = contacts.some(
      contact =>
        contact.name.toLowerCase() === data.name.toLowerCase() &&
        contact.id !== contactId
    );

    try {
      if (noChanges) {
        closeModal();
        return;
      }

      if (alreadyInContacts) {
        toast.error(`${data.name.toUpperCase()} is already in contacts.`);
        return;
      }

      await editContact({ id: contactId, ...data });
      toast.success('The contact has been edited');
    } catch (error) {
      console.log(error);
    }

    closeModal();
  };

  return (
    <div className={styles.Backdrop}>
      <div className={styles.Modal}>
        <Section tag="h2" title="Editing">
          {contact && (
            <ContactForm
              initialValues={{ name: contact.name, number: contact.number }}
              onSubmit={handleEditContact}
              btnText={'Edit contact'}
            />
          )}

          <button className={styles.CloseBtn} onClick={closeModal}>
            <MdClose />
          </button>
        </Section>
      </div>
    </div>
  );
}
