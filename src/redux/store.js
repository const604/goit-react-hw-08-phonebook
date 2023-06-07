import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filtersSlice';
import { contactApi } from './operations';

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
        filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactApi.middleware),
});



// import { contactsReducer } from './contactsSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });
