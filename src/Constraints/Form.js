export const contactFields = [
    {
        id: "name",
        name: "name",
        type: "text",
        label: "Full Name",
        placeholder: "John Doe",
        required: true,
    },
    {
        id: "email",
        name: "email",
        type: "email",
        label: "Email Address",
        placeholder: "john@example.com",
        required: true,
    },
    {
        id: "subject",
        name: "subject",
        type: "text",
        label: "Subject",
        placeholder: "How can I help?",
        required: false,
    },
];
import { Home as HomeIcon, Phone as PhoneIcon } from 'lucide-react';
import { MdEmail } from "react-icons/md";

export const contactDetails = [
    {
        id: 1,
        icon: HomeIcon,
        title: "Our Location",
        description: "Phnom Penh, Cambodia",
    },
    {
        id: 2,
        icon: PhoneIcon,
        title: "Phone Number",
        description: "+855 60 168 168",
    },
    {
        id: 3,
        icon: MdEmail,
        title: "Email Address",
        description: "mail@gmail.com",
    },
];