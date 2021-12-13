import { AttendeesList } from 'components/AttendeesList';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initAttendees } from 'store/reducers/attendeesReducer';

export const Attendees = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initAttendees())
    }, [dispatch])

    return (
        <div>
            <Header message={"Lista de personas que asistirán al Webinar"} />
            <AttendeesList />
            <Footer />
        </div>
    );
}

