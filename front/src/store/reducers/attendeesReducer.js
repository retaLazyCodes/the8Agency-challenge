import { Alert } from "alertService"
import { attendeesService } from "services/attendees"

export function attendeesReducer(state = [], action) {
    console.log('ACTION:', action)
    switch (action.type) {
        case '@attendees/init':
            return action.payload

        case '@attendees/created':
            return [...state, action.payload]

        default:
            return state
    }
}



export const createAttendee = (attendee) => {
    return async (dispatch) => {
        try {
            const newAttendee = await attendeesService.create(attendee)

            if (!newAttendee?.errors) {
                dispatch({
                    type: '@attendees/created',
                    payload: newAttendee
                })
                Alert.tempNotify("Te has registrado al evento con éxito!")
            }
            else {
                throw new Error('Whoops!')
            }

        } catch (error) {
            Alert.error("Hubo un problema al intentar registrarte :(")
        }

    }
}


export const initAttendees = () => {
    return async (dispatch) => {
        const attendees = await attendeesService.getAll()

        dispatch({
            type: '@attendees/init',
            payload: attendees
        })
    }
}
