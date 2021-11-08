import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    nav: 'home',
    page: 'home',
    contact: 'leave',
    scroll: 'false',
    num: '0',
    detail: 'false'
};

const reducerSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        home: state => { state.nav = 'home' },
        aboutMe: state => { state.nav = 'aboutMe' },
        skill: state => { state.nav = 'skill' },
        project: state => { state.nav = 'project' },
        contact: state => { state.nav = 'contact' },

        pHome: state => { state.page = 'home' },
        pAboutMe: state => { state.page = 'aboutMe' },
        pSkill: state => { state.page = 'skill' },
        pProject: state => { state.page = 'project' },
        pContact: state => { state.page = 'contact' },

        tTextarea: state => { state.contact = 'textarea' },
        tLeave: state => { state.contact = 'leave' },

        sTrue: state => { state.scroll = 'true' },
        sFalse: state => { state.scroll = 'false' },

        nOne: state => { state.num = '1' },
        nTwo: state => { state.num = '2' },
        nThree: state => { state.num = '3' },
        nZero: state => { state.num = '0' },

        dTrue: state => { state.detail = 'true' },
        dFalse: state => { state.detail = 'false' }
    }
})

export const { home, aboutMe, skill, project, contact, pHome, pAboutMe, pSkill, pProject, pContact, tTextarea, leave, textarea, tLeave, sTrue, sFalse, nOne, nTwo, nThree, nZero, dTrue, dFalse  } = reducerSlice.actions;
export default reducerSlice.reducer;
