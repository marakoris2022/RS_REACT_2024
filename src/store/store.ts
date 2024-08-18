import { configureStore, createSlice } from '@reduxjs/toolkit';

const COUNTRIES_INIT_DATA = ['Ukraine', 'USA', 'Germany', 'Spain', 'Italy'];
const FORM_INIT_DATA = {
    name: 'no data',
    age: 0,
    email: 'no data',
    password: 'no data',
    confirmPassword: 'no data',
    gender: false,
    terms: false,
    image: '',
    country: 'no data',
};

const coreSlice = createSlice({
    name: 'coreSlice',
    initialState: {
        countries: COUNTRIES_INIT_DATA,
        changedCard: null,
    },
    reducers: {
        setChangedCard: (state, action) => {
            state.changedCard = action.payload;
        },
    },
});

const uncontrolledSlice = createSlice({
    name: 'uncontrolledSlice',
    initialState: {
        formData: FORM_INIT_DATA,
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
        formData: FORM_INIT_DATA,
    },
    reducers: {
        setControlledFormData: (state, action) => {
            state.formData = { ...state, ...action.payload };
        },
    },
});

export const { setChangedCard } = coreSlice.actions;
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
