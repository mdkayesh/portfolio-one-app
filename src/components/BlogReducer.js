const Reducer = (state, action) => {
  switch (action.type) {
    case "GET_BLOG_DATA":
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const dateData = {};
      action.payload.forEach((item) => {
        let time = item.date.toDate().toLocaleTimeString();
        let date = item.date.toDate().getDate();
        let month = item.date.toDate().getMonth();
        let year = item.date.toDate().getFullYear();
        let monthName = months[month];

        dateData[item.id] = { date, monthName, year, time };
      });

      return { ...state, blogData: [...action.payload], dateData };
    case "GET_FILTERED_DATA":
      return { ...state, filteredBlogData: state.blogData };
    case "FILTERED":
      let filtered = state.blogData.filter((blog) =>
        blog.category
          .map((currElem) => currElem.toLowerCase())
          .includes(action.payload)
      );
      return { ...state, filteredBlogData: filtered, btnName: action.payload };

    case "GET_SINGLE_BLOG":
      const singleBlog = state.blogData.filter(
        (blog) => blog.id === action.payload
      );

      return { ...state, singleBlog };
    default:
      return state;
  }
};

export default Reducer;
