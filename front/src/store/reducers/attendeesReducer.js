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