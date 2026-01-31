fetch("data/doctors.json")
  .then((response) => response.json())
  .then((doctors) => {
    let output = "";
    doctors.forEach((doc) => {
      output += `
        <div class="doctor-card">
          <h3>${doc.name}</h3>
          <p><strong>${doc.role}</strong></p>
          <p>Experience: ${doc.experience}</p>
          <p>${doc.description}</p>
        </div>
      `;
    });
    document.getElementById("doctorList").innerHTML = output;
  })
  .catch((error) => console.log("Error loading doctors:", error));


  fetch("data/treatments.json")
    .then((response) => response.json())
    .then((treatments) => {
      let output = "";
      treatments.forEach((treat) => {
        output += `
        <div class="treatment-card">
          <img src="${treat.image}" alt="${treat.name}">
          <h3>${treat.name}</h3>
          <p>${treat.description}</p>
        </div>
      `;
      });

      const section = document.getElementById("treatmentList");
      if (section) section.innerHTML = output;
    })
    .catch((error) => console.log("Error loading treatments:", error));



    fetch("data/testimonials.json")
      .then((response) => response.json())
      .then((testimonials) => {
        let output = "";
        testimonials.forEach((item) => {
          output += `
        <div class="doctor-card">
          <p>"${item.review}"</p>
          <p><strong>- ${item.name}</strong></p>
        </div>
      `;
        });
        const section = document.getElementById("testimonialList");
        if (section) section.innerHTML = output;
      })
      .catch((error) => console.log("Error loading testimonials:", error));


      fetch("data/faq.json")
        .then((response) => response.json())
        .then((faqs) => {
          let output = "";
          faqs.forEach((faq) => {
            output += `
        <div class="doctor-card">
          <h4>${faq.question}</h4>
          <p>${faq.answer}</p>
        </div>
      `;
          });
          const section = document.getElementById("faqList");
          if (section) section.innerHTML = output;
        })
        .catch((error) => console.log("Error loading FAQ:", error));


        fetch("data/clinic.json")
          .then((response) => response.json())
          .then((clinic) => {
            const section = document.getElementById("clinicInfo");
            if (section) {
              section.innerHTML = `
        <p><strong>Address:</strong> ${clinic.address}</p>
        <p><strong>Email:</strong> ${clinic.email}</p>
        <p><strong>Phone:</strong> ${clinic.phone}</p>
        <p><strong>Timings:</strong> ${clinic.timing}</p>
      `;
            }
          })
          .catch((error) => console.log("Error loading clinic info:", error));


          