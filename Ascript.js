// Team members data
const teamMembers = [
    {
        name: "Utsav Malaviya",
        role: "Chief Executive Officer",
        description: "Visionary leader with 15+ years of experience in tech innovation",
        image: "img/utsav.jpg",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`
    },
    {
        name: "Veer",
        role: "Chief Technology Officer",
        description: "Tech pioneer specializing in AI and cloud architecture",
        image: "img/veer.jpg",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`
    },
    {
        name: "Vedant",
        role: "Head of Product Design",
        description: "Award-winning designer with a passion for user experience",
        image: "img/vedant.jpg",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`
    },
    {
        name: "Parthiv",
        role: "Head of Operations",
        description: "Operations expert with a track record of scaling startups",
        image: "img/parthiv.jpg",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
    },
    {
        name: "Nirbhay",
        role: "Head of Marketing",
        description: "Digital marketing strategist driving global brand growth",
        image: "img/nirbhay.jpg",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`
    }
];

// Function to create team member cards
function createTeamCards() {
    const teamGrid = document.getElementById('teamGrid');
    
    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.className = 'team-card';
        
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <div class="team-card-content">
                <div class="team-card-header">
                    ${member.icon}
                    <h3>${member.name}</h3>
                </div>
                <p class="role">${member.role}</p>
                <p class="description">${member.description}</p>
            </div>
        `;
        
        teamGrid.appendChild(card);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    createTeamCards();
});