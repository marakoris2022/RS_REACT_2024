import { configureStore, createSlice } from '@reduxjs/toolkit';

const coreSlice = createSlice({
    name: 'coreSlice',
    initialState: {
        countries: ['Ukraine', 'USA', 'Germany', 'Spain', 'Italy'],
    },
    reducers: {},
});

const uncontrolledSlice = createSlice({
    name: 'uncontrolledSlice',
    initialState: {
        formData: {
            name: 'no data',
            age: 0,
            email: 'no data',
            password: 'no data',
            confirmPassword: 'no data',
            gender: false,
            terms: false,
            image: '',
            country: 'no data',
        },
    },
    reducers: {
        setUncontrolledFormData: (state, action) => {
            state.formData = { ...state, ...action.payload };
        },
    },
});

const controlledSlice = createSlice({
    name: 'controlledSlice',
    initialState: {
        formData: {
            name: 'no data',
            age: 1,
            email: 'no data',
            password: 'no data',
            confirmPassword: 'no data',
            gender: false,
            terms: false,
            image: 'no data',
            country: 'no data',
        },
    },
    reducers: {
        setControlledFormData: (state, action) => {
            state.formData = { ...state, ...action.payload };
        },
    },
});

export const { setUncontrolledFormData } = uncontrolledSlice.actions;
export const { setControlledFormData } = controlledSlice.actions;

export const store = configureStore({
    reducer: {
        uncontrolledSlice: uncontrolledSlice.reducer,
        controlledSlice: controlledSlice.reducer,
        coreSlice: coreSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
