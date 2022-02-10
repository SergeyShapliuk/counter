const initState = {
    value: 0,
    maxValue: 0,
    startValue: 0,
    message: 'enter values and press "set"',
    disabled: false
}

export const counterReducer = (state: InitialStateType = initState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-VALUE-COUNTER":
            return {...state, startValue: state.startValue}
        case "INC-VALUE-COUNTER":
            return {...state, value: state.value +1}
        case "RES-VALUE-COUNTER":
            return {...state, value: state.startValue}
        case "MESSAGE-COUNTER":
            return {...state, message: action.message}
        case "DISABLED-COUNTER":
            return {...state, disabled: action.disabled}
        case "MAX-VALUE-INPUT-COUNTER":
            return {...state, maxValue: action.newValue}
        case "START-VALUE-INPUT-COUNTER":
            return {...state,startValue: action.newValue}


        default:
            return state
    }
}
export const setValueCounter = () => ({type: "SET-VALUE-COUNTER"} as const)
export const incValueCounter = () => ({type: "INC-VALUE-COUNTER"} as const)
export const resValueCounter = () => ({type: "RES-VALUE-COUNTER"} as const)
export const messageCounter = (message: string) => ({type: "MESSAGE-COUNTER", message} as const)
export const disabledCounter = (disabled: boolean) => ({type: "DISABLED-COUNTER", disabled} as const)
export const maxValueInputCounter = (newValue: number) => ({type: "MAX-VALUE-INPUT-COUNTER", newValue} as const)
export const startValueInputCounter = (newValue: number) => ({type: "START-VALUE-INPUT-COUNTER", newValue} as const)

type InitialStateType = typeof initState

type ActionsType = ReturnType<typeof setValueCounter>
    | ReturnType<typeof incValueCounter>
    | ReturnType<typeof resValueCounter>
    | ReturnType<typeof messageCounter>
    | ReturnType<typeof disabledCounter>
    | ReturnType<typeof maxValueInputCounter>
    | ReturnType<typeof startValueInputCounter>