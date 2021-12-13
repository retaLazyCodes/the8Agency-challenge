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
        const newAttendee = await attendeesService.create(attendee)

        dispatch({
            type: '@attendees/created',
            payload: newAttendee
        })
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
