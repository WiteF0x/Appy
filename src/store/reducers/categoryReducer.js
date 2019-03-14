import { createReducer } from 'redux-act';

import { setCategoriesAction } from '../actions';

const initialState = {  
    mycategories: [],
};

export default createReducer({
    [setCategoriesAction]: (state, data) => {
        const categories = data;
        const mas = {};
        for(var i=0; i < categories.length; i++){
            categories[i].children = [];
        };

        for(var i=0; i < categories.length; i++)
        {
            for(var j=0; j < categories.length; j++)
            {
                if(categories[j]._id === categories[i].parentId)
                {
                    categories[j].children.push(categories[i]._id);
                }
            }
        }

        for(var i=0; i < categories.length; i++){
            mas[categories[i]._id] = categories[i];
        };

        return(
            mycategories={categories}
)},
}, initialState);
