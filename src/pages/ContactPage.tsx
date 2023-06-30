
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div>
      <ContactMe />
      <div className="h-10" />
      <Footer showProfile={false} />
    </div>
  );
};

export default ContactPage;
