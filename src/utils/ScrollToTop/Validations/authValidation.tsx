export const validateCredentials = (username:string, password:string) =>{
    if(!username || !password){
        return 'Username and password cannot be empty';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(username)) {
    return 'Invalid email address';
  }

  // Check if password is at least 6 characters long
  if (password.length < 6) {
    return 'Password must be at least 6 characters long';
  } 
    return null;
};