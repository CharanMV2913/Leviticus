fetch("./jobs.json")
  .then((response) => response.json())
  .then((data) => {
    const outputDiv = document.getElementById("output");

    data.forEach((job) => {
      // Create the career item div element
      const careerItemDiv = document.createElement("a");
      careerItemDiv.target="_blank"
      careerItemDiv.href=`career-detail-page.html?id=${job.id}`
      careerItemDiv.classList.add("career-item", "text-decoration-none","text-dark");

      // Create the h3 element for the job title
      const jobTitleH3 = document.createElement("h3");
      jobTitleH3.classList.add("fw-bold", "text-four-line");
      jobTitleH3.textContent =job.title

      // // Create the h6 element for the job category
      // const jobCategoryH6 = document.createElement("h6");
      // jobCategoryH6.classList.add("fw-bold", "text-secondary");
      // jobCategoryH6.textContent = "Business & Technology Integration";

      // Create the p element for the location
      const locationP = document.createElement("p");
      locationP.classList.add("fw-medium");
      locationP.textContent = job.location

      // Create the p element for the posting date
      const postingDateP = document.createElement("p");
      postingDateP.classList.add("pt-4", "text-black-50");
      postingDateP.textContent = job.date

      // Append elements to the career item div
      careerItemDiv.appendChild(jobTitleH3);
      // careerItemDiv.appendChild(jobCategoryH6);
      careerItemDiv.appendChild(locationP);
      careerItemDiv.appendChild(postingDateP);

      // Append the career item div to the output div
      outputDiv.appendChild(careerItemDiv);
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
    document.getElementById('no-new-job').style.display="block"
  });
