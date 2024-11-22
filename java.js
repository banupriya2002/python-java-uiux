
function showEnrollForm() {
  document.getElementById('enrollForm').style.display = 'flex';
}

function hideEnrollForm() {
  document.getElementById('enrollForm').style.display = 'none';
}

// Example: Alert on clicking a feature
document.querySelectorAll('.feature1').forEach(feature => {
  feature.addEventListener('click', () => {
      alert('Explore more about this feature!');
  });
});





const modulesData = {
    "Java": ["Introduction", "Object-Oriented Programming", "Collections", "Concurrency", "Exception Handling", "Streams", "Lambda Expressions", "JDBC", "Spring Framework", "Hibernate"],
    "Spring Framework": ["Spring Core", "Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "Spring REST", "Spring Cloud", "Spring Batch", "Spring Integration", "Testing with Spring"],
    "Frontend": ["HTML Basics", "CSS Styling", "Responsive Design", "JavaScript Basics", "DOM Manipulation", "ES6+ Features", "Asynchronous JavaScript", "Fetch API", "Forms and Validation", "Frontend Frameworks (Angular/React)"],
    "Angular": ["Introduction to Angular", "Components", "Directives", "Services", "Routing", "Forms", "Observables", "Angular CLI", "Testing Angular Apps", "Performance Optimization"],
    "Databases": ["Relational Databases", "SQL Basics", "Joins", "Indexes", "Normalization", "Stored Procedures", "Transactions", "Database Design", "Query Optimization", "Database Security"],
    "REST API": ["Introduction to REST", "Building RESTful Services with Spring Boot", "CRUD Operations", "JWT Authentication", "Error Handling", "Versioning", "API Documentation (Swagger)", "Testing REST APIs", "Best Practices", "Rate Limiting"],
    "Git": ["Git Basics", "Cloning Repositories", "Branches", "Merging", "Pull Requests", "Version Control Workflow", "GitHub Collaboration", "Stashing", "Rebase", "Git Hooks"],
    "DevOps & Deployment": ["Version Control with Git", "CI/CD with Jenkins", "Containerization with Docker", "Cloud Deployment with AWS", "Performance Monitoring", "Server Configuration", "Logging and Debugging", "Database Deployment", "Automated Testing", "DevOps Best Practices"],
    "Microservices": ["Microservices Architecture", "Spring Cloud", "REST APIs", "Service Discovery", "Load Balancing", "Circuit Breaker", "API Gateway", "Microservices Security", "Distributed Tracing", "Event-Driven Architecture"],
    "Testing": ["Unit Testing with JUnit", "Integration Testing", "Mocking with Mockito", "Spring Test Framework", "Test-Driven Development (TDD)", "Integration with CI Tools", "Test Automation", "Performance Testing", "Test Coverage", "Best Practices"]
  };
  
  const carousel = document.querySelector('.carousel');
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  const techName = document.getElementById('tech-name');
  const modulesList = document.getElementById('modules-list');
  const downloadNotes = document.getElementById('download-notes');
  
  // Open modal with technology-specific modules
  carousel.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      const tech = e.target.dataset.tech;
      techName.textContent = tech;
      modulesList.innerHTML = modulesData[tech]
        .map(module => `<li>${module}</li>`)
        .join('');
      modal.style.display = 'block';
      overlay.style.display = 'block';
  
      downloadNotes.onclick = () => {
        const notes = modulesData[tech].join('\n');
        const blob = new Blob([notes], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${tech}_syllabus.txt`;
        link.click();
      };
    }
  });
  
  // Close modal when overlay is clicked
  overlay.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  });
    
  

// Add shadow effect dynamically
document.querySelectorAll('.feature').forEach(feature => {
  feature.addEventListener('mouseover', () => {
      feature.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.5)';
  });

  feature.addEventListener('mouseout', () => {
      feature.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
  });
});

// Blink effect enhancement
let blinkState = true;
setInterval(() => {
  document.querySelectorAll('.feature').forEach(feature => {
      feature.style.borderStyle = blinkState ? 'dotted' : 'solid';
  });
  blinkState = !blinkState;
}, 2000);


  
  
   function toggleAnswer(arrowElement) {
   const faqAnswer = arrowElement.parentElement.querySelector('.faq-answer');
     if (faqAnswer.style.display === 'block') {
       faqAnswer.style.display = 'none';
       arrowElement.classList.remove('arrow-up');
       arrowElement.classList.add('arrow-down');
     } else {
       faqAnswer.style.display = 'block';
      arrowElement.classList.remove('arrow-down');
      arrowElement.classList.add('arrow-up');
    }
  }



// Smooth scroll to the top on button click (optional functionality)
document.querySelector('.learn-more-btn').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});






function requestCallback() {
  alert("Thank you! An expert will call you within 24 working hours.");
}

function makeCall() {
  window.location.href = "tel:9736097320";
}


document.querySelectorAll('.feature').forEach((feature) => {
  feature.addEventListener('click', () => {
    feature.classList.toggle('stop-blink');
  });
});





// Wait for the DOM to fully load before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
  
  // Get the WhatsApp icon and link elements
  const whatsappIcon = document.getElementById('whatsapp-icon');
  const whatsappLink = document.getElementById('whatsapp-link');
  
  // Function to handle the WhatsApp icon click event
  whatsappIcon.addEventListener('click', function(event) {
    // Prevent the default link action
    event.preventDefault();

    // Optionally, show an alert before redirecting
    const userConfirmed = confirm("Are you sure you want to chat with us on WhatsApp?");
    
    if (userConfirmed) {
      // If the user confirms, open WhatsApp chat link
      window.open(whatsappLink.href, '_blank');
    } else {
      // If the user cancels, do nothing
      console.log("User canceled WhatsApp chat.");
    }
  });

});




// Toggle Share Options visibility
function toggleShareOptions() {
  const shareOptions = document.getElementById('share-options');
  // Toggle between showing and hiding share options
  if (shareOptions.style.display === 'none' || shareOptions.style.display === '') {
    shareOptions.style.display = 'block';
  } else {
    shareOptions.style.display = 'none';
  }
}

// Copy Current Page URL to Clipboard
function copyLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert("Link copied to clipboard!");
  }).catch(err => {
    alert("Failed to copy link: " + err);
  });
}



