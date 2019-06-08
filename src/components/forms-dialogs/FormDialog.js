import React, { Fragment } from 'react';
import ContactInput from './ContactInput';
import { Consumer } from '../../context';

/** This component is used to implement the conditional rendering of the input fields
 *  The 'key' attribute creates a new component instance rather than update the current one
 */

const FormDialog = () => {
  return (
   <Consumer>
     {value => {
       const { editMode, currentContact } = value;

       return (
         <Fragment>
            {editMode ? (
              <ContactInput 
                title={'Edit Contact'}
                subTitle={'Please update the information.'}
                isAdd={false}
                key={currentContact._id}
              />
           ) : (
              <ContactInput 
                title={'Add New Contact'}
                subTitle={'Please fill out the following information.'}
                isAdd={true}
              />
           )}
         </Fragment>
       )
     }}
   </Consumer>
  )
};

export default FormDialog;