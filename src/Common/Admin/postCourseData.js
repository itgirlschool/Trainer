const postCourseData = async (courseName) => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const data = { courseName: courseName, groups: [] };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        console.log(data);
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    });
  } catch (error) {
    console.error("Ошибка:", error);
  }
};

export default postCourseData;
