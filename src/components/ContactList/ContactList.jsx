import css from "./ContactList.module.css";
import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={css.list}>
            {contacts.map(({ id, name, number }) => (
                <ContactListItem
                    key={id}
                    contactName={name}
                    contactNumber={number}
                    onClickDeleteContact={() => onDeleteContact(id)}
                />
            ))}
        </ul>
    );


};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;