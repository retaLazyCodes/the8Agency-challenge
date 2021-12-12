import { AttendeesList } from 'components/AttendeesList';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

export const Attendees = () => {
    return (
        <div>
            <Header message={"Lista de personas que asistirán al Webinar"} />
            <AttendeesList />
            <Footer />
        </div>
    );
}

