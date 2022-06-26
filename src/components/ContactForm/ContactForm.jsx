import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContacts } from 'hooks/useContacts';
import { toast } from 'react-toastify';
import styles from './ContactForm.module.css';

const registerSchema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required().min(8).max(16),
});

export function ContactForm() {
  const { contacts, addContact } = useContacts();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async data => {
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

    reset();
  };

  return (
    <form
      className={styles.Form}
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className={styles.Label}>
        <input
          className={styles.Input}
          {...register('name')}
          type="text"
          placeholder="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        {errors.name && (
          <p className={styles.ErrorMessage}>{errors.name.message}</p>
        )}
      </label>

      <label className={styles.Label}>
        <input
          className={styles.Input}
          {...register('number')}
          type="tel"
          placeholder="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        {errors.number && (
          <p className={styles.ErrorMessage}>{errors.number.message}</p>
        )}
      </label>

      <button type="submit" className={styles.SubmitBtn}>
        Add contact
      </button>
    </form>
  );
}
