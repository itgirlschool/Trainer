const postData = async (groupName, courseName) => {
    
    const dataNewUserAutonomy = {
      фамилия: lastNamePost,
      имя: firstNamePost,
      отчество: surnamePost,
      телефон: phonePost,
      email: emailPost,
    };
    try {
      await addUserAutonomy(dataNewUserAutonomy);
    } catch (err) {
      console.log(err);
    }
  };
  
  export default postData;