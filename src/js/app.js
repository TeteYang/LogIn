import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from './config/ui.config';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './views/form';
import { login, sigin } from './services/auth.services';

const {form, inputUser, inputPass, signForm, signUser, siginPass} = UI;
const inputs = [inputUser, inputPass];
const inputsIn = [signUser, siginPass]

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  removeInputError(inputUser);
  onSubmit();
  form.reset();
});

signForm.addEventListener('submit', (e)=> {
  e.preventDefault();
  removeInputError(signUser);
  onSubmitSign();
  signForm.reset();
})

inputs.forEach((el) => {
  el.addEventListener('focus', ()=>removeInputError(el));
})

async function onSubmit() {
  const isValidForm = inputs.some((el)=>{
    console.log(el)
    const isValidInput = validate(el);
    if(!isValidInput) {
      showInputError(el);
    }
    return isValidInput;
  })
  if(!isValidForm) {
    return;
  }
  try {
    await login(inputUser.value, inputPass.value);
  } catch(err) {
    console.log(err);
  }
  form.reset();
}

async function onSubmitSign() {
  const isValidForm = inputsIn.every((el)=>{
    const isValidInput = validate(el);
    if(!isValidInput) {
      showInputError(el);
    }
    return isValidInput;
  })
  if(!isValidForm) {
    return;
  }
  try {
    await sigin(signUser.value, siginPass.value);
  } catch(err) {
    console.log(err);
  }
  form.reset();
}










