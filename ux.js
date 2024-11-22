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
    "UI Design": ["Introduction", "Design Principles", "Wireframing", "Prototyping", "Color Theory", "Typography", "Layouts", "User Research", "Accessibility", "Best Practices"],
    "UX Design": ["User-Centered Design", "User Journeys", "Personas", "Information Architecture", "Wireframes", "Prototypes", "Usability Testing", "Interaction Design", "Responsive Design", "Best Practices"],
    "Tools": ["Figma", "Sketch", "Adobe XD", "InVision", "Zeplin", "Balsamiq", "Framer", "Marvel", "Affinity Designer", "Best Practices"],
    "Design Systems": ["Components", "Atomic Design", "UI Kits", "Style Guides", "Design Tokens", "Typography", "Color Palette", "Spacing", "Iconography", "Best Practices"],
    "User Research": ["Interviews", "Surveys", "Usability Testing", "Persona Development", "A/B Testing", "Analytics", "User Feedback", "Observation", "Competitive Analysis", "Best Practices"],
    "Prototyping": ["Low-Fidelity Prototypes", "High-Fidelity Prototypes", "Interactive Prototypes", "User Flow", "Wireframes", "Mockups", "Storyboarding", "Usability Testing", "Best Practices"],
    "Usability Testing": ["Test Planning", "Participant Selection", "Testing Methods", "Test Scripts", "Data Collection", "Analysis", "Feedback Implementation", "Iteration", "Best Practices"],
    "Responsive Design": ["Media Queries", "Flexbox", "Grid", "Mobile-First Design", "Breakpoints", "Testing", "Design Patterns", "Best Practices"],
    "Collaboration": ["Teamwork", "Version Control", "Client Communication", "Stakeholder Management", "Agile Methodology", "Project Management", "Design Handoff", "Best Practices"]
 };
  
  const carousel = document.querySelector('.carousel');
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  const techName = document.getElementById('tech-name');
  const modulesList = document.getElementById('modules-list');
  const downloadNotes = document.getElementById('download-notes');
  
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
