export const validateCredentials = (username:string, password:string) =>{
  if(!username || !password){
    return 'Username and password cannot be empty';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(username)) {
    return 'Invalid email address';
  }

  if (password.length < 6) {
    return 'Password must be at least 6 characters long';
  } 
    return null;
};

export const validateUsername = (username:string) =>{
  if(!username){
    return 'Username cannot be empty';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(username)) {
    return 'Invalid email address';
  }
    return null;
}

export const validatePassword = (password:string) =>{
  if(!password){
    return 'password cannot be empty';
  }

  if(password.length < 6){
    return 'password cannot be less than 6 characters';
  }
    return null;
};