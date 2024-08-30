const postData = async (groupName, courseName) => {
    const dataLink = {
      группа: groupName,
      курс: courseName,
    };
    const url = "";
    try {
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(dataLink),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(response.statusText);
          }
        })
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };
  
  export default postData;
  